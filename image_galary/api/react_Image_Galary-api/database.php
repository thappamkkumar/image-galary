<?php
	header("Access-Control-Allow-Origin:*");
	header("Content-Type:application/json");
	
	$host="localhost";
	$username="root";
	$password="";
	$dbname="react_image_galary";
	
	$con= new mysqli($host, $username, $password);
	$sql="CREATE DATABASE IF NOT EXISTS react_image_galary";
	if($con->query($sql)===TRUE)
	{ }
	else
	{
		echo $con->error;
	}
	$con->select_db("react_image_galary");
		echo"\n";
	$sql="CREATE TABLE IF NOT EXISTS `react_image_galary`.`image_galary`(`S_No` INT(255) NOT NULL AUTO_INCREMENT , `Categories` VARCHAR(500) NOT NULL , `Image`LONGTEXT  NOT NULL , PRIMARY KEY (`S_No`)) ";
	if($con->query($sql)===TRUE)
	{ }
	else
	{
		echo $con->error;
	}
	echo"\n";
	$sql="CREATE TABLE IF NOT EXISTS `react_image_galary`.`top_search`(`S_No` INT(255) NOT NULL AUTO_INCREMENT , `TopSearch` VARCHAR(500) NOT NULL ,  PRIMARY KEY (`S_No`)) ";
	if($con->query($sql)===TRUE)
	{ }
	else
	{
		echo $con->error;
	}
?>