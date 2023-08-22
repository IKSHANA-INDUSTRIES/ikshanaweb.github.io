import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { About} from "./components/About";
import { Products } from "./components/Products";
import {Team} from "./components/Team";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <About />
      <Products />
   
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
