import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './Components/Home/Home';
import Login from './Components/Login/Login';
import Order from './Components/Order/Order';
import Header from './Components/Header/Header';
import Admin from './Components/Admin/Admin';
import { createContext, useState } from 'react';
export const UserContext = createContext();

function App() {
  const [loggedIn, setLoggedIn] = useState({});
  const [cart, setCart] = useState([]);
  const [num, setNum] = useState(1);
  return (
    <UserContext.Provider value={{ log: [loggedIn, setLoggedIn], cartData: [cart, setCart], number: [num, setNum]}}>
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/admin">
          <Admin />
        </Route>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/cart">
          <Order />
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
