<?php
class Users{
 
    // database connection and table name
    private $conn;
    private $table_name = "user";
 
    // object properties   
   // 
    public $firstname;
    public $lastname;
  //  public $age;
   // public $gender;
   // public $dob;
	//public $rating;
	//public $phone_no;
	public $user_id;
	public $email;
	public $password;
	public $userType;
 
    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }
	
	function insert(){
 
    // query to insert record
    $query = "INSERT INTO
                " . $this->table_name . "b 
            SET
                userType=:userType,firstname=:firstname, lastname=:lastname,email=:email,password=:password,mobile=:mobile";
 
    // prepare query
    $stmt = $this->conn->prepare($query);
 
   // bind values
   $stmt->bindParam(":userType", $this->userType);
    $stmt->bindParam(":firstname", $this->firstname);
    $stmt->bindParam(":lastname", $this->lastname);
  
	$stmt->bindParam(":email", $this->email);
	$stmt->bindParam(":password", $this->password);
	$stmt->bindParam(":mobile",$this->mobile);
 
    // execute query
    if($stmt->execute()){
        return true;
		//echo"hi ";
    }else{
        return false;
    }
}


function login(){
 
    // query to read single record
    $query = "SELECT *  FROM
                " . $this->table_name . "  WHERE email = ? and password= ? LIMIT 0,1";
 
    // prepare query statement
    $stmt = $this->conn->prepare( $query );
 
    // bind id of product to be updated
    $stmt->bindParam(1, $this->email);
	$stmt->bindParam(2, $this->password);
 
    // execute querys
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

// function getavilableRides(){
	 // $date = date('Y/m/d H:i:s');
	 // $ride_table="rides_avail";
	 // $query="select * from " .$this->ride_table. " where date >=".$date ;
	 // $stmt=&this->conn->prepare($query);
	 // $stmt->execute();
	 // while ($row = $stmt->fetch(PDO::FETCH_ASSOC){
 
           // $solution=$row['solution'];
    // };
      // }

}


?>