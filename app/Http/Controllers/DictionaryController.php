<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Dictionary;
use App\Http\Requests;

class DictionaryController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //
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
        //
    }

    /**
     * Display the specified resource.
     *
     * @param Dictionary $dictionary
     * @return array
     */
    public function show(Dictionary $dictionary)
    {
        return [
            'id'=>$dictionary->id,
            'type_id'=>$dictionary->type,
            'type'=>Dictionary::getDictionaryTypes()[$dictionary->type],
            'value'=>$dictionary->value,
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
        //
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

    public function getType(Request $request)
    {
        if ($request->dic_type == 'types') {
            return Dictionary::getDictionaryTypes(true);
        }
        $type = constant('App\Dictionary::TYPE_' . strtoupper($request->dic_type));
        $items = Dictionary::getDictionary($type, true);
        return $items;
    }
}