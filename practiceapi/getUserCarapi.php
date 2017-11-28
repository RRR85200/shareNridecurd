<?php
// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

// get posted data
$data = json_decode(file_get_contents("php://input"));
 //print_r($data);exit;
// get database connection
include_once 'config/database.php';
 
// instantiate rides object
include_once 'includes/carsFunction.php';
 
$database = new Database();
$db = $database->getConnection();
 
$car = new Car($db);

// print_r($data);

$car->UserId= $data->user_id;


// print_r($data);
	



if($car-> getuserCar()){
   
}
 

else{
    // echo '{';
        // echo '"message": "Unable to get your coupon.",';
		// echo '"status": "failure"';
    // echo '}';
}


?>