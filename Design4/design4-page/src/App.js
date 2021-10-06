import './App.css';
import Content from './components/Content';
import Footer from './components/Footer';
import NavBar from './components/NavBar';
function App() {
  return (
    <div className="App">
        <NavBar></NavBar>
        <hr />
        <Content></Content>
        <Footer></Footer>
    </div>
  );
}

export default App;
