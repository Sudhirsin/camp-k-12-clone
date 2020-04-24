import React from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import Home from './components/Home/Home';
import OnlineCourse from './components/Online_Courses/OnlineCourse'

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route exact path="/" component = {Home} />
        <Route path = "/onlineCourses" component = {OnlineCourse} />
      </Switch>
      {/* <OnlineCourse /> */}
      {/* <Home /> */}
    </React.Fragment>
  );
}

export default App;
