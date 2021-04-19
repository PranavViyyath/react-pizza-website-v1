import { BrowserRouter as Router } from "react-router-dom";
import {GlobalStyle} from './globalStyles'
import Hero from './components/Hero'
import Products from "./components/Products";
import { productDataTwo, productsData } from "./components/Products/Data";
import Feature from "./components/Feature";
import Footer from './components/Footer';

function App() {
  return (
    <Router>
    <GlobalStyle/>
    <Hero/>
    <Products data={productsData} heading='Choose your favorite'/>
    <Feature/>
    <Products data={productDataTwo} heading='Sweet treat for you'/>
    <Footer/>
    </Router>
  );
}

export default App;
