import './App.css';
import {BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages';
import SignInPage from './pages/signin';
import SignUpPage from './pages/signup';
import SidebarMenu from './pages/search';
import Saved from './pages/saved';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/signin" component={SignInPage} exact />
        <Route path="/signup" component={SignUpPage} exact />
        <Route path="/search" component={SidebarMenu} exact />
        <Route path="/saved" component={Saved} exact />
      </Switch>
    </Router>
  );
}

export default App;
