
import React from "react"
import SavedDiv from  "../components/SavedDiv"
import Wrapper from "../components/Wrapper"
import SaveResults from "../components/SaveResults"

//import  SaveDiv from "../components/SavedDiv";



class SavedPage extends React.Component{
    state={
        search : "",
        results : []
    }
render(){



return(
<Wrapper>



<SavedDiv>

{this.state.results.map(data =>(
    <SaveResults
    title = {data.volumeInfo.title}
    subtitle = {data.volumeInfo.subtitle}
    authors = {data.volumeInfo.authors}
    summary={data.volumeInfo.description}
    bookImg= {data.volumeInfo.imageLinks.smallThumbnail}
    link = {data.volumeInfo.canonicalVolumeLink}
    Savefunction = {this.SaveBook}
    
    
    />
    
    ))}



</SavedDiv>






</Wrapper>













)




}



}



export default SavedPage