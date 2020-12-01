
import React,{Component} from 'react';
import Gallery from './Gallery';
import axios from 'axios';


class Search extends Component{
   state={
            parameter: '',
            results :[],
            links : null,
        };

        

    handleChange =(event) =>{
        console.log("Value passed");
        this.setState({
            parameter: event.target.value
        });
    };

    handleSubmit = event =>{
        event.preventDefault();
        this.makeApiCall(this.state.parameter)
        console.log("API call made");
    }

    makeApiCall = searchInput =>{

     
        var urll = `https://api.unsplash.com/search/photos?page=1&query=${searchInput}&client_id=hLoCHMP5Gx3gD4bWpao2YCDcHPKRC8FBooqX2rB6TzE`;
        console.log("API value made");
        axios.get(urll)
        .then((response) =>{
            this.setState({
                  results: response.data.results
            })
        })

        .catch((error) => {
            this.setState({
                error:true
            })
        });
    }

    render(){
               return(
                   <div>
                             <form onSubmit={this.handleSubmit}>
                             <h1>Search</h1>
                             <input onChange={this.handleChange} type ='Search' value={this.state.parameter}/> 
                             </form>

                             {this.state.results ? (
                                    <div id="dee">
                                      
                                        {this.state.results.map((item, index) => (
                                        <div class="responsive" key={index}>
                                            <div className="gallery"> 
                                            <span>{item.alt_description}</span>
                                            <img src={item.urls.small} alt="meal-thumbnail" />
                                            </div>
                                        </div>
                                        ))}
                                        <div class="clearfix"></div>

                                        </div>
                                     
                                    
                                ) : (
                                <p>Try searching for another photo...</p>
                                )}

                          
              
                        </div>
                   
               )
    }
}

export default Search;