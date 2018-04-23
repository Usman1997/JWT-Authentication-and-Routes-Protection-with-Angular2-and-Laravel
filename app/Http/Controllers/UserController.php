<?php

namespace App\Http\Controllers;
use App\User;
use Illuminate\Http\Request;
use Tymon\JWTAuth\Exceptions\JWTExceptions;
use Tymon\JWTAuth\Facades\JWTAuth;

class UserController extends Controller
{
     public function Signup(Request $request){
        $this->validate($request,[
           'name' => 'required',
            'email' =>'required |email|unique:users',
            'password' => 'required'

        ]);
        $user = new User([
            'name' => $request->input('name'),
            'email'=>$request->input('email'),
            'password' =>bcrypt($request->input('password'))

        ]);
        $user->save();
        return response()->json(['success'=>true,'message'=>'success',201]);
    }

    public function SignIn(Request $request){
        $this->validate($request,[
  

             'email' =>'required |email',
             'password' => 'required'
       
 
         ]);

         $credentials = $request->only('email','password');
         
         try{
             if(!$token = JWTAuth::attempt($credentials)){
                 return response()->json(['message'=>'Invalid Credentials'],401);
             }
         }catch(JWTException $e){
             return response()->json(['error'=>'Could not create token!'],500);
         }
         $user = User::all()->where('email',$request->input('email'));
         return response()->json(['token'=>$token,'success'=>true,'user'=>$user],200);


    }
    public function getProfile(){
        $user = JWTAuth::parseToken()->ToUser();
        return response()->json(['user'=>$user]);
    }
}
