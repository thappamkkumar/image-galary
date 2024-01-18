import './ImageView.css';

const ImageView=(props)=>
{
	var img_link="IMAGES/"+props.selectedImage.imageName;
	
	const cancelSelectedImage=()=>
	{
		props.setSeleceteImage({imageName:'', selectedStatus:false});
	}
	
	
	return(
		<div className="ImageViewContainer">
		<button type="button" className="imageViewCancel" onClick={cancelSelectedImage}>X</button>
			<img src={img_link} className="viewImage" />
			 
		</div>
	);
}
export default ImageView;