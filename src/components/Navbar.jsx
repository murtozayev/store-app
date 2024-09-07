import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav>
            <Link className="fas fa-house" to="/" />
            <div>
                <Link className="fas fa-cart-shopping" to="/cart" />
                <Link to="/collect">Add New Products</Link>
                <a target="_blank" href="https://unsplash.com/">Get images from here</a>
            </div>
        </nav>
    )
}

export default Navbar
