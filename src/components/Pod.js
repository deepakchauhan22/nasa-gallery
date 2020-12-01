import React,{Component} from 'react';
import Rightside from './Rightside';

class Pod extends Component{
    constructor(props){
        super(props);
        this.state={
            img : [],
            error:false,
            title: null,
            explanation: null,
            url: null,
            media_type: null,
        };
    }

    componentDidMount(){
        const url = 'https://api.nasa.gov/planetary/apod?api_key=kuRvrNbeHckIzLdMfdyaPHLgc797lC96wSTcSdY9';

           fetch(url)
           .then((response) => {
            return response.json();
          })
          .then((data) => {
            this.setState({
              img: data.articles,
              title: data.title,
              explanation: data.explanation,
              url: data.url,
              media_type: data.media_type
            })
          })
           .catch((error)=>{
               this.setState({
                   error:true
               })
           });
        }

     randomfuction(){
         if(this.state.media_type == "image"){
            return <img src={this.state.url} width="300px" alt='pod' />
         }
         else{
           return  <iframe src={this.state.url} allowFullScreen title='Video player'/>
         }
     }   
        

    render(){
        const {title,explanation} = this.state;

        return(
            <div className="Hero"> 

                <div className="pod">
                  <h2>Picture of the Day.</h2>
                  {this.randomfuction()}
                  <h1>{title}</h1>
                  <h6>{explanation}</h6>
                  
                </div>
                
                <div className="rightside">
                  <h1>Right Side Content</h1>
                  <Rightside />
                </div>
    
            </div>
          
           
        )
    }
}

export default Pod;