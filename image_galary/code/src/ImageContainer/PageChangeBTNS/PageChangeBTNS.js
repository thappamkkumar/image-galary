import './PageChangeBTNS.css';  
 
function  PageChangeBTNS(props) { 
  
const setPrePage=()=>
{
	if(props.pageLimit.start>0)
	{
		var f_start = props.pageLimit.start-props.pageLimit.limit;
		props.setPageLimit({start:f_start, limit:props.pageLimit.limit});
		  
	}
} 
const setNextPage=()=>
{
		var f_start = props.pageLimit.start+props.pageLimit.limit;
		props.setPageLimit({start:f_start, limit:props.pageLimit.limit});
	
} 

  return (
			<div className="PageButtonContainer" >
				{ props.pageLimit.start>0&&<button type="button" onClick={setPrePage} className="recordTableDataEdit_BTN" id="prebtn">pre</button> }
				 <span className="pageNumber"> { (props.pageLimit.start+props.pageLimit.limit)/props.pageLimit.limit }/{Math.ceil(props.totalImages/props.pageLimit.limit)}</span>
				{  (props.pageLimit.start+props.pageLimit.limit)/props.pageLimit.limit<Math.ceil(props.totalImages/props.pageLimit.limit)  && <button type="button"  onClick={setNextPage}  className="recordTableDataEdit_BTN" id="nextbtn">next</button>}
			</div>
				
		 
  );
}

export default PageChangeBTNS;
