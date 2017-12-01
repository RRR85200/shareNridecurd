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

$users->email=$data['email'];
$users->password=$data['password'];

if($users->login()){
	
 

	
}
else{

}


 
// create array

 
// make it json format


?>