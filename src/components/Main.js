import React,{ Component} from 'react';
import Header from './Header';
import Pod from './Pod';
import MarsRover from './MarsRover';
import Search from './Search';
import Gallery from './Gallery';

import {Switch,Route, Redirect,BrowserRouter,NavLink} from 'react-router-dom';

class Main extends Component {

    render(){
        return(
         
            <div> 

          <Header />
          <Search />
          
          <Switch> 
                <Route path="/home" component={Pod} />
                <Route path="/marsrover" component={MarsRover} />
                  <Redirect to = "/home" />
         </Switch>     


           
           
            </div>
         
        )
    }
}

export default Main;