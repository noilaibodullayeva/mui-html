import './App.css';
import ResponsiveAppBar from './header';
import Home from './home';
import About from './about';
import Menu from './menu';
import Products from './products';
import Contact from './contact';
import Blogs from './blogs';
import Footer from './footer';

function App() {
  return (
    <div>
      <ResponsiveAppBar />
      <Home/>
      <About/>
      <Menu/>
      <Products/>
      <Contact/>
      <Blogs/>
      <Footer/>
    </div>
  );
}

export default App;
