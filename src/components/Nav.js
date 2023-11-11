import searchBar from "../assets/img/Group 3.jpg"
import cart from "../assets/img/Group 2.jpg"

const Nav = () => {
    return (
        <div className="nav-top">
            <h2 className="nav-title">MY JEWELRY STORE</h2>
            <div className="images">
                <img src={searchBar} alt="search bar" className="paddin" />
                <img src={cart} alt="shopping cart" />
            </div>
        </div>
    )
}

export default Nav;