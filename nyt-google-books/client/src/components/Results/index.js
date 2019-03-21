import React from "react"






function ResultDivs (props){


return(

<div className="container">

<div className="row">

<div className="col">

<h5>{props.title}</h5>

<h6>{props.subtitle}</h6>

<p>{props.authors}</p>

</div>

<div className="col">

<button type="submit"  onClick= {props.links(props.link)} className="btn btn-success"/>
</div>


</div>


<div className="row">


<div className="col">

<img alt = "book Image" src={props.bookImg}/>


<div className="col">

<p>{props.summary}</p>

</div>
</div>

</div>



</div>


)
}


export default ResultDivs;