<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;
use Balping\HashSlug\HasHashSlug;

/**
 * Class RequestService.
 *
 * @package namespace App\Models;
 */
class RequestService extends Model implements Transformable
{
    use TransformableTrait, HasHashSlug;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'requirements',
        'preferrence',
        'request_id',
    ];

    protected $hidden = [
        'created_at',
        'deleted_at',
    ];

    protected $casts = [
        'requirements' => 'array',
        'preferrence' => 'array',
        'request_id' => 'integer',
    ];

    protected static $logAttributes = [
        'requirements',
        'preferrence',
        'request_id'
    ];

    protected static $submitEmptyLogs = false;

    public function userRequest()
    {
        return $this->belongsTo(UserRequest::class);
    }
}
