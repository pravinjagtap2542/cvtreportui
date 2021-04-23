import React, { Component } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Home from './components/Home'
import Cart from './components/Cart'
import Charts from './components/Charts'

class App extends Component {
  render() {
    return (
       <BrowserRouter>
            <div className="App">
            
              <Header />
                {/* <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/cart" component={Cart}/>
                    <Route path="/charts" component={Charts}/>
                </Switch> */}
                <Footer />
             </div>
       </BrowserRouter>
      
    );
  }
}

export default App;
