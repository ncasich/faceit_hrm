<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\User;
use App\Http\Requests;

class UserController extends Controller
{
    /**
     * Display a listing of the resource.
     * @param Request $request
     * @return array|\Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index(Request $request)
    {
        $users = User::paginate(20);
        $response = [];
        if ($users->count() > 0) {
            $response['current'] = $users->currentPage();
            $response['last'] = $users->lastPage();
            $response['users'] = [];
            foreach ($users->getCollection() as $user) {
                $response['users'][$user->id] = [
                    'name' => $user->last_name . ' ' . $user->first_name,
                    'position' => $user->dictionaryValue('position'),
                    'salary' => $user->salary . ' ' . $user->dictionaryValue('currency'),
                    'added' => $user->created_at->format('d.m.Y'),
                    'notes' => $user->notes
                ];
            }
        }

        return $response;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {

    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

    }

    /**
     * Display the specified resource.
     *
     * @param User $user
     * @return array
     */
    public function show(User $user)
    {
        return [
            'id'=>$user->id,
            'first_name' => $user->first_name,
            'last_name' => $user->last_name,
            'patronymic' => $user->patronymic,
            'birthday' => $user->birthday,                                      //format
            'position' => $user->dictionaryValue('position'),
            'position_id' => $user->position_id,
            'amount' => $user->salary,
            'currency_id' => $user->currency_id,
            'salary' => $user->salary . ' ' . $user->dictionaryValue('currency'),
            'residence' => $user->dictionaryValue('residence'),
            'residence_id' => $user->residence_id,
            'cv_src' => $user->cv_src,
            'location' => $user->dictionaryValue('location'),
            'location_id' => $user->location_id,
            'relocatable' => $user->relocatable,
            'education' => $user->education,
            'lang' => $user->lang,
            'email' => $user->email,
            'phone' => $user->phone,
            'skype' => $user->skype,
            'user_links' => $user->user_links,
            'company' => $user->company->title,
            'company_id' => $user->company_id,
            'linkedin' => $user->linkedin,
            'facebook' => $user->facebook,
            'vk' => $user->vk,
            'google_plus' => $user->google_plus,
            'notes' => $user->notes,
            'about' => $user->about,
            'completeness'=>$user->getCompleteness(),
            'completeness_class'=>$user->getCompleteness(true),
        ];
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param User $user
     * @return \Illuminate\Http\Response
     */
    public function edit(User $user)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param User $user
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, User $user)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param User $user
     * @return \Illuminate\Http\Response
     */
    public function destroy(User $user)
    {
        //
    }
}
