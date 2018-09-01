<?php
//Step1
 $db = mysqli_connect('sitedev.ipxon.net','tesis','tesis.2018','tesis')
 or die('Error connecting to MySQL server.');
?>

<html>
 <head>
 </head>
 <body>
 <h1>Hello from <b> GUILLE PLUGIN</b></h1>

<?php
//Step2
$query = "SELECT * FROM Guille";
mysqli_query($db, $query) or die('Error querying database.');

//Step3
$result = mysqli_query($db, $query);
$row = mysqli_fetch_array($result);

while ($row = mysqli_fetch_array($result)) {
 echo $row['date'] . ' ' . $row['usage_idle'] . '<br />';
}
//Step 4
mysqli_close($db);
?>

</body>
</html>
