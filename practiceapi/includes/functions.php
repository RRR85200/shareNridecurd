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
                " . $this->table_name . "
            SET
                userType=:userType,firstname=:firstname, lastname=:lastname,email=:email,password=:password,mobile=:mobile";
 
    // prepare query
    $stmt = $this->conn->prepare($query);
 
    // sanitize
   // $this->UserType=htmlspecialchars(strip_tags($this->UserType));
   // $this->first_name=htmlspecialchars(strip_tags($this->first_name));
  //  $this->last_name=htmlspecialchars(strip_tags($this->last_name));
   // $this->age=htmlspecialchars(strip_tags($this->age));
    //$this->gender=htmlspecialchars(strip_tags($this->gender));
	//$this->dob=htmlspecialchars(strip_tags($this->dob));
	////$this->rating=htmlspecialchars(strip_tags($this->rating));
	//$this->phone_no=htmlspecialchars(strip_tags($this->phone_no));
	//$this->email=htmlspecialchars(strip_tags($this->email));
	//$this->password=htmlspecialchars(strip_tags($this->password));
	
 
    // bind values
   $stmt->bindParam(":userType", $this->userType);
    $stmt->bindParam(":firstname", $this->firstname);
    $stmt->bindParam(":lastname", $this->lastname);
   // $stmt->bindParam(":age", $this->age);
   // $stmt->bindParam(":gender", $this->gender);	
	//$stmt->bindParam(":dob", $this->dob);
	//$stmt->bindParam(":rating", $this->rating);
	//$stmt->bindParam(":phone_no", $this->phone_no);
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
    $stmt->execute();
 
    // get retrieved row
    $row = $stmt->fetch(PDO::FETCH_ASSOC);

    // set values to object properties
    $this->firstname = $row['firstname'];
    $this->lastname = $row['lastname'];
    $this->email = $row['email'];
	$this->user_id = $row['user_id'];
	$this->userType=$row['userType'];
	$this->mobile=$row['mobile'];
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