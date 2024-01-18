import './Container.css'; 
 
function Container(props) {
	
	
  return (
			<div className="container" id={props.containerId}>{props.children}</div>
		
		 
  );
}

export default Container;
