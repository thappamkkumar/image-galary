<?php
	require("database.php");
	$data=json_decode(file_get_contents("php://input"),true);
	$ssql="";
	if(isset($data["search_input"]))
	{
		$search_input=$data["search_input"];
		$sql="SELECT * FROM image_galary WHERE Categories LIKE '%$search_input%'  "  ;
	}
	else
	{
		$sql="SELECT * FROM image_galary  ";
	}
	$result=$con->query($sql)or die("Query Failed"); 
	 
		$output=$result->num_rows;
		echo json_encode($output);
	 
	
?>