import './SearchBarContainer.css';  
import {useRef, useEffect} from 'react';

function SearchBarContainer(props) { 

const setFeildVal=useRef();

useEffect(()=>{setFeildVal.current.value=props.searchInput.input; },[props.searchInput.input]);


  const formSubmit=(event)=>
  {
	 event.preventDefault();
	props.setSearchInput({input:event.target.searchInputValue.value, searchStatus:true})
	 
	 
  }
 
  const uploadImage=()=>
  { 
	  props.setUploadImage(!props.uploadImage);
  }
  
  return (
			<div  className="SearchBarContainer">
				 <form onSubmit={formSubmit}>
					<input type="text" ref={setFeildVal}   className="searchInput"  placeholder="Enter category to  search" name="searchInputValue" />
					<button type="submit" className="searchBTN">Search</button>
				 </form>
				 <button type="button" onClick={uploadImage} className="addImages">Add Images</button>
			</div>
				
		 
  );
}

export default SearchBarContainer;
