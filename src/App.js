import './App.css';
import Layouts from './components/layouts';
import Sidebar from './components/sidebar';
import Navbar from './components/navbar';
import Home1 from './components/home1';

function App() {
  return (
    <div className="App">
      <Layouts>
       
        <Navbar/>
        <Home1/>
      </Layouts>
    </div>
  );
}

export default App;
