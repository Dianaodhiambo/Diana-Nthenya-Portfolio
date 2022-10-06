import './App.css';
import Navbar from './components/Navbar';
import Introduction from './components/Introduction';
import Services from './components/Services';
import Experience from './components/Experience';
import Portfolio from './components/Portfolio';
import Contact  from './components/Contact';



function App() {
  return (
   
    <div className="App">
     <Navbar/>
     <Introduction/>
     <Services/>
     <Experience/>
     <Portfolio/>
     <Contact/>
      
    </div>
    
  );
}

export default App;
