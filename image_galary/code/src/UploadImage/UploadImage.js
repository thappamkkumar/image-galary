import './UploadImage.css';  

import axios from 'axios';
function UploadImage(props) { 
 
  const formSubmit=(event)=>
  {
	event.preventDefault();
	const formdata2=new FormData();
	formdata2.append('file[]', event.target.uploadInputimage.files[0]);
	formdata2.append('category', event.target.category.value);
	//console.log(event.target.uploadInputimage.files[0]);
	const url2='http://localhost/react_Image_Galary-api/addImage.php ';
		axios.post(url2,formdata2 ).then( (response)=>{
							if(response.data.status===true){
										alert("Successfully Add Images");
										 props.setUploadImage(!props.uploadImage);
										}
										else
										{
											alert(response.data.message);
										 props.setUploadImage(!props.uploadImage);
										} 
					 }) ;
															
	
  }
 
  
  const uploadImage=()=>
  { 
	  props.setUploadImage(!props.uploadImage);
	  
  }
  
  
  return (
		<div className="uploadImageContainer">
			<div  className="uploadImage">
				<h1>Add Images <button type="button" onClick={uploadImage} className="removeImages">X</button></h1>
				
				<p className="uploadText">Select Multiple Images. </p>
				 <form onSubmit={formSubmit}>
					<input type="text"     className="uploadInput" placeholder="Enter category of image"  name="category"  />
					<input type="file"     className="uploadInput"   name="uploadInputimage"  />
					<button type="submit" className="uploadbtn">Add Images</button>
				 </form>
			</div>
		</div>
				
		 
  );
}

export default UploadImage;
