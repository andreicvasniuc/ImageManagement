import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import Upload from './components/Upload';
import Resize from './components/Resize';

function App() {
  return (
    <Router>
      <Navigation />

      <Switch>
        <Route path="/" exact component={Upload} />
        <Route path="/resize" component={Resize} />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
