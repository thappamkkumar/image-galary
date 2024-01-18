<?php
	
	require("database.php");
	
	$data=json_decode(file_get_contents("php://input"),true);
	$search_input=""; 
	$sql="";
	$start= 0;
	$end=10;
	 
	if(isset($data["start"]))
	{
		$start= $data["start"];
	}
	if(isset($data["limit"]))
	{
		$end= $data["limit"];
	} 

	if(isset($data["search_input"]))
	{
		$search_input=$data["search_input"];
		$sql="SELECT * FROM image_galary  WHERE Categories LIKE '%$search_input%' ORDER By S_No DESC LIMIT " .$start.",".$end ;
	}
	else
	{
		$sql="SELECT * FROM image_galary ORDER By S_No DESC LIMIT " .$start.",".$end ;
	}
	
	$result=$con->query($sql) or die($con->error);
	if($result->num_rows>0)
	{
		$output=$result->fetch_all(MYSQLI_ASSOC);
		
		echo json_encode($output);
	}
	else
	{
		echo"no data in database";
	}
?>