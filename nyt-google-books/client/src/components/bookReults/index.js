import react from "react"






function ResultDivs (props){




<div className="container">

<div className="row">

<div className="col">

<h5>{props.title}</h5>

<h6>{props.subtitle}</h6>

<p>{props.authors}</p>

</div>

<div className="col">

<input onClick={props.viewfunction}>View</input>
<input onClick={props.viewfunction}>Add</input>


</div>


</div>


<div className="row">


<div className="col">

<img src={props.bookImg}/>


<div className="col">

<p>{props.summary}</p>

</div>
</div>

</div>



</div>



}


export default ResultDivs;