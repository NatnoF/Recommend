import './App.css';
import Navbar from './components/Navbar/index';
import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
    </Router>
  );
}

export default App;
