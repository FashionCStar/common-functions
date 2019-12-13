<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Validator;
use Response;
use Illuminate\Support\Facades\Input;
use App\Buyer;

class BuyerController extends Controller
{
    //
  public function createBuyer (Request $request) {
    try {
//      $buyer = Buyer::create([
//        'name' => $request->get('name'),
//        'sex' => $request->get('sex'),
//        'age' => $request->get('age'),
//      ]);
      $buyerInfo = $request['data'];
      $buyer = Buyer::create($buyerInfo);
      return Response::json(['success' => 'Buyer is Successfully created', 'data' => $buyer], 200);
    } catch (Exception $e) {
      return Response::json(['message' => 'This Buyer is already exist'], 500);
    }
  }

  public function getBuyers (Request $request) {
    $start = $request['start'] ? $request['start'] : 0;
    $numPerPage = $request['numPerPage'] ? $request['numPerPage'] : 10;
    $sortBy = $request['sortBy'] ? $request['sortBy'] : 'name';
    $desc = $request['descending'] ? 'DESC' : 'ASC';

    if ($request['conditions'] && $request['conditions']['filter']) {
      $search = $request['conditions']['filter'];
      $totalCount = count(Buyer::where('name', 'like', '%' . $search . '%')->get());
      $buyers = Buyer::where('name', 'like', '%' . $search . '%')->orderBy($sortBy, $desc)->skip($start)->take($numPerPage)->get();
    } else {
      $totalCount = count(Buyer::all());
      $buyers = Buyer::orderBy($sortBy, $desc)->skip($start)->take($numPerPage)->get();
    }
    if ($totalCount == 0) {
      return response()->json(['success'=>'success', 'totalCount' => $totalCount, 'data' => []], 200);
    } else {
      return response()->json(['success'=>'success', 'totalCount' => $totalCount, 'data' => $buyers], 200);
    }
  }

  public function getBuyerByID (Request $request) {
    $buyerID = Input::get('buyerID');
    try {
      $buyer = Buyer::find($buyerID);
      return response()->json(['success' => 'success', 'data' => $buyer], 200);
    } catch (Exception $e) {
      return response()->json(['error' => 'Buyer with this id is not exist'], 404);
    }
  }

  public function updateBuyer (Request $request) {
    $buyerInfo = $request['data'];
    $buyerID = $request['conditions']['id'];
    try {
      $buyer = Buyer::find($buyerID);
      $buyer->update($buyerInfo);
      return response()->json(['success' => 'success', 'data' => $buyer], 200);
    } catch (Exception $e) {
      return response()->json(['message' => 'Update Buyer is failed', 'error' => $e], 500);
    }
  }

  public function removeBuyer (Request $request) {
    $buyer = buyer::find($request['conditions']['id']);
    try {
      $buyer->delete();
      return response()->json(['success' => 'Buyer Successfully Removed']);
    } catch (Exception $e) {
      return response()->json(['error' => 'Buyer Remove Failed']);
    }
  }
}
