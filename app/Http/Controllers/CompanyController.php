<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Company;
use App\Http\Requests;

class CompanyController extends Controller
{
    /**
     * Display a listing of the resource.
     * @param Request $request
     * @return array|\Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index(Request $request)
    {
        if ($request->shorted) {
            return Company::getCompanies(true);
        } else {
            $companies = Company::paginate(20);
            $response = [];
            if ($companies->count() > 0) {
                $response['current'] = $companies->currentPage();
                $response['last'] = $companies->lastPage();
                $response['companies'] = [];
                foreach ($companies->getCollection() as $company) {
                    $response['companies'][$company->id] = [
                        'title' => $company->title,
                        'link' => $company->link,
                        'location' => $company->dictionaryValue('location'),
                        'info' => $company->info,
                    ];
                }
            }
            return $response;
        }
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $a = 0;
    }

    /**
     * Display the specified resource.
     *
     * @param Company $company
     * @return array
     */
    public function show(Company $company)
    {
        return [
            'id' => $company->id,
            'title' => $company->title,
            'link' => $company->link,
            'location_id' => $company->location_id,
            'location' => $company->dictionaryValue('location'),
            'info' => $company->info,
        ];
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $a = 0;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

}
