import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

//App components
import Header from './Header';
import Home from './Home';
import About from './About';
import Teachers from './Teachers';
import Courses from './Courses';
import NotFound from './NotFound';
import Featured from './Featured';

const App = () => (
  <BrowserRouter>
    <div className="container">
      <Header />

      {/* The Switch statement renders the first route that matches the url otherwise the catch all is the bottom one with no path */}
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/about" render={ () => <About title='About' /> } /> {/* This is how you pass props to components via routes. */}
        <Route exact path='/teachers' component={Teachers} />
        <Route path='/teachers/:topic/:fname-:lname' component={Featured} />
        <Route path='/courses' component={Courses} />
        <Route component={NotFound} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;