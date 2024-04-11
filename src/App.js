import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Resume from './Resume';
import About from './About';
import NavBar from './NavBar';

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route exact path="/" component={Home} />
          <Route path="/resume" component={Resume} />
          <Route path="/about" component={About} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;