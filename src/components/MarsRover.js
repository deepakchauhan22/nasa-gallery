import React, {Component} from 'react';

class MarsRover extends Component{
    constructor(props) {
        super(props);
        this.state = {
          images: [],
          error: false,
        };
      }

      componentDidMount(){
        const url = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&page=1&api_key=kuRvrNbeHckIzLdMfdyaPHLgc797lC96wSTcSdY9';

        fetch(url)
          .then((response) => {
            return response.json();
          })
          .then((data) => {
            this.setState({
              images: data.photos
            })
          })
          .catch((error) => {
            this.setState({
                error:true
            })
        });
      }

      renderItems() {
     
        if(!this.state.error){
    
        return this.state.images.map((item) => (
          <div className="responsive" key={item.id} item={item} >
                  <h1>{item.camera.name}</h1>
                  <p>{item.rover.landing_date}</p>
               <div className="gallery"> 
                    <img src={item.img_src} width="300" />
                </div>
          </div>
        ));
        }
      
        else{
            return <h1>Error</h1>
        }
      }
    
      
    render(){
        return(
            <div >
 <h1>Mars Rover</h1>
            {this.renderItems() }
            </div>
           
        )
    }
}
export default MarsRover;