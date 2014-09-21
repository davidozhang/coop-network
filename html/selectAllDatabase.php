<?php

$con = mysqli_connect('localhost','root','','coop');
if (!$con) {
  die('Could not connect: ' . mysqli_error($con));
}

mysqli_select_db($con,"coop");
$query="SELECT * FROM companies";
$result=mysqli_query($con, $query);
$rows=array();

while ($r=mysqli_fetch_assoc($result)) {
	$rows[]=$r;
	//echo $r;
}

echo json_encode($rows);

mysqli_close($con);
?>
