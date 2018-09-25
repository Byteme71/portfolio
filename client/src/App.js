import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import Main from "./pages/Main";
import Contact from "./pages/Contact";


const App = () =>
  
  <Router>
    <div>
      <Navbar />
      <Route exact path="/" component={Landing} />
      <Route exact path="/main" component={Main} />
      <Route exact path="/contact" component= {Contact} />
      <Footer />
    </div>
  </Router>



// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p>
//       </div>
//     );
//   }
// }

export default App;
