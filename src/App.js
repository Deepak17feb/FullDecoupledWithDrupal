import React from 'react';
import List from './components/list';
import SingleView from './components/singleView';
import Header from './components/Header';
import {BrowserRouter as Router, Route} from 'react-router-dom';


function App() {
  return(
    <Router>
      <Header/>
      <Route path="/" exact component={List} />
      <Route path="/SingleView" component={SingleView} />
    </Router>
  )
}

export default App;
