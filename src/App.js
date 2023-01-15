import logo from './logo.svg';
import './App.css';
import Home from './Home';
import Login from './Login';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import Navbar from './Navbar';
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/navbar">
         <Navbar />
        </Route>
        <Route exact path="/">
        <Home />
        </Route>
        <Route exact path="/apiverif">
        <Login />
        </Route>
      </Switch>
      
    </Router>
   
  );
}

export default App;
