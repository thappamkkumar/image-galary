<?php

	header('Content-Type:application/json; charset=utf-8;');
	header('Access-Control-Allow-Origin:*');
	header('Access-Control-Allow-Methods: POST, GET, PUT');
	header('Access-Control-Allow-Headers:Origin, X-Requested-With, Content-Type, Accept');
	
	require("database.php");
	
		try
		{
			$countsql="Select * From image_galary  " ; 
			$countresult = $con->query($countsql) or die("Query Failed"); 
			$count=($countresult->num_rows)+1;
			
			$categories=$_POST['category']; 
			$categorName=str_replace(' ', '_', $categories);
			$image=$_FILES['file']['name'][0];
			$ext=pathinfo($image, PATHINFO_EXTENSION);
			$image_name=$categorName.$count.".".$ext;
			
			$target_dir="E:/project/react/image_galary/public/IMAGES/";
			if(move_uploaded_file($_FILES['file']['tmp_name'][0], $target_dir.$image_name))
			{
			 $sql="INSERT INTO `image_galary` (`S_NO`, `Categories`, `Image`) VALUE ('', '$categories', '$image_name' )";
				if($con->query($sql))
				{
					echo json_encode(array('message'=>'Images successfully added','status'=>true));
				}
				else
				{
					$error=$con->error;
					echo Json_encode(array('message'=>$error, 'status'=>false));
				}	
			 
			}else{
					$error=$con->error;
				echo Json_encode(array('message'=>$error, 'status'=>false));
			}		
		}
		catch(Exception $e)
		{
			 
			echo Json_encode(array('message'=>$e, 'status'=>false));
		}
		 
?>