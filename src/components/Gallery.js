
import React,{Component} from 'react';
import axios from 'axios';

class Gallery extends Component{
    constructor(props){
        super(props);
        this.state={
            img : [],
            error:false,
            results :[]
        };
    }

      componentDidMount(){

        // const url = `https://newsapi.org/v2/${this.props.news.type}?${this.props.news.query}&apiKey=2f5b88c782444575a24e7499ee1bd726`;
        // https://images-api.nasa.gov/search?q={q}

        const urll = `https://images-api.nasa.gov/search?q=${this.props.query.parameter}`;

        axios.get(urll)
        .then((response) =>{
            this.setState({
                  results: response.data.items
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
                            
                             <h1>Results</h1>
                             <img src = {this.state.url} />
                   </div>
                   
               )
    }
}

export default Gallery;