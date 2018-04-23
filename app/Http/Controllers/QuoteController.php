<?php

namespace App\Http\Controllers;
use App\Quote;
use Illuminate\Http\Request;
use JWTAuth;
class QuoteController extends Controller
{
    public function postQuote(Request $request){
        $user = JWTAuth::parseToken()->ToUser();
         $quote = new Quote();
         $quote->content  = $request->input('content');
         $quote->save();
         return response()->json(['quote' => $quote,'user'=>$user],201);
       }
    
       public function getQuote(){
           $quote = Quote::all();
           $response = [
               'quotes' => $quote
           ];
           return response()->json($response,200);
       }
    
       public function putQuote(Request $request,$id){
          $quote = Quote::find($id);
          if(!$quote){
              return response()->json(['message'=>'Quote not found'],404);
          }
          $quote->content = $request->input('content');
          $quote->save();
          return response()->json(['quote'=>$quote],200);
    
       }
    
       public function deleteQuote($id){
           $quote = Quote::find($id);
           $quote->delete();
           return response()->json(['message'=>'Quote deleted'],200);
       }
}
