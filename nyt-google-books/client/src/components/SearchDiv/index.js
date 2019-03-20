import React from "react"


function SearchDiv (props){

return (
    <div className="container">
    <h4>Search Results :</h4>
     <div className="container seaAndse">
    {props.children}</div>

    
    </div>



)
   

}


export default SearchDiv;


