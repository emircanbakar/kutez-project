import searchBar from "../assets/img/Group 3.jpg"
import cart from "../assets/img/Group 2.jpg"

const Nav = () => {
    return (
        <div className=" flex items-center justify-between mt-12 p-4">
            <h2 className=" font-normal text-xl ">MY JEWELRY STORE</h2>
            <div className="flex space-x-5 items-center ">
                <img src={searchBar} alt="search bar" />
                <img src={cart} alt="shopping cart" />
            </div>
        </div>
    )
}

export default Nav;