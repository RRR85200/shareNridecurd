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
include_once 'includes/currentridesfunction.php';
 
$database = new Database();
$db = $database->getConnection();
 
$rides = new CurentRides($db);

// print_r($data);
$rides->RiderName= $data->ride_rider_name;
$rides->DriverName = $data->ride_driver_name;
$rides->DestinationID= $data->destination;
$rides->RiderId = $data->ride_user_id;
$rides->DriverId = $data->ride_driver_id;
$rides->RideDate = $data->ridetime;
$rides->Origin=$data->origin;
$rides->RideID=$data->ride_id;
$rides->carModel=$data->carModel;
$rides->carNumber=$data->carNumber;
$rides->Seats=$data->seats;
$rides->Price=$data->price;

 //print_r($rides);
 //exit;
// create the rides
if($rides->Historyrides_post()){
    echo '{';
        echo '"message": "Hisory Ride has created Successfully.",';
		echo '"status": "success"';
    echo '}';
}
 
// if unable to create the rides, tell the user
else{
    echo '{';
        echo '"message": "Unable to inser in history.",';
		echo '"status": "failure"';
    echo '}';
}


?>