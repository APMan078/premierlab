<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Prettus\Repository\Contracts\Transformable;
use Prettus\Repository\Traits\TransformableTrait;
use App\Models\MasterCarMake;
/**
 * Class MasterCarModel.
 *
 * @package namespace App\Models;
 */
class MasterCarModel extends Model implements Transformable
{
    use TransformableTrait;

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'make_id', 'name', 'type_id'
    ];

    protected $hidden = [
        'created_at',
        'deleted_at',
    ];

    // protected $appends = ['make'];

    public function getMakeAttribute() {
        return MasterCarMake::find($this->make_id)->name;
    }
}
