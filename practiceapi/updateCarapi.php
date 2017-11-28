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



$car->UserId= $data->user_id;
$car->Company =$data->company;
$car->Seats= $data->seats;
$car->Year = $data->year;
$car->Registration = $data->vehicle_num;
$car->Model = $data->model;
 


// create the rides
if($car->update_car()){
    echo '{';
        echo '"message": "Updated car  Successfully.",';
		echo '"status": "success"';
    echo '}';
}
 
// if unable to post , tell the user
else{
    echo '{';
        echo '"message": "Unable to update car .",';
		echo '"status": "failure"';
    echo '}';
}


?>