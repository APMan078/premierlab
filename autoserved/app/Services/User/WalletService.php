<?php

namespace App\Services\User;

use Illuminate\Validation\ValidationException;
use Illuminate\Contracts\Validation\Factory as Validator;
use Illuminate\Contracts\Routing\ResponseFactory as Response;
use App\Contracts\Repository\UserRepositoryContract as UserRepository;
use App\Models\User;

class WalletService
{
    private $validator;
    private $response;
    private $user;
    protected $repository;
    
    public function __construct(
        Validator $validator,
        UserRepository $repository,
        Response $response
    ) {
        $this->response = $response;
        $this->validator = $validator;
        $this->repository = $repository;
    }

    public function validateDepositData($data)
    {
        return $this->validator->make($data, [
            'slug' => 'required',
            'amount' => 'required|digits_between:1,5000'
        ]);
    }

    public function validateWithdrawData($data)
    {
        return $this->validator->make($data, [
            'slug' => 'required',
            'amount' => 'required|digits_between:1,5000'
        ]);
    }

    public function check_balance($data)
    {
        $user_id = $this->repository->decodeSlug($data);
        $user = new User;
        $balance = $user->check_user_wallet($user_id);
        return $balance;
    }

    public function deposit($data)
    {
        try {
            $validator = $this->validateDepositData($data);
            if ($validator->fails()) {
                throw new ValidationException($validator);
            }
    
            $user_id = $this->repository->decodeSlug($data['slug']);
            $user = new User;
            $balance = $user->check_user_wallet($user_id);
            $deposit = $user->user_deposit($user_id, $data['amount']);
            // Put Activity Log here for message
            
            if (request()->wantsJson()) {
                if ( $balance < $deposit )
                {
                    return $this->response->success(['message' => 'Successfully Deposited ' . $data['amount'] . ' to your account.', 'balance' => $deposit]);
                } else {
                    return $this->response->success(['message' => 'Deposit Failed.']);
                }
            }
        } catch(ValidationException $e) {
            return $this->response->validateError($e->errors());
        }

    }

    public function withdraw($data)
    {
        $validator = $this->validateWithdrawData($data);
        if ($validator->fails()) {
            throw new ValidationException($validator);
        }
        $user_id = $this->repository->decodeSlug($data['slug']);
        $user = new User;
        $balance = $user->check_user_wallet($user_id);
        $withdraw = $user->user_withdraw($user_id, $data['amount']);
        // Put Activity Log here for message

        if (request()->wantsJson()) {
            if ( $balance > $withdraw )
            {
                return $this->response->success(['message' => 'Successfully Withdraw ' . $data['amount'] . ' to your account.', 'balance' => $withdraw]);
            }
        }
    }


}
