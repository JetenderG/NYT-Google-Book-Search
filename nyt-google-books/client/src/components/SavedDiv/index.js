import React from "react"




function SavedResults (props){




    return (
        <div className="container">
        <h4>Saved Results :</h4>
         <div className="container seaAndse">
        {props.children}</div>
    
        
        </div>
    
    
    
    )
}



export default SavedResults;