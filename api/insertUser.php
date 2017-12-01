<?php
include "db.php";
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Methods: PUT, GET, POST");
header("Access-Control-Allow-Headers: Origin, X-Requested-With, Content-Type, Accept");
header('Content-Type: application/x-www-form-urlencoded');
header('Content-Type: application/json');
$data = json_decode( file_get_contents('php://input'),true );
//print_r($_post);
//exit;
$firstname=$data['firstName'];
$lastname=$data['lastName'];
$email=$data['email'];
$password=$data['password'];
$mobile=$data['mobile'];
$userType=$data['userType'];
//print_r($data);

$sql = "INSERT INTO user (userType,firstname,lastname,email,password,mobile)
VALUES ('".$userType."','".$firstname."','".$lastname."','".$email."','".$password."','".$mobile."')";
if($conn){
	if($qry = $conn->query($sql)){
			echo '{';
                   echo '"message": " Successfully Registered.",';
		           echo '"status": "success"';
           echo '}';
	}else{

	
	echo '{';
        echo '"message": "Registration failed.",';
		echo '"status": "failure"';
    echo '}';
		
	
      }
 }else{
	$conn->close();
	echo "no connection";
}

?>
