import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Router, Route,Switch } from "react-router-dom";
import { Provider } from 'react-redux'
import history from "./History/History"
import store from "./Redux/ConfigureStore"

import Header from "./Component/Header/Header"
import Footer from "./Component/Footer/Footer"

import Error from "./Component/Error/Error"

function Home(){
  return <div>Home</div>
}

function About(){
  return <div>About</div>
}

console.log(store.getState())

const AppRouter = () =>{
  return <Router history={history}>
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
}

class App extends React.Component{
  render(){
    return (
      <Provider store={store}>
      <React.Fragment>
        <CssBaseline />
        <AppRouter />
     </React.Fragment>
    </Provider>
      
    );
  }
}
 
export default App


