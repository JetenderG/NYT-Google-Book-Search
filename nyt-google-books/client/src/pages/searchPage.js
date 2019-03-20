import React from "react"

import Wrapper from "../components/Wrapper"
//import  SaveDiv from "../components/SavedDiv";
import SearchForm from "../components/SearchForm"
import SearchDiv from "../components/SearchDiv"
import ResultDivs from "../components/Results";
import API from "../utils/API";




class SearchPage extends React.Component{

    state={
        search : "",
        results : ""
    }

    handleChange = event => {
        event.preventDefault()
        this.setState({search: event.target.value});

        console.log(this.state.search)
      }

      findBook = (e) =>{
        e.preventDefault()

        console.log("HI")
        API.getSearch(this.state.search) 
        
        .then(res => {
            console.log(res)
            if (res.data.status === "error") {
              throw new Error(res.data);
            }
            this.setState({ results: res.data });
          })
          .catch(err => this.setState({ error: err.message }));
    

      }

      SaveBook = () =>{




        
      }

    render(){
    return(
<Wrapper>


        <SearchForm
        
        handleChange = {this.handleChange}
        search = {this.state.search}
        handleFormSubmit ={this.findBook}
        />
<SearchDiv>


<ResultDivs

title = {this.state.results}
subtitle = {this.state.results}
authors = {this.state.results}
viewfunction = {this.SaveBook}
Savefunction = {this.SaveBook}

/>
    
</SearchDiv>

</Wrapper>    
  
    
    
    
    
    
    
    

    
    
    
    
    ) }}
    export default SearchPage;