import HomePage from '../Pages/HomePage/HomePage';
import About from '../Pages/About/About';
import Product from '../Pages/Product/Product';
import Compare from '../Pages/Compare/Compare';
import Cart from '../Pages/Cart/Cart';
import Contact from '../Pages/Contact/Contact';


export default [
    {
        name: "Home", path: "/", component: HomePage, exact: true
    },
    {
        name: "About", path: "/about", component: About, exact: true
    },
    {
        name: "Product", path: "/product/:id", component: Product, exact: true
    },
    {
        name: "Compare", path: "/compare", component: Compare, exact: true
    },
    {
        name: "Cart", path: "/cart", component: Cart, exact: true
    },
    {
        name: "Contact", path: "/contact", component: Contact, exact: true
    },

];