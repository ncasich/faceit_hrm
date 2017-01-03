<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Vacancy;
use App\Dictionary;
use App\Http\Requests;
use App\Candidate;
use App\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Auth;
use App\Event;
use App\History;

class VacancyController extends Controller
{
    /**
     * Display a listing of the resource.
     * @param Request $request
     * @return array|\Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function index(Request $request)
    {
        $vacancies = Vacancy::paginate(20);
        $response = [];
        if ($vacancies->count() > 0) {
            $response['current'] = $vacancies->currentPage();
            $response['last'] = $vacancies->lastPage();
            $response['vacancies'] = [];
            foreach ($vacancies->getCollection() as $vacancy) {
                $response['vacancies'][$vacancy->id] = [
                    'title' => $vacancy->title,
                    'salary' => $vacancy->salary . ' ' . $vacancy->dictionaryValue('currency'),
                    'location' => $vacancy->dictionaryValue('location'),
                    'requirements' => $vacancy->requirements,
                ];
            }
        }

        return $response;
    }

    /**
     * Show the form for creating a new resource.
     *
     * @param Request $request
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     */
    public function create(Request $request)
    {
        if (!$request->ajax())
            return view('react');
        return null;
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        if (Auth::user()->cannot('create', new Vacancy)) {
            abort(403);
        }

        $this->validate($request, Vacancy::getRules());
        Vacancy::create($request->all());
        return redirect('vacancy');
    }

    /**
     * Display the specified resource.
     *
     * @param  Vacancy $vacancy
     * @return array
     */
    public function show(Vacancy $vacancy)
    {
        return [
            'id' => $vacancy->id,
            'title' => $vacancy->title,
            'amount' => $vacancy->salary,
            'currency_id' => $vacancy->currency_id,
            'salary' => $vacancy->salary . ' ' . $vacancy->dictionaryValue('currency'),
            'location' => $vacancy->dictionaryValue('location'),
            'location_id' => $vacancy->location_id,
            'lang' => $vacancy->lang,
            'requirements' => $vacancy->requirements,
        ];
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  Vacancy $vacancy
     * @return \Illuminate\Http\Response
     */
    public function edit(Vacancy $vacancy)
    {
        if (Auth::user()->cannot('update', $vacancy)) {
            abort(403);
        }
        return view('vacancy.create', $this->getFormArgs('VacancyController@update', $vacancy));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request $request
     * @param  Vacancy $vacancy
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Vacancy $vacancy)
    {
        if (Auth::user()->cannot('update', $vacancy)) {
            abort(403);
        }

        $this->validate($request, Vacancy::getRules());
        $vacancy->update($request->all());
        return redirect('vacancy');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param Vacancy $vacancy
     * @return \Illuminate\Http\RedirectResponse|\Illuminate\Routing\Redirector
     * @throws \Exception
     */
    public function destroy(Vacancy $vacancy)
    {
        if (Auth::user()->cannot('delete', $vacancy)) {
            abort(403);
        }
        DB::beginTransaction();
        try {
            $vacancy->delete();
        } catch (\Exception $e) {
            DB::rollback();
            throw $e;
        }
        DB::Commit();

        return redirect('vacancy');
    }

    /**
     * @param $action
     * @param Vacancy $vacancy
     * @return array
     */
    protected function getFormArgs($action, Vacancy $vacancy)
    {
        $method = $vacancy->id ? 'put' : 'post';
        $currencies = Dictionary::getDictionary(Dictionary::TYPE_CURRENCY, true);
        $locations = Dictionary::getDictionary(Dictionary::TYPE_LOCATION, true);
        return [
            'vacancy' => $vacancy,
            'action' => $action,
            'method' => $method,
            'locations' => $locations,
            'currencies' => $currencies,
            'page' => 'vacancy-edit',
        ];
    }

    /**
     * @param Request $request
     * @param Vacancy $vacancy
     * @return \Illuminate\Http\JsonResponse
     */
    public function history(Request $request, Vacancy $vacancy)
    {
        if ($request->isMethod('get')) {
            $result = $vacancy->history()->paginate(5);
            $links = empty($result->links()) ? '' : $result->links()->toHtml();

            $response = ['data' => [],
                'links' => $links,
            ];

            $i = 0;
            foreach ($result->getCollection() as $history) {
                $response['data'][$i]['manager'] = $history->manager->last_name . ' ' . $history->manager->first_name;
                $response['data'][$i]['user'] = $history->user->last_name . ' ' . $history->user->first_name;
                $response['data'][$i]['vacancy'] = $history->vacancy->title;
                $response['data'][$i]['old_val'] = $history->old_val ? Candidate::getStatus()[$history->old_val] : '';
                $response['data'][$i]['old_class'] = $history->old_val ? Candidate::getCssClass($history->old_val) : '';
                $response['data'][$i]['new_val'] = $history->new_val ? Candidate::getStatus()[$history->new_val] : '';
                $response['data'][$i]['new_class'] = $history->new_val ? Candidate::getCssClass($history->new_val) : '';
                $response['data'][$i]['action'] = History::getActionType()[$history->action_type];
                $response['data'][$i]['date'] = $history->created_at->format('d.m.y в H:i:s');
                ++$i;
            }

            return response()->json($response);
        }
    }
}
