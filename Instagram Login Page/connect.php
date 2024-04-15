<?php
$username=filter_input(INPUT-POST,'username');
$password=filter_input(INPUT-POST,'password');
if(!empty($username)){
if(!empty($password)){
$host="localhost";
$dbusername="root";
$dbpassword="";
$dbname="data";
$conn=new mysqli($host,$dbusername,$dbpassword,$dbname);
if(mysqli_connect_error()){
    die('Connect Error('.mysqli_connect_errno().'))'
    .mysqli_connect_error());
}
else{
    $sql="INSERT INTO tb-data(username,password)
    values('$username',$password')";
    if($conn->query($sql)){
        echo"Login successfully";
    }
    else{
        echo "Error:".$sql."<br>".$conn->error;
    }
    $conn->close();
}
}
else{
    echo "Password should not be empty";
}
}
else{
    echo "Username should not be empty";
    die();
}