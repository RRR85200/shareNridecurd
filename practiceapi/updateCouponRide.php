<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Max-Age: 3600");
header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
$data = json_decode(file_get_contents("php://input"));
 //print_r($data);exit;
// get database connection
include_once 'config/database.php';
 
// instantiate rides object
include_once 'includes/couponsfunction.php';
 
$database = new Database();
$db = $database->getConnection();
 
$coupon = new Coupons($db);

// print_r($data);
	
$coupon->UserId= $data->user_id;
$coupon->coupon_code= $data->coupon_code;
$coupon->coupon_type= $data->coupon_type;
$coupon->coupon_validity = $data->coupon_validity ;
$coupon->coupon_price= $data->coupon_price;
$coupon->coupon_rides = $data->coupon_rides;
// update  the rides
if($coupon->coupon_update()){
    echo '{';
        echo '"message": " coupon rides  are updated Successfully.",';
		
    echo '}';
}
 
// if unable to create the rides, tell the user
else{
    echo '{';
        echo '"message": "Unable to update coupon ride seats.",';
		
    echo '}';
}


?>