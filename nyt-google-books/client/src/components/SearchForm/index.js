import React from "react"




function SearchForm (props) {

return (



<form >
  <div className="form-group">
    Title :
    <input type="text" name="title" className="form-control" id="titleId" aria-describedby="emailHelp" placeholder="Enter title"  value={props.search} onChange={props.handleChange}/>
  </div>
  <button type="submit"  onClick={(e) => {props.handleFormSubmit(e)}} className="btn btn-success"/>
</form>
)
}



export default SearchForm;