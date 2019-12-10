<?php

use App\User;
use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
  public function run()
  {
    User::create([
      'name' => 'john_doe',
      'email' => 'demo@demo.com',
      'phone' => '123123123',
      'first_name' => 'John',
      'last_name' => 'Doe',
      'password' => bcrypt('secret'),
    ]);
  }
}
