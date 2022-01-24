<?php

namespace App\Models;
use Bavix\Wallet\Traits\HasWallet;
use Bavix\Wallet\Interfaces\Confirmable;
use Bavix\Wallet\Interfaces\Customer;
use Bavix\Wallet\Interfaces\Wallet;
use Bavix\Wallet\Traits\CanConfirm;
use Bavix\Wallet\Traits\CanPay;
use Cmgmyr\Messenger\Traits\Messagable;
use Spatie\Activitylog\Traits\CausesActivity;
use Spatie\Activitylog\Traits\LogsActivity;
use Balping\HashSlug\HasHashSlug;
use Laravel\Passport\HasApiTokens;
use Illuminate\Notifications\Notifiable;
use Illuminate\Contracts\Auth\CanResetPassword;
use Illuminate\Contracts\Auth\MustVerifyEmail;
use Illuminate\Database\Eloquent\SoftDeletes;
use Illuminate\Foundation\Auth\User as Authenticatable;
use Lab404\Impersonate\Models\Impersonate;
use Illuminate\Support\Facades\Auth;
use Spatie\MediaLibrary\HasMedia\HasMedia;
use Spatie\MediaLibrary\HasMedia\HasMediaTrait;
use Spatie\MediaLibrary\File;
use App\Models\Shop;
use App\Models\Fleet;
use App\Models\Vehicle;
use App\Models\Attendance;
use App\Models\Vendor;

class User extends Authenticatable implements Wallet, Customer, Confirmable, MustVerifyEmail, CanResetPassword, HasMedia
{
    use HasApiTokens, Notifiable, HasHashSlug, CanConfirm, CausesActivity, CanPay, HasWallet, LogsActivity, Messagable, SoftDeletes, Impersonate, HasMediaTrait;
    protected $fillable = [
        'first_name',
        'last_name',
        'email',
        'password',
        'mobile',
        'provider',
        'provider_id',
        'country',
        'user_type',
        'verification_token',
        'social',
        'email_verified_at',
        'guide',
        'fleet',
        'created_at'
    ];

    protected $hidden = [
        'password',
        'can_be_impersonated',
        'remember_token',
        'updated_at',
        'verification_token',
    ];

    protected $casts = [
        'email_verified_at' => 'datetime',
        'guide' => 'boolean',
    ];

    public function setPasswordAttribute($password)
    {
        $hash = resolve('Illuminate\Contracts\Hashing\Hasher');
        $this->attributes['password'] = $hash->make($password);
    }

    protected static $logAttributes = [
        'first_name',
        'last_name',
        'email',
        'user_type',
    ];

    protected $appends = ['slug', 'fullname', 'balance', 'impersonator', 'impersonated', 'pin', 'avatar', 'vehicle_count', 'shop_count'];

    public function getShopCountAttribute() {
        $shops = Shop::where('user_id', '=', $this->id)->get();
        return $shops->count();
    }
    public function getVehicleCountAttribute() {
        $vehicles = Vehicle::where('user_id', '=', $this->id)->get();
        return $vehicles->count();
    }
    public function getAvatarAttribute() {
        $avatar = $this->getMedia('avatar')->first();
        return ($avatar ? $avatar->getUrl() : null);
    }
    public function getPinAttribute() {
        $mdSlug = intval(substr(md5(Auth::user()->slug), 0, 8), 16);
        $pin = substr($mdSlug, 0, 6);

        return $pin;
    }
    public function getImpersonatedAttribute() {
        return \Cookie::get('impersonator');
    }

    public function getImpersonatorAttribute() {
        return Auth::user()->slug;
    }

    public function getSlugAttribute() {
        return $this->slug();
    }

    public function getRateAttribute() {
        return $this->personnel_info ? $this->personnel_info->rate : null;
    }
   
    public function getFullNameAttribute()
    {
        return ucwords("{$this->first_name} {$this->last_name}");
    }

    public function fleet()
    {
        return $this->hasOne(Fleet::class, 'fleet_admin', 'id');
    }

    public function shops()
    {
        return $this->hasMany(Shop::class);
    }

    public function vehicles()
    {
        return $this->hasMany(Vehicle::class);
    }

    public function attendances()
    {
        return $this->hasMany(Attendance::class)
                ->orderBy('date', 'desc');
    }

    public function vendor_info()
    {
        return $this->hasOne(\App\Models\Vendor::class);
    }

    public function personnel_info()
    {
        return $this->hasOne(\App\Models\Personnel::class);
    }

    public function routeNotificationForSlack($notification)
    {
        return config('logging.channels.slack.url');
    }

    public function canImpersonate()
    {
        // For example
        return $this->user_type == 'admin';
    }

    public function canBeImpersonated()
    {
        // For example
        return $this->can_be_impersonated == 1;
    }

    public function check_user_wallet($id) 
    {
        $user = User::find($id);
        return $user->balance;
    }

    public function user_deposit($id, $amount)
    {
        $user = User::find($id);
        $deposit = $user->deposit($amount);
        $balance = $user->balance;
        return $balance;
    }

    public function user_withdraw($id, $amount)
    {
        $user = User::find($id);
        $withdraw = $user->withdraw($amount);
        $balance = $user->balance;
        return $balance;
    }

    public function user_add_credit($id, $amount, $message)
    {
        $user = User::find($id);
        $deposit = $user->deposit($amount, [ 'message' => $message ], true);
        $balance = $user->balance;
        return $balance;
    }

    public function registerMediaCollections()
    {
        $this->addMediaCollection('avatar');
    }
}
