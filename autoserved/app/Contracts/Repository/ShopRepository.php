<?php

namespace App\Contracts\Repository;

use Prettus\Repository\Contracts\RepositoryInterface;

/**
 * Interface ShopRepository.
 *
 * @package namespace App\Contracts\Repository;
 */
interface ShopRepository extends RepositoryInterface
{
    public function avatar();

    public function banner();
}
