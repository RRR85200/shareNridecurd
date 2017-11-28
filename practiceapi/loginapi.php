<?php
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: access");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Credentials: true");
//header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
 // header('Content-Type: application/x-www-form-urlencoded');
header('Content-Type: application/json');
 
// include database and object files
include_once 'config/database.php';
include_once 'includes/functions.php';
 
// get database connection
$database = new Database();
$db = $database->getConnection();

 
// prepare product object
$users = new Users($db); 

$data = json_decode( file_get_contents('php://input'),true);
//echo "Test".file_get_contents('php://input');

//var_dump($data);
//print_r($_POST);
//exit;
//print_r($_POST);
//echo "hi . $data";
//exit;
//$firstname=$data['firstName'];
//$lastname=$data['lastName'];
//$users->email=$_POST['email'];
//$users->password=$_POST['password'];
$users->email=$data['email'];
$users->password=$data['password'];
//$mobile=$data['mobile'];
//print_r($users);
// set ID property of product to be edited
//$users->email = isset($_POST['email']) ? $_POST'email'] : die();
 //$users->password = isset($_POST['password']) ? $_POST['password'] : die();
// read the details of users to be edited
if($users->login()){
	
}
 
// create array
$users_arr = array(
    "email" =>  $users->email,
    "firstname" => $users->firstname,
    "lastname" => $users->lastname,
	"userType"=>$users->userType,
	"user_id"=>$users->user_id,
	"mobile"=>$users->mobile,
 
);
 
// make it json format

print_r(json_encode($users_arr));
?>