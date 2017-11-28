<?php


// required headers
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");



// get posted data
$data = json_decode(file_get_contents("php://input"));
// print_r($data);exit;
// get database connection
include_once 'config/database.php';
 
// instantiate rides object
include_once 'includes/couponsfunction.php';
 
$database = new Database();
$db = $database->getConnection();
 
$coupon = new Coupons($db);
 
// create the rides
if($coupon->getAllCoupons()){
    // echo '{';
	// //json_encode($rides));
        // echo '"message": "Returned Rides Successfully."';
    // echo '}';
}
 
// if unable to create the rides, tell the user
else{
    echo '{';
        echo '"message": "Unable to fetch Coupons Now."';
    echo '}';
}


?>