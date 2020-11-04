import React, { Component } from 'react'; 
// bisa juga `import React from 'react'` lalu pada classnya  `class App extends React.Component`
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import Layout from '../layout/Layout'
import Header from './components/Header'
import Footer from './components/Footer'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'

// class component App
class App extends Component{
   render(){
      return(
         <Router>
            <div>
               {/* header component with props */}
               <Header judul="React Training"/>
               <Switch>
                  <Route exact path='/' component={HomePage} />
                  <Route path='/about' component={AboutPage} />
               </Switch>
               <Footer judul="created by: delongers" />
            </div>
         </Router>
      );
   }
}
export default App;