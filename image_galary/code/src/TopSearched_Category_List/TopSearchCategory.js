import './TopSearchCategory.css';

import {useEffect, useState} from 'react';
import axios from 'axios';

const TopCategory=(props)=>
{
	const [topSearch, setTopSearch]=useState([]); 
	 
	useEffect(()=>{
		 
			try{
				 var url="http://localhost/react_Image_Galary-api/top_search.php";
				axios.get(url).then( (response)=>{ setTopSearch(response.data); } );
			}
			catch(e)
			{
				console.log(e);
			}
		 
		
	},[ ]);
	
	const setSearch=(val)=>
	{
		props.setSearchInput({input:val, searchStatus:true});
	}
	return(
		
		<>
			<h3 className="topsearchHeading" >Top Searched Categories..</h3>
			<div className="topSearch_Category_Container">
			{
				topSearch.map((top,index)=>{   
					return(	
				
							<button type="button" className="topSearch" onClick={()=>setSearch(top.TopSearch)}  key={index}>{top.TopSearch}</button>
				 );
					
				} )
			}
			
			</div>
		</>
			
	);
}
export default TopCategory;