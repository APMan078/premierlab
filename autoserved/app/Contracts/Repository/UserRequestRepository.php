<?php

namespace App\Contracts\Repository;

use Prettus\Repository\Contracts\RepositoryInterface;

/**
 * Interface UserRequestRepository.
 *
 * @package namespace App\Contracts\Repository;
 */
interface UserRequestRepository extends RepositoryInterface
{
    public function validator();
}
