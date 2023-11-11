import "./assets/style/style.css"
import Nav from './components/Nav'
import ProjectList from './components/ProductList'
import Footer from './components/Footer'


function App() {
  return (
    <div className="container">
      <Nav/>
      <ProjectList/>
      <Footer/>
    </div>
  );
}

export default App;
