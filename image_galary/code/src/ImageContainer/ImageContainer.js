import './ImageContainer.css';
import {useEffect} from 'react';
import axios from 'axios';

import PageChangeBTNS from './PageChangeBTNS/PageChangeBTNS';

const ImageContainer=(props)=>
{
	const setIMAGES=(img)=>
	{
		 props.setImagesNames(img);
		  
 	}
	
	useEffect(()=>{
		var url1="http://localhost/react_Image_Galary-api/countImages.php";
		if(props.searchInput.searchStatus===true)
		{
			try{
				var senddata1=JSON.stringify({search_input:props.searchInput.input});
				
				axios.post(url1, senddata1).then( (response)=>{ props.setTotalImages(response.data); } );
			}
			catch(e)
			{
				console.log(e);
			}
		}
		else
		{
			try{
				 
				
				axios.post(url1).then( (response)=>{ props.setTotalImages(response.data); } );
			}
			catch(e)
			{
				console.log(e);
			}
		}
	},[ props.searchInput]);
	
	useEffect(()=>{
		var url="http://localhost/react_Image_Galary-api/ImageReturn.php";
		if(props.searchInput.searchStatus===true)
		{
			try{
				var senddata2=JSON.stringify({search_input:props.searchInput.input, start:props.pageLimit.start, limit:props.pageLimit.limit});
				
				axios.post(url, senddata2).then( (response)=>{ setIMAGES(response.data); } );
			}
			catch(e)
			{
				console.log(e);
			}
		}
		else
		{
			try{
				var senddata3=JSON.stringify({ start:props.pageLimit.start, limit:props.pageLimit.limit});
		 
				axios.post(url, senddata3).then( (response)=>{ setIMAGES(response.data); } );
			}
			catch(e)
			{
				console.log(e);
			}
		}
		
	},[props.searchInput, props.pageLimit, props.totalImages]);
	
	const setImageView=(vals)=>
	{
		props.setSeleceteImage({imageName:vals, selectedStatus:true});
	}
	
	return(
	<>
			<div className="ImageContainer">
			{
				props.imagesNames.map((images,index)=>{   
					return(
						<img src={"IMAGES/"+images.Image} key={index} className="ImageContainer_img" onClick={()=>setImageView( images.Image )} alt="somthing went wrong"/>
			
					);
					
				} )
			}
	 
			</div>
			{props.imagesNames.length>0&&<PageChangeBTNS  totalImages={props.totalImages}  pageLimit={props.pageLimit} setPageLimit={props.setPageLimit}/>}
			
	</>
	
	);
	
}
export default ImageContainer;