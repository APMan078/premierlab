<?php
namespace App\Transformers;

use App\Models\User;
use League\Fractal\TransformerAbstract;

/**
 * Class UserTransformer.
 *
 * @package namespace App\Transformers;
 */
class UserTransformer extends TransformerAbstract
{
    private $fileSystem;

    public function __construct()
    {
        $this->fileSystem = resolve('Illuminate\Contracts\Filesystem\Factory');
    }

    /**
     * Transform the User entity.
     *
     * @param \App\Models\User $model
     *
     * @return array
     */
    public function transform(User $model)
    {
        return [
            'slug' => $model->slug(),
            'fullname' => $model->fullname,
            'first_name' => $model->first_name,
            'last_name' => $model->last_name,
            'email' => $model->email,
            'password' => $model->password,
            'mobile' => $model->mobile,
            'country' => $model->country,
            'user_type' => $model->user_type,
            'social' => $model->social,
            'guide' => $model->guide,
            'fleet' => $model->fleet,
            'balance' => (int) $model->balance,
            'impersonator' => $model->getImpersonatorAttribute(),
            'impersonated' => $model->getImpersonatedAttribute(),
            'can_be_impersonated' => $model->canBeImpersonated(),
            'pin' => $model->getPinAttribute(),
            'avatar' => $model->getAvatarAttribute(),
            'vehicle_count' => $model->getVehicleCountAttribute(),
            'shop_count' => $model->getShopCountAttribute(),
            'created_at' => $model->created_at,
            'updated_at' => $model->updated_at,
        ];
    }
}
