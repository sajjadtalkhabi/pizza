import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './styles/fonts/fontello-b9d25c07/css/fontello.css';
import Navbar from './components/Navbar';
import Home from './views/Home';
import Cart from './views/Cart';
import { Route, Link, Switch } from 'react-router-dom';
import Register from './views/Register';
import Login from './views/Login';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/cart" exact>
          <Cart />
        </Route>
        <Route path="/register" exact>
          <Register />
        </Route>
        <Route path="/login" exact>
          <Login />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
