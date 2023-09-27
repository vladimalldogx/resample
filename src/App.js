import logo from './logo.svg';
import './App.css';
import Rona from './components/Rona';
import GraceFantonial  from './components/GraceFantonial'; //jsx type
import MaeHiyoca from './components/MaeHiyoca';
import Commingsoon from './components/Commingsoon';
import Navigation from './components/Navigation';
function App() {
  return (

    <div className="App">
      <Navigation/>
        <img src={logo} className="App-logo" alt="logo" />
        
        
          <Commingsoon />
        
      
    </div>
  );
}

export default App;
