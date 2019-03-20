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

<button onClick={props.viewfunction}>View</button>
<button onClick={props.Savefunction}>Delete</button>


</div>


</div>


<div className="row">


<div className="col">

<img alt = {props.alt} src={props.bookImg}/>


<div className="col">

<p>{props.summary}</p>

</div>
</div>

</div>



</div>


)
}


export default ResultDivs;