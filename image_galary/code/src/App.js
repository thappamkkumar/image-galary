import './App.css'; 
import Container from './Container/Container';
import Header from './Header/Header';
import SearchBarContainer from './SearchBarContainer/SearchBarContainer'; 
import TopSearchCategory from './TopSearched_Category_List/TopSearchCategory';
import ImageContainer from './ImageContainer/ImageContainer';
import ImageView from './ImageView/ImageView';
import UploadImage from './UploadImage/UploadImage';
import Footer from './Footer/Footer';

import {useState} from 'react';
function App() { 
  
	const [searchInput, setSearchInput]=useState({input:'', searchStatus:false}); 
	const [selectedImage, setSeleceteImage]=useState({imageName:'', selectedStatus:false});
	
	//state for storing images name 
	const [imagesNames, setImagesNames]=useState([]);
	const [totalImages, setTotalImages]=useState(0);
	const [pageLimit, setPageLimit]=useState({start:0, limit:20});
	
	//search data states
	const [searchImagesNames, setSearchImagesNames]=useState([]);
	const [searchTotalImages, setSearchTotalImages]=useState(0);
	const [searchPageLimit, setSearchPageLimit]=useState({start:0, limit:20});
	
	const[uploadImage, setUploadImage]=useState(false);
  return (
			<Container  >
				<Header />
				{uploadImage===true&&<UploadImage uploadImage={uploadImage} setUploadImage={setUploadImage} />}
				
				<SearchBarContainer uploadImage={uploadImage} setUploadImage={setUploadImage} searchInput={searchInput} setSearchInput={setSearchInput} />
				 
				 <TopSearchCategory  setSearchInput={setSearchInput} />
				
				 {searchInput.searchStatus===true&&<ImageContainer searchInput={searchInput} setPageLimit={setSearchPageLimit}  pageLimit={searchPageLimit}  setTotalImages={setSearchTotalImages} totalImages={searchTotalImages}
				 imagesNames={searchImagesNames} 	 setImagesNames={setSearchImagesNames} setSeleceteImage={setSeleceteImage} />}
				
				{searchInput.searchStatus===false&&<ImageContainer searchInput={searchInput} setPageLimit={setPageLimit}  pageLimit={pageLimit}  setTotalImages={setTotalImages} totalImages={totalImages} 
				imagesNames={imagesNames}  setImagesNames={setImagesNames} setSeleceteImage={setSeleceteImage} />}
				
				{selectedImage.selectedStatus===true&&<ImageView setSeleceteImage={setSeleceteImage} selectedImage={selectedImage}/>}
				
				<Footer />
			</Container>
				
		 
  );
}

export default App;
