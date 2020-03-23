import React from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Banner from './Components/Banner/Banner';
import Productgrid from './Components/Productgrid/Productgrid';
import Breakfast from './Components/Breakfast/Breakfast';
import Lunch from './Components/Lunch/Lunch';
import Dinner from './Components/Dinner/Dinner';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      <Productgrid></Productgrid>







      <Router>
        <Switch>
          <Route path='/breakfast'>
            <Breakfast></Breakfast>
          </Route>
          <Route path='/lunch'>
            <Lunch></Lunch>
          </Route>
          <Route path='/dinner'>
            <Dinner></Dinner>
          </Route>
        </Switch>
      </Router>


 
    </div>
    );
}

export default App;
