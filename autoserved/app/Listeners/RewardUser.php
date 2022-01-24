<?php

namespace App\Listeners;

use App\Events\UserReferred;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Queue\InteractsWithQueue;

class RewardUser
{
    /**
     * Create the event listener.
     *
     * @return void
     */
    public function __construct()
    {
        //
    }

    /**
     * Handle the event.
     *
     * @param  UserReferred  $event
     * @return void
     */
    public function handle(UserReferred $event)
    {
        $referral = \App\ReferralLink::find($event->referralId);
        if (!is_null($referral)) {
            \App\ReferralRelationship::create(['referral_link_id' => $referral->id, 'user_id' => $event->user->id]);
        
            // Example...
            if ($referral->program->name === 'Sign-up Bonus') {
                // User who was sharing link
                $provider = $referral->user;
                $provider->user_add_credit($provider->id, 50, 'Referred ' . $user->first_name . ' ' . $user->last_name);
                // User who used the link
                $user = $event->user;
                $user->user_add_credit($user->id, 250, 'Registration Credits');
            }
        
        }
    }
}
