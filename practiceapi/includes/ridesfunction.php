<?php
class Rides{
 
    // database connection and table name
    private $conn;
    private $table_name = "rides_avail";
 
    // object properties   
   // public $UserType;
    public $RideID;
    //public $Carnumber;
    public $UserId;
    public $Seats;   
	public $DestinationID;
	public $Origin;
	public $Status;
	public $RideDate;
	Public $UserType;
	public $userMobile;
	public $postedBy;
	public $price;
	public $carnumber;
	public $carModel;
 
    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }
	
function rides_post(){	
	
    
 $query = "INSERT INTO ". $this->table_name ." (user_id,seats,destination,origin,date,mobile,userType,postedBy,price,carNumber,carModel) VALUES
  ('".$this->UserId."','".$this->Seats."','".$this->DestinationID."','".$this->Origin."','".$this->RideDate."','".$this->UserMobile."', '".$this->UserType."','".$this->postedBy."','".$this->price."','".$this->carNumber."','".$this->carModel."')";				  
				  
				  
				  
 
    // prepare query
    $stmt = $this->conn->prepare($query);
 
    // sanitize
   $this->UserType=htmlspecialchars(strip_tags($this->UserType));
    //$this->RideID=htmlspecialchars(strip_tags($this->RideID));
    //$this->Carnumber=htmlspecialchars(strip_tags($this->Carnumber));
    $this->UserId=htmlspecialchars(strip_tags($this->UserId));
    $this->Seats=htmlspecialchars(strip_tags($this->Seats));
	//$this->AC=htmlspecialchars(strip_tags($this->AC));
	$this->DestinationID=htmlspecialchars(strip_tags($this->DestinationID));
	$this->Origin=htmlspecialchars(strip_tags($this->Origin));
	//$this->Status=htmlspecialchars(strip_tags($this->Status));
	$this->RideDate=htmlspecialchars(strip_tags($this->RideDate));
	$this->userMobile=htmlspecialchars(strip_tags($this->userMobile));
	$this->postedBy=htmlspecialchars(strip_tags($this->postedBy));
	$this->price=htmlspecialchars(strip_tags($this->price));
	$this->carNumber=htmlspecialchars(strip_tags($this->carNumber));
	$this->carModel=htmlspecialchars(strip_tags($this->carModel));
	
 
//	print_r($stmt);
 
    // execute query
    if($stmt->execute()){
	//	echo "Success";
        return true;
    }else{
		//echo "ERROR";
        return false;
    }
}

function rides_update(){
	 
    // query to insert record
    $query = "UPDATE
                " . $this->table_name . "
           SET seats= seats -".$this->Seats." where ride_id=".$this->RideID;
    // prepare query
    $stmt = $this->conn->prepare($query);
	
 
    // sanitize
      $this->RideID=htmlspecialchars(strip_tags($this->RideID));
	  $this->Seats=htmlspecialchars(strip_tags($this->Seats));
  
    // execute query
    if($stmt->execute()){
        return true;
    }else{
        return false;
    }
}


function rides_delete(){
	$query="DELETE FROM ".$this->table_name." WHERE ride_id=".$this->RideID;
	 $stmt = $this->conn->prepare($query);
	 $this->RideID=htmlspecialchars(strip_tags($this->RideID));
	 
	  if($stmt->execute()){
        return true;
    }else{
        return false;
    }
	
}


function ridesavail_get(){
 
    // query to read single record
    $query = "SELECT *  FROM
                " . $this->table_name . " WHERE ( date>CURRENT_DATE and seats>0 and UserType='Driver')";
 
    // prepare query statement
    $stmt = $this->conn->prepare( $query );
 
    // bind id of product to be updated
    //$stmt->bindParam(1, $this->email);
	//$stmt->bindParam(2, $this->password);
 
    // execute query
    if($stmt->execute()){
    $rows = array();
    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
   echo json_encode($rows);
    return($rows);
	}else{
		return null;
	}
    // get retrieved row
   /*  $row = $stmt->fetch(PDO::FETCH_ASSOC);
 
    // set values to object properties
    $this->RideID = $row['RideID'];
    $this->Carnumber = $row['Carnumber'];
    $this->DriverId = $row['DriverId'];
	$this->NumberofSeats = $row['NumberofSeats'];
    $this->AC = $row['AC'];
    $this->DestinationID = $row['DestinationID'];
	$this->SourceID = $row['SourceID'];
    $this->Status = $row['Status'];
    $this->StartDateTime = $row['StartDateTime']; */
}



function costumnridesavail_get(){
	 $query = "SELECT *  FROM
                " . $this->table_name . " WHERE ( date>CURRENT_DATE and seats>0 and UserType='Rider')";
 
    // prepare query statement
    $stmt = $this->conn->prepare( $query );
	  // $stmt->execute();
		// $rows = array();
			// $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
	// echo json_encode($rows);
	// return($rows);
	if($stmt->execute()){
    $rows = array();
    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
   echo json_encode($rows);
    return($rows);
	}else{
		return null;
	}
 
}

function getDriverPostRidesAvailablity(){
	

//SELECT * FROM `rides_avail` WHERE user_id="130" and userType="Driver" and date between DATE_ADD("2017-12-16 23:44:00 ", INTERVAL -2 HOUR) and DATE_ADD("2017-12-16 23:44:00 ", INTERVAL 2 HOUR)

	
	$query="select * from " . $this->table_name . " WHERE user_id='" .$this->UserId. "'and
	userType='Driver' and date between DATE_ADD('".$this->RideDate."', INTERVAL -2 HOUR) and DATE_ADD('".$this->RideDate."', INTERVAL 2 HOUR)";
	
	 // $this->UserType=htmlspecialchars(strip_tags($this->UserType));      
    $this->UserId=htmlspecialchars(strip_tags($this->UserId));
	//$this->Origin=htmlspecialchars(strip_tags($this->Origin));	
	$this->RideDate=htmlspecialchars(strip_tags($this->RideDate));	
	
	
	  $stmt = $this->conn->prepare( $query );

 
    // execute query
    $stmt->execute();
 $rows = array();
 $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($rows);
return json_encode($rows);
	
}

function costumnRide_post(){
	$query = "INSERT INTO ". $this->table_name ." (user_id,seats,destination,origin,date,mobile,userType,postedBy,price) VALUES
  ('".$this->UserId."','".$this->Seats."','".$this->DestinationID."','".$this->Origin."','".$this->RideDate."','".$this->UserMobile."', '".$this->UserType."','".$this->postedBy."','0.00')";  			  
				  
				  
 
    // prepare query
    $stmt = $this->conn->prepare($query);
 
    // sanitize
   $this->UserType=htmlspecialchars(strip_tags($this->UserType));
    //$this->RideID=htmlspecialchars(strip_tags($this->RideID));
    //$this->Carnumber=htmlspecialchars(strip_tags($this->Carnumber));
    $this->UserId=htmlspecialchars(strip_tags($this->UserId));
    $this->Seats=htmlspecialchars(strip_tags($this->Seats));
	//$this->AC=htmlspecialchars(strip_tags($this->AC));
	$this->DestinationID=htmlspecialchars(strip_tags($this->DestinationID));
	$this->Origin=htmlspecialchars(strip_tags($this->Origin));
	//$this->Status=htmlspecialchars(strip_tags($this->Status));
	$this->RideDate=htmlspecialchars(strip_tags($this->RideDate));
	$this->userMobile=htmlspecialchars(strip_tags($this->userMobile));
	$this->postedBy=htmlspecialchars(strip_tags($this->postedBy)); 
    
 
//	print_r($stmt);
 
    // execute query
    if($stmt->execute()){
	//	echo "Success";
        return true;
    }else{
		//echo "ERROR";
        return false;
    }
	
}

}



?>