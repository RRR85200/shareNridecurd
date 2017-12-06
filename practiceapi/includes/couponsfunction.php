<?php
class Coupons{
 
    // database connection and table name
    private $conn;
    private $table_name1 = "avail_coupons";
	private $table_user_coupons="user_coupons";
 
    // object properties   
   
   
     public $UserId;   
	 public $coupon_code;
	 public $coupon_type;
	 public $coupon_validity;
	 public $coupon_rides;
	 public $coupon_price;
	 public $coupon_seq;


	
	

 
    // constructor with $db as database connection
    public function __construct($db){
        $this->conn = $db;
    }
	
	function getuserCoupon(){
		 $query = "SELECT *  FROM
                " . $this->table_user_coupons." where coupon_rides>0 and user_id=".$this->UserId; 
 
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
	  			  
				  
	
	function buyCoupon(){
		$query = "INSERT INTO " .$this->table_user_coupons."(user_id,coupon_code,coupon_type,coupon_validity,coupon_rides,coupon_price) VALUES ('".$this->UserId."','".$this->coupon_code."','".$this->coupon_type."','" .$this->coupon_validity."','".$this->coupon_rides."','".$this->coupon_price."')"; 		
	
				  
  				  
    // prepare query
   	$stmt = $this->conn->prepare($query);
	//print_r($stmt);  
 
    // sanitize
	$this->UserId=htmlspecialchars(strip_tags($this->UserId));
    $this->coupon_code=htmlspecialchars(strip_tags($this->coupon_code));
    $this->coupon_type=htmlspecialchars(strip_tags($this->coupon_type));	
    $this->coupon_validity=htmlspecialchars(strip_tags($this->coupon_validity));
    $this->coupon_rides=htmlspecialchars(strip_tags($this->coupon_rides));
	$this->coupon_price=htmlspecialchars(strip_tags($this->coupon_price));
    $this->coupon_seq=htmlspecialchars(strip_tags($this->coupon_seq));   
	//$this->RideendTime=htmlspecialchars(strip_tags($this->RideendTime));    
	
    if($stmt->execute()){
	//	echo "Success";
        return true;
    }else{
		//echo "ERROR";
        return false;
    }

		
		
	}
	
	 function getAllCoupons(){
		   // query to read single record
    $query = "SELECT *  FROM
                " . $this->table_name1; 
 
    // prepare query statement
    $stmt = $this->conn->prepare( $query );
   
    // execute query
    if($stmt->execute()){
  $rows = array();
  $rows = $stmt->fetchAll(PDO::FETCH_ASSOC);
  echo json_encode($rows);
  return($rows);
		 
	 }
  }
   function coupon_update(){
	  print_r("Hi");
	
	 
    // query to insert record
    $query = "UPDATE
                " . $this->table_user_coupons . "
           SET coupon_rides= coupon_rides - 1 where user_id=".$this->UserId;
    // prepare query
    $stmt = $this->conn->prepare($query);	
 
    // sanitize
     
	 $this->UserId=htmlspecialchars(strip_tags($this->UserId));
  
    if($stmt->execute()){
        return true;
    }else{
        return false;
    }
}
}
	?>