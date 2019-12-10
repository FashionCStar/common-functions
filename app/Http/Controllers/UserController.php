<?php

namespace App\Http\Controllers;

use App\Mail\ConfirmUserMail;
use App\User;
use App\Mail\VerifyMail;
use Mail;
use Illuminate\Support\Facades\Storage;
use Twilio\Exceptions\TwilioException;
use Twilio\Rest\Client;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Validator;

class UserController extends Controller
{
  public function login()
  {
    $credentials = [
      'email' => request('email'),
      'password' => request('password')
    ];

    if (Auth::attempt($credentials)) {
      $user = User::find(Auth::id());
      if ($user['is_active'] > 0) {
        return response()->json($this->successResponse($user), 200);
      } else {
        return response()->json([
          'error' => 'Unauthorised',
          'message' => 'Please verify your account.'
        ], 401);
      }
    }

    return response()->json([
      'error' => 'Unauthorised',
      'failed' => 'Wrong email or password.'
    ], 404);
  }

  public function register(Request $request)
  {
    $validator = Validator::make($request->all(), [
      'name' => 'required',
      'email' => 'required|email',
      'password' => 'required',
    ]);

    if ($validator->fails()) {
      return response()->json(['failed'=>'User Info is not correct, Please check again','error' => $validator->errors()], 401);
    }

    $input = $request->all();
    $input['password'] = bcrypt($input['password']);

    $user = User::create($input);
    $successUser = $this->successResponse($user);
    $this->sendConfirmEmail($user->email, $successUser['token']);
    return response()->json(['success' => $successUser]);
  }

  public function sendConfirmEmail($email, $token) {
    Mail::to($email)->send(new ConfirmUserMail($email, $token));
  }

  private function successResponse(User $user)
  {
    $freshToken = $user->createToken('MyApp');
    $success['user'] = $user;
    $success['token'] = $freshToken->accessToken;
    $success['expiresAt'] = $freshToken->token->expires_at;

    return $success;
  }
}
