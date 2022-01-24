<?php

namespace App\Repositories\Eloquent;

use App\Models\User;
use App\Presenters\UserPresenter;
use App\Criterias\OnlyOwnUserCriteria;
use App\Repositories\Eloquent\BaseRepoWithSlugs;
use App\Contracts\Repository\UserRepositoryContract;
use App\Models\Fleet;
use App\Models\Shop;
use App\Models\Application;
class UserRepository extends BaseRepoWithSlugs implements UserRepositoryContract
{
    private $auth;

    protected $skipPresenter = true;

    protected $fieldSearchable = [
        'first_name' =>'like',
        'last_name' =>'like',
        'email'
    ];

    public function boot()
    {
        $this->auth = resolve('Illuminate\Contracts\Auth\Factory');
        $this->pushCriteria(app('Prettus\Repository\Criteria\RequestCriteria'));
        // $this->pushCriteria(OnlyOwnUserCriteria::class);
    }

    public function balance()
    {
        return $this->model->balance();
    }

    public function model()
    {
        return User::class;
    }

    public function presenter()
    {
        return UserPresenter::class;
    }

    public function currentUser()
    {
        return $this->find($this->auth->user()->id);
    }

    public function setCurrentAvatar($fileUrl)
    {
        return $this->update(['avatar' => $fileUrl], $this->auth->user()->id);
    }

    public function getCurrentAvatarFile()
    {
        return $this->skipPresenter()->find($this->auth->user()->id)->avatar;
    }

    public function removeCurrentAvatar()
    {
        return $this->update(['avatar' => null], $this->auth->user()->id);
    }

    //TODO: Send email when registering shop or fleet account.
    public function register(array $data)
    {
        $userData = array(
            'first_name' => $data['first_name'],
            'last_name' => $data['last_name'],
            'email' => $data['email'],
            'password' => $data['password'],
            'mobile' => $data['mobile'],
            'country' => $data['country'],
            'type' => $data['type'],
            'user_type' => $data['user_type']
        );

        $newUser = $this->create($userData);

        if ($data['type'] == 'shop') {
            $shop = Shop::create([
                'name' => $data['shop_name'],
                'type' => config('shop.type.service_center'),
                'operations' => config('shop.operations'),
                'features' => config('shop.features'),
                'amenities' => config('shop.amenities'),
                'user_id' => $newUser->id
            ]);

            $application = Application::create([
                'lifters' => 1,
                'shop_id' => $shop->id,
            ]);
        } elseif ($data['type'] == 'fleet') {
            $fleet = Fleet::create([
                'name' => $data['fleet_name'], 
                'fleet_admin' => $newUser->id
            ]);
        }

        return $newUser;
    }
}
