import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Router, Route,Switch } from "react-router-dom";
import history from "./History/History"

import Header from "./Component/Header/Header"
import Footer from "./Component/Footer/Footer"

import Error from "./Component/Error/Error"

function Home(){
  return <div>Home</div>
}

function About(){
  return <div>About</div>
}

class App extends React.Component{
  render(){
    return (
      <React.Fragment>
        <CssBaseline />
        <Router history={history}>
              <main>
                <Header />
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route exact path="/about" component={About} />
                  <Route exact component={Error} />
                </Switch>
                <Footer />
              </main>
        </Router>
    </React.Fragment>
      
    );
  }
}
 
export default App


