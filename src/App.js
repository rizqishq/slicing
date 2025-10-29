import "./App.css";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import About from "./components/About";
import Skills from "./components/Skills";
import Portfolio from "./components/Portofolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Main />
            <About />
            <Skills />
            <Portfolio />
            <Contact />
            <Footer />
        </div>
    );
}

export default App;
