import Cart from '../Pages/Cart/Cart';
import Home from '../Pages/HomePage/HomePage';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';


export default [
    {
        name: "Home", path: "/", component: Home, exact: true
    },
    {
        name: "About", path: "/about", component: About, exact: true
    },
    {
        name: "Cart", path: "/cart", component: Cart, exact: true
    },
    {
        name: "Contact", path: "/contact", component: Contact, exact: true
    },
    // {
    //     name: "Product", path: "/Product", component: Blog, exact: true
    // },

];