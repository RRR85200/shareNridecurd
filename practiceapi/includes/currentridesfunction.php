<?php
class CurentRides{
 
    // database connection and table name
    private $conn;
    private $table_name = "current_rides";
 
    // object properties   
   // public $UserType;
    public $RiderName;
    //public $Carnumber;
    public $DriverName;   
	public $DestinationID;
	public $RiderId;
	public $DriverId;
	public $RideDate;
	Public $Origin;
	public $RideID;
	public $RideendTime;
	public $Seats;
	public $price;
	public $current_ride_id;
	public $carnumber;
	public $carModel;
 
	
 
    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }
	
	function Currentrides_post(){
	
  
	
 $query = "INSERT INTO ". $this->table_name ." (ride_driver_name,ride_rider_name,ride_user_id,ride_driver_id,ride_id,origin,destination,ridetime,seats,price,carNumber,carModel) VALUES
  ('".$this->DriverName."','".$this->RiderName."','".$this->RiderId."','" .$this->DriverId."','".$this->RideID."','".$this->Origin."','".$this->DestinationID."','".$this->RideDate."','".$this->Seats."','".$this->Price."','".$this->carNumber."','".$this->carModel."')";
				  
				
				  
				  
 
    // prepare query
   	$stmt = $this->conn->prepare($query);
	//print_r($stmt);  
 
    // sanitize
	$this->DriverName=htmlspecialchars(strip_tags($this->DriverName));
    $this->RiderName=htmlspecialchars(strip_tags($this->RiderName));
    $this->DestinationID=htmlspecialchars(strip_tags($this->DestinationID));	
    $this->RiderId=htmlspecialchars(strip_tags($this->RiderId));
    $this->DriverId=htmlspecialchars(strip_tags($this->DriverId));
	$this->RideDate=htmlspecialchars(strip_tags($this->RideDate));
    $this->Origin=htmlspecialchars(strip_tags($this->Origin));	
	$this->RideID=htmlspecialchars(strip_tags($this->RideID)); 
   $this->Seats=htmlspecialchars(strip_tags($this->Seats)); 
   $this->Price=htmlspecialchars(strip_tags($this->Price)); 
   	$this->carNumber=htmlspecialchars(strip_tags($this->carNumber));
	$this->carModel=htmlspecialchars(strip_tags($this->carModel));
	
	
 
    
 
	//print_r($stmt);
 
    // execute query
    if($stmt->execute()){
	//	echo "Success";
        return true;
    }else{
		//echo "ERROR";
        return false;
    }
}

function currentrides_update(){
	 
    // query to insert record
    $query = "UPDATE
                " . $this->table_name . "
            SET
                  Status=:Status WHERE RideID=:RideID";
 
    // prepare query
    $stmt = $this->conn->prepare($query);
 
    // sanitize
      $this->RideID=htmlspecialchars(strip_tags($this->RideID));
  
	$this->Status=htmlspecialchars(strip_tags($this->Status));
		
 
    // bind values
   
    $stmt->bindParam(":RideID", $this->RideID);
    	$stmt->bindParam(":Status", $this->Status);
	 
    // execute query
    if($stmt->execute()){
        return true;
    }else{
        return false;
    }
}


function currentdriverrides_get(){
 
    // query to read single record
    $query = "SELECT *  FROM
                " . $this->table_name . " WHERE ( ride_driver_id='" .$this->DriverId."'and ridetime>=CURRENT_DATE)";
  
  $this->DriverId=htmlspecialchars(strip_tags($this->DriverId));
    // prepare query statement
    $stmt = $this->conn->prepare( $query );

 
    // execute query
    $stmt->execute();
 $rows = array();
 $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($rows);
return json_encode($rows);
  
}
function currentRiderrides_get(){
 
    // query to read single record
    $query = "SELECT *  FROM
                " . $this->table_name . " WHERE ( ride_user_id='" .$this->RiderId."'and ridetime>=CURRENT_DATE)";
  
  $this->RiderId=htmlspecialchars(strip_tags($this->RiderId));
    // prepare query statement
    $stmt = $this->conn->prepare( $query );

 
    // execute query
    $stmt->execute();
 $rows = array();
 $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
echo json_encode($rows);
return json_encode($rows);
  
}

function currentrides_delete(){
	$query="DELETE FROM ".$this->table_name." WHERE current_rideid=".$this->current_ride_id;
	 $stmt = $this->conn->prepare($query);
	 $this->$current_ride_id=htmlspecialchars(strip_tags($this->$current_ride_id));
	 
	  if($stmt->execute()){
        return true;
    }else{
        return false;
    }
	
}


function Historyrides_post(){	
	
	$date = date('Y-m-d H:i:s');
	//$now = new DateTime();
    //$now->format('Y-m-d H:i:s');
	$now = new DateTime(null, new DateTimeZone('America/Chicago'));
    //echo "America/New_York = ". $now->format('c') . "\r\n";
	$newTime =  $now->format('c');
 $query = "INSERT INTO ride_history (ride_driver_name,ride_rider_name,ride_user_id,ride_driver_id,ride_id,origin,destination,ridetime,rideendtime,seats,price,carNumber,carModel) VALUES
  ('".$this->DriverName."','".$this->RiderName."','".$this->RiderId."','" .$this->DriverId."','".$this->RideID."','".$this->Origin."','".$this->DestinationID."','".$this->RideDate."','".$newTime."','".$this->Seats."','".$this->Price."','".$this->carNumber."','".$this->carModel."')"; 				
				  
				  
 
    // prepare query
   	$stmt = $this->conn->prepare($query);
	//print_r($stmt);  
 
    // sanitize
	$this->DriverName=htmlspecialchars(strip_tags($this->DriverName));
    $this->RiderName=htmlspecialchars(strip_tags($this->RiderName));
    $this->DestinationID=htmlspecialchars(strip_tags($this->DestinationID));	
    $this->RiderId=htmlspecialchars(strip_tags($this->RiderId));
    $this->DriverId=htmlspecialchars(strip_tags($this->DriverId));
	$this->RideDate=htmlspecialchars(strip_tags($this->RideDate));
    $this->Origin=htmlspecialchars(strip_tags($this->Origin));	
	$this->RideID=htmlspecialchars(strip_tags($this->RideID)); 
    $this->carNumber=htmlspecialchars(strip_tags($this->carNumber));
	$this->carModel=htmlspecialchars(strip_tags($this->carModel));
	$this->Seats=htmlspecialchars(strip_tags($this->Seats)); 
	$this->Price=htmlspecialchars(strip_tags($this->Price)); 	
	//$this->RideendTime=htmlspecialchars(strip_tags($this->RideendTime));    
	
    if($stmt->execute()){
	//	echo "Success";
        return true;
    }else{
		//echo "ERROR";
        return false;
    }
}



function Historydriverrides_get(){
 
    // query to read single record
    $query = "SELECT *  FROM ride_history
                      WHERE ( ride_driver_id='" .$this->DriverId."')";
  
  $this->DriverId=htmlspecialchars(strip_tags($this->DriverId));
    // prepare query statement
    $stmt = $this->conn->prepare( $query );

 
    // execute query
   if($stmt->execute()){
    $rows = array();
    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
   echo json_encode($rows);
    return($rows);
	}else{
		return null;
	}
  
}


function HistoryRiderrides_get(){
 
    // query to read single record
    $query = "SELECT *  FROM ride_history
                      WHERE ( ride_user_id='" .$this->RiderId."')";
  
  $this->RiderId=htmlspecialchars(strip_tags($this->RiderId));
    // prepare query statement
    $stmt = $this->conn->prepare( $query );

 
    // execute query
  if($stmt->execute()){
    $rows = array();
    $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
   echo json_encode($rows);
    return($rows);
	}else{
		return null;
	}
  
}

}
?>