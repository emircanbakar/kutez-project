import "./assets/style/style.css"
import searchBar from "./assets/img/Group 3.jpg"
import cart from "./assets/img/Group 2.jpg"

function App() {
  return (
    <div className="container">
      <div className="nav-top">
        <h3>MY JEWELRY STORE</h3>
        <div className="images">
          <img src={searchBar} alt="search bar" className="paddin"/>
          <img src={cart} alt="shopping cart" />
        </div>
      </div>
    </div>
  );
}

export default App;
