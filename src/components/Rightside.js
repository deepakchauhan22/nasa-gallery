import React,{Component} from 'react';


class Rightside extends Component{
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
        const url = 'https://api.nasa.gov/techtransfer/software/?engine&api_key=kuRvrNbeHckIzLdMfdyaPHLgc797lC96wSTcSdY9';

           fetch(url)
           .then((response) => {
            return response.json();
          })
          .then((data) => {
            this.setState({
              img: data.results,
            })
          })
           .catch((error)=>{
               this.setState({
                   error:true
               })
           });
        }

     randomfuction(){
       
        if(!this.state.error){
    
            return this.state.img.map((item) => (
              <div className="responsivee" key={item.id} item={item} >
                      <h6> <strong>*</strong> {item[2]}</h6>                
              </div>
            ));
            }
          
            else{
                return <h1>Error</h1>
            }
          }
        
      
        

    render(){
       

        return(
            <div className="Hro"> 

                <div className="pod">
                  {this.randomfuction()}
                
                </div>
    
            </div>
          
           
        )
    }
}

export default Rightside;