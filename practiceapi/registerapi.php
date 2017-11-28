<?php
// required headers
//header("Access-Control-Allow-Origin: *");
//header("Content-Type: application/json; charset=UTF-8");
//header("Access-Control-Allow-Methods: POST");
//header("Access-Control-Max-Age: 3600");
//header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// get posted data
//$data = json_decode(file_get_contents("php://input"));
//include "db.php";
//from insertUser.php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Content-Type: application/x-www-form-urlencoded');
header('Content-Type: application/json');
$data = json_decode( file_get_contents('php://input'),true );
 //print_r($data);exit;
// get database connection
include_once 'config/database.php';
 
// instantiate users object
include_once 'includes/functions.php';
 
$database = new Database();
$db = $database->getConnection();
 
$users = new Users($db);
print_r($data);
 

//$users->UserType = $data->UserType;
//$users->firstname = $data->first_name;
//$users->lastname = $data->last_name;
//$users->age = $data->age;
//$users->gender = $data->gender;
//$users->dob = $data->dob;
//$users->rating = $data->rating;
//$users->phone_no = $data->phone_no;
//$users->email = $data->email;
 //$users->password = $data->password;
 
 $firstname=$data['firstName'];
$lastname=$data['lastName'];
$email=$data['email'];
$password=$data['password'];
$mobile=$data['mobile'];
$userType=$data['userType'];
// create the users
if($users->insert()){
    echo '{';
        echo '"message": "User has created Successfully."';
    echo '}';
}
 
// if unable to create the users, tell the user
else{
    echo '{';
        echo '"message": "Unable to create User."';
    echo '}';
}

?>