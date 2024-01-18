<?php
	require("database.php");
	$sql="SELECT * FROM top_search";
	$result=$con->query($sql);
	if($result->num_rows>0)
	{
		$output=$result->fetch_all(MYSQLI_ASSOC);
		echo json_encode($output);
	}
	else
	{
		echo $con->error;
	}
?>