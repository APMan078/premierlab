<?php

namespace App\Contracts\Repository;

use Prettus\Repository\Contracts\RepositoryInterface;

/**
 * Interface AppointmentRepository.
 *
 * @package namespace App\Contracts\Repository;
 */
interface AppointmentRepository extends RepositoryInterface
{
    public function all();
}
