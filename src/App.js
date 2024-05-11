import './App.css';
import Header from './components/Homepage/Header';
import Footer from './components//Homepage/Footer';
import Content from './components//Homepage/Content';

function App() {
  return (
      <div>
      <Header/>
      <h1 className="centered-title">Klartext CO2</h1>
      <p></p>
      <Content/>
      <Footer/>
    </div>
    
);
}
export default App;
