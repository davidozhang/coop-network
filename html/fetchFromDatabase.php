<?php
$q = ($_GET['q']);
$queryFields = ($_GET['queryFields']);

$con = mysqli_connect('localhost','root','','coop');
if (!$con) {
  die('Could not connect: ' . mysqli_error($con));
}


mysqli_select_db($con,"coop");
$query="SELECT " .$queryFields. " FROM companies WHERE employer= '".$q."'";
//$reviewQuery="SELECT * FROM reviews WHERE employer = '".$q."'";
//$locationQuery="SELECT * FROM locations WHERE employer = '".$q."'";
$result=mysqli_query($con, $query);
//$reviewResult = mysqli_query($con,$reviewQuery);
//$locationResult = mysqli_query($con,$locationQuery);
$rows=array();

while ($r=mysqli_fetch_assoc($result)) {
	$rows[]=$r;
}

echo json_encode($rows);

/*
echo "<table border='1'>
<tr>
<th>Employer</th>
<th>Job Title</th>
<th>Rating</th>
<th>Salary</th>
<th>Review</th>
</tr>";

while($row = mysqli_fetch_array($reviewResult)) {
  echo "<tr>";
  echo "<td>" . $row['employer'] . "</td>";
  echo "<td>" . $row['job_title'] . "</td>";
  echo "<td>" . $row['rating'] . "</td>";
  echo "<td>" . $row['salary'] . "</td>";
  echo "<td>" . $row['review'] . "</td>";
  echo "</tr>";
}
echo "</table>";

echo "<table border='1'>
<tr>
<th>Longitude</th>
<th>Latitude</th>
</tr>";

while ($row = mysqli_fetch_array($locationResult)) {
	echo "<tr>";
	echo "<td>" . $row['longitude'] . "</td>";
	echo "<td>" . $row['latitude'] . "</td>";
  	echo "</tr>";
}
echo "</table>";
*/

mysqli_close($con);
?>
