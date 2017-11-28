<?php
error_reporting(0);
if($_POST['send']=='Login')
{
$username=$_POST['username'];
$password=$_POST['password'];

/*
$baseurl = "http://localhost/WebAPI/loginapi.php"; 
$url=$baseurl.'?email='.$username.'&password='.$password;
$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
curl_setopt($ch, CURLOPT_TIMEOUT, 30);
$scraped = curl_exec($ch);
curl_close($ch);

*/



$str= "?email=".$username."&password=".$password;

//print $str;
// api="http://localhost/WebAPI/loginapi.php?emai=mahender.koyada@gmail.com&password=123456"
 $ch=curl_init();
 curl_setopt($ch, CURLOPT_URL,'http://localhost/WebAPI/loginapi.php'.$str);
 curl_exec($ch);
 curl_close($ch);
 
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
    <script language="javascript" type="text/javascript">
 // Function that validates email address through a regular expression.

$(document).ready(function() 
{
$("#btnlogin").click(function(){   

if($("#username").val()=="")
{
		$("#username").css({"border": "1px solid","color":"#F00"});
		return false;
}

if($("#password").val()=="")
{
		$("#password").css({"border": "1px solid","color":"#F00"});
		return false;
}
	
	
	});
	});
	</script>
</head><!--/head-->

<body class="homepage">

    
   
    <section id="main" style="height:450px;">
        <div class="container">
        <div class="row">
        	<div class="col-lg-12; text-center">
            	<h2>Student login</h2>
                <hr>
            </div>
        </div>
            <div class="row">
              
                <div class="col-md-4">
			           <form name="formLogin" method="POST" action="<?php echo htmlspecialchars($_SERVER['PHP_SELF']);?>" class="form-signin">
						<input type="hidden" name="send" value="Login" />      
                      <label class="">User Name</label>
                      <input type="text" class="form-control" name="username" id="username" placeholder="User Name" autofocus />
                       <label class="">Password</label>
                      <input type="password" class="form-control" name="password" id="password" placeholder="Password" />      
                       <br>
                      <button class="btn btn-lg btn-primary btn-block" type="submit" id="btnlogin">Login</button>  
                      
                    </form>
                 </div>                 
            </div>            
         <div class="col-md-2">&nbsp;</div>
        </div>
        </div><!--/.container-->    
    </section><!--/#conatcat-info-->
</body>
</html>