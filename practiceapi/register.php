<?php
error_reporting(0);

if($_POST['send']=='Login')
{	
	$first_name=$_POST['first_name'];
	$last_name=$_POST['last_name'];
	$email=$_POST['email'];
	$password=$_POST['password'];

$url = "http://localhost/WebAPI/registerapi.php"; 

//Initiate cURL.
$ch = curl_init($url);

//The JSON data.
$jsonData = array("first_name"=>$first_name,"last_name"=>$last_name,"email"=>$email,"password"=>$password);	
//print_r($jsonData);exit;
//Encode the array into JSON.
$jsonDataEncoded = json_encode($jsonData);

//Tell cURL that we want to send a POST request.
curl_setopt($ch, CURLOPT_POST, 1);

//Attach our encoded JSON string to the POST fields.
curl_setopt($ch, CURLOPT_POSTFIELDS, $jsonDataEncoded);

//Set the content type to application/json
curl_setopt($ch, CURLOPT_HTTPHEADER, array('Content-Type: application/json')); 

//Execute the request
$result = curl_exec($ch);
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="">
    <meta name="author" content="">
    <title>Student Information & Learning Management Software - SI&LMS </title>
	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script>
    <script language="javascript" type="text/javascript">
 // Function that validates email address through a regular expression.

$(document).ready(function() 
{
$("#btnlogin").click(function(){   

if($("#email").val()=="")
{
		$("#email").css({"border": "1px solid","color":"#F00"});
		return false;
}

if($("#password").val()=="")
{
		$("#password").css({"border": "1px solid","color":"#F00"});
		return false;
}
/*document.write($("#regForm").serialize());
	 $.ajax({
                url: 'registerapi.php', // url where to submit the request
                type : "POST", // type of action POST || GET
                dataType : 'json', // data type
                data : $("#regForm").serialize(), // post data || get data
				//document.write(data);
                success : function(result) {
                    // you can see the result from the console
                    // tab of the developer tools
                   // console.log(result);
					$("#Result").html(result);
                },
                error: function(xhr, resp, text) {
                    console.log(xhr, resp, text);
                }
            })
	*/
	});
	});
	</script>
</head><!--/head-->

<body class="homepage">

    
   
    <section id="main" style="height:450px;">
        <div class="container">
        <div class="row">
        	<div class="col-lg-12; text-center">
            	<h2>Student Registration</h2>
                <hr>
            </div>
        </div>
            <div class="row">
              
                <div class="col-md-4">
				<div id="Result"></div>
			           <form name="regForm" id="regForm" method="POST"  accept-charset="utf-8" class="form-signin" enctype='application/json'>
						<input type="hidden" name="send" value="Login" />  
                      <label class="">First Name</label>
                      <input type="text" class="form-control" name="first_name" id="first_name" placeholder="First Name" autofocus />
                       <label class="">Last Name</label>
                      <input type="text" class="form-control" name="last_name" id="last_name" placeholder="Last Name" />      
                      					
                      <label class="">User Name</label>
                      <input type="text" class="form-control" name="email" id="email" placeholder="Email ID" />
                       <label class="">Password</label>
                      <input type="password" class="form-control" name="password" id="password" placeholder="Password" />      
                       <br>
                      <button class="btn btn-lg btn-primary btn-block" type="submit" id="btnlogin">Login</button>  
                      <br>
                       
                    </form>
                 </div>
                 
            </div>
            
                <div class="col-md-2">&nbsp;</div>
        </div>
        </div><!--/.container-->    
    </section><!--/#conatcat-info--> 
</body>
</html>