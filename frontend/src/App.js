import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Signupscreen from './components/signup';
import Signinscreen from './components/signin';
import Dashboardscreen from './components/dashboard';
import Landing from './components/landing';
import OldLanding from './components/landingPage/OldLanding';

function App() {





  return (
    <>

      <BrowserRouter>
      <Route path="/signup" component={Signupscreen} />
      <Route path="/dash" component={Dashboardscreen} />
      <Route path="/signin" component={Signinscreen} />
      <Route path="/landing" component={Landing} />
      <Route path="/oldlanding" component={OldLanding} />
      <React.Fragment>
        {/* {createPage()} */}
      </React.Fragment>
      </BrowserRouter>
      </>)
  }

export default App;

