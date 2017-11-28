<?php
class Car{
 
    // database connection and table name
    private $conn;
    private $table_name = "car_details";
 
    // object properties   
   // public $UserType;
    public $UserId;    
    public $Company;
    public $Seats;   
	public $Year;
	public $Registration;
	public $Model;
 
    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }
	
	function car_post(){
   
	
 $query = "INSERT INTO ". $this->table_name ." (user_id,model,company,year,vehicle_num,seats) VALUES
  ('".$this->UserId."','". $this->Model."','".$this->Company."','".$this->Year."','". $this->Registration."','".$this->Seats."')";
				  
	
 
    // prepare query
    $stmt = $this->conn->prepare($query);
 
    // sanitize
    $this->UserId=htmlspecialchars(strip_tags($this->UserId));
    $this->Company=htmlspecialchars(strip_tags($this->Company));
	 $this->Seats=htmlspecialchars(strip_tags($this->Seats));
	  $this->Year=htmlspecialchars(strip_tags($this->Year));
	   $this->Registration=htmlspecialchars(strip_tags($this->Registration));
	    $this->Model=htmlspecialchars(strip_tags($this->Model));
  
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

function getuserCar(){
		 $query = "SELECT *  FROM
                " .$this->table_name. " where user_id= ".$this->UserId; 
 
    // prepare query statement
		$stmt = $this->conn->prepare( $query );
		$this->UserId=htmlspecialchars(strip_tags($this->UserId));
	   
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

function update_car(){
	 // $query = "UPDATE " . $this->table_name ." SET (model,company,year,vehicle_num,seats) VALUES
  // ('". $this->Model."','".$this->Company."','".$this->Year."','" .$this->Registration."','".$this->Seats. "') where user_id= ".$this->UserId;
				  
	$query = "UPDATE " . $this->table_name. " SET model='". $this->Model."',company='".$this->Company."',year='".$this->Year."',vehicle_num='".$this->Registration."',seats='".$this->Seats."'  WHERE user_id=" .$this->UserId;
 
    // prepare query
    $stmt = $this->conn->prepare($query);
 
    // sanitize
    $this->UserId=htmlspecialchars(strip_tags($this->UserId));
    $this->Company=htmlspecialchars(strip_tags($this->Company));
	 $this->Seats=htmlspecialchars(strip_tags($this->Seats));
	  $this->Year=htmlspecialchars(strip_tags($this->Year));
	   $this->Registration=htmlspecialchars(strip_tags($this->Registration));
	    $this->Model=htmlspecialchars(strip_tags($this->Model));
  
	
 
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