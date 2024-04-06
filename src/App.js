
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Navbar from './components/common/navbar/Navbar';
import Footer from './components/common/footer/Footer';
import Home from './components/common/home/Home';
import About from './components/common/about/About';
import Contact from './components/common/contact/Contact';
import Packageshome from "./components/packages/Packageshome";
import Team from './components/common/home/team/Team';
import Blog from './components/common/blog/Blog';

function App() {
  return (
    < >
     <Router>
     <Navbar/>
   
      <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/contact' component={Contact} />
      <Route exact path='/packages' component={Packageshome} />
      <Route exact path='/news' component={Blog} />
      <Route exact path='/team' component={Team} />
      
      </Switch>
      <Footer/>
     </Router>
    </>
  );
}

export default App;
