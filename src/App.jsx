
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import './css/all.min.css';
import Banner from "./banner/banner";
import './css/stylesheet.css';
import Header from './Header/header';
import Catagary from './Catagary/catagary';
import Product from './Product/product';
import Fresh from './Fresh/fresh';
import Services from './Services/services';
import Deal from './Deal/deal';
import Popular from './Popular/popular';
import Review from './Review/review';
import News from './News/news';
import Footer from './Footer/footer';


function App() {
  return (
    <>
      <Header />
      <Banner />
      <Catagary />
      <Product />
      <Fresh />
      <Services />
      <Deal />
      <Popular />
      <Review />
      <News />
      <Footer />
      

    </>

  );
}

export default App;
