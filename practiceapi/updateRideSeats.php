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
include_once 'includes/ridesfunction.php';
 
$database = new Database();
$db = $database->getConnection();
 
$rides = new Rides($db);

// print_r($data);
// $rides->RiderName= $data->ride_rider_name;
// $rides->DriverName = $data->ride_driver_name;
// $rides->DestinationID= $data->destination;
// $rides->RiderId = $data->rider_id;
// $rides->DriverId = $data->driver_id;
// $rides->RideDate = $data->ridetime;
// $rides->Origin=$data->origin;
print_r($db);
echo("HI Ranga");
$rides->RideID=$data->ride_id;
$rides->Seats =$data->seats;
 
// update  the rides
if($rides->rides_update()){
    echo '{';
        echo '"message": " Ride seats are updated Successfully.",';
		
    echo '}';
}
 
// if unable to create the rides, tell the user
else{
    echo '{';
        echo '"message": "Unable to update current ride seats.",';
		
    echo '}';
}


?>