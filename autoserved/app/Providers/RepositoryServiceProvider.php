<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{

    /**
     * Container resolvers for the application repositories.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(
            'App\Contracts\Repository\UserRepositoryContract',
            'App\Repositories\Eloquent\UserRepository'
        );

        $this->app->bind(
            'App\Contracts\Repository\ShopRepository',
            'App\Repositories\Eloquent\ShopRepositoryEloquent'
        );

        $this->app->bind(
            'App\Contracts\Repository\CustomerRepository',
            'App\Repositories\Eloquent\CustomerRepositoryEloquent'
        );

        $this->app->bind(
            'App\Contracts\Repository\FleetRepository',
            'App\Repositories\Eloquent\FleetRepositoryEloquent'
        );

        $this->app->bind(
            'App\Contracts\Repository\MasterCarMakeRepository',
            'App\Repositories\Eloquent\MasterCarMakeRepositoryEloquent'
        );

        $this->app->bind(
            'App\Contracts\Repository\MasterCarModelRepository',
            'App\Repositories\Eloquent\MasterCarModelRepositoryEloquent'
        );

        $this->app->bind(
            'App\Contracts\Repository\MasterCarGenerationRepository',
            'App\Repositories\Eloquent\MasterCarGenerationRepositoryEloquent'
        );

        $this->app->bind(
            'App\Contracts\Repository\MasterCarSerieRepository',
            'App\Repositories\Eloquent\MasterCarSerieRepositoryEloquent'
        );

        $this->app->bind(
            'App\Contracts\Repository\MasterCarTrimRepository',
            'App\Repositories\Eloquent\MasterCarTrimRepositoryEloquent'
        );

        $this->app->bind(
            'App\Contracts\Repository\MasterPmsListRepository',
            'App\Repositories\Eloquent\MasterPmsListRepositoryEloquent'
        );

        $this->app->bind(
            'App\Contracts\Repository\MasterPmsOtherRepository',
            'App\Repositories\Eloquent\MasterPmsOtherRepositoryEloquent'
        );

        $this->app->bind(
            'App\Contracts\Repository\MasterServiceListRepository',
            'App\Repositories\Eloquent\MasterServiceListRepositoryEloquent'
        );

        $this->app->bind(
            'App\Contracts\Repository\VehicleRepository',
            'App\Repositories\Eloquent\VehicleRepositoryEloquent'
        );

        $this->app->bind(
            'App\Contracts\Repository\ApplicationRepository',
            'App\Repositories\Eloquent\ApplicationRepositoryEloquent'
        );

        $this->app->bind(
            'App\Contracts\Repository\ShopServiceRepository',
            'App\Repositories\Eloquent\ShopServiceRepositoryEloquent'
        );

        $this->app->bind(
            'App\Contracts\Repository\ScheduleRepository',
            'App\Repositories\Eloquent\ScheduleRepositoryEloquent'
        );

        $this->app->bind(
            'App\Contracts\Repository\UserRequestRepository',
            'App\Repositories\Eloquent\UserRequestRepositoryEloquent'
        );

        $this->app->bind(
            'App\Contracts\Repository\VendorRepository',
            'App\Repositories\Eloquent\VendorRepositoryEloquent'
        );

        $this->app->bind(
            'App\Contracts\Repository\PersonnelRepository',
            'App\Repositories\Eloquent\PersonnelRepositoryEloquent'
        );

        $this->app->bind(
            'App\Contracts\Repository\RequestPmsRepository',
            'App\Repositories\Eloquent\RequestPmsRepositoryEloquent'
        );

        $this->app->bind(
            'App\Contracts\Repository\RequestServiceRepository',
            'App\Repositories\Eloquent\RequestServiceRepositoryEloquent'
        );

        $this->app->bind(
            'App\Contracts\Repository\VehicleNewsRepository',
            'App\Repositories\Eloquent\VehicleNewsRepositoryEloquent'
        );

        $this->app->bind(
            'App\Contracts\Repository\AttendanceRepository',
            'App\Repositories\Eloquent\AttendanceRepositoryEloquent'
        );

        $this->app->bind(
            'App\Contracts\Repository\AppointmentRepository',
            'App\Repositories\Eloquent\AppointmentRepositoryEloquent'
        );

        $this->app->bind(
            'App\Contracts\Repository\WorkflowRepository',
            'App\Repositories\Eloquent\WorkflowRepositoryEloquent'
        );
    }
}
