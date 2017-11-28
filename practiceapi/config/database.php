<?php
class Database{
 
    // specify your own database credentials
    private $host = "localhost";
    private $db_name = "sharerideapp";
    private $username = "root";
    private $password = "";
    public $conn;
 
    // get the database connection
    public function getConnection(){
 
        $this->conn = null;
    // use of "" in the connection statement
	//$this.host
        try{
            $this->conn = new PDO("mysql:host=" . $this->host . ";dbname=" . $this->db_name, $this->username, $this->password);
			//echo "conection success";
            //$this->conn->exec("set names utf8");
        }catch(PDOException $exception){
            echo "Connection error: " . $exception->getMessage();
        }
 
        return $this->conn;
		
    }
}
?>