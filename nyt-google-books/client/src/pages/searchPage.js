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
        results : []
    }

    handleChange = event => {
        event.preventDefault()
        this.setState({search: event.target.value});

        console.log(this.state.search)
      }

      findBook = e =>{
        e.preventDefault()

        console.log("HI")
        if (this.state.search === ""){
          alert("Please Add a Title" )
          
          }  else {

  API.getSearch(this.state.search) 
        
        .then(res => {
            console.log(res.data.items)
            if (res.data.status === "error") {
              throw new Error(res.data.items.data);
            }

            this.setState({ results: res.data.items });
                        console.log(this.state.results)

          })
          .catch(err => this.setState({ error: err.message }));
    


          }
        }
      
      

      SaveBook = () =>{




        
      }
      
      redirect = event =>{




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




{this.state.results.map(data =>(
<ResultDivs
title = {data.volumeInfo.title}
subtitle = {data.volumeInfo.subtitle}
authors = {data.volumeInfo.authors}
summary={data.volumeInfo.description}
bookImg= {data.volumeInfo.imageLinks.smallThumbnail}
link = {data.volumeInfo.canonicalVolumeLink}
Savefunction = {this.SaveBook}


/>

))}




    
</SearchDiv>

</Wrapper>    
  
    
    
    
    
    
    
    

    
    
    
    
    ) }}
    export default SearchPage;