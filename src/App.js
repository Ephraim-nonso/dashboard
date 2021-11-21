import "./App.css";
import MainContent from "./components/body/MainContent";
import Footer from "./components/footer/Footer";
import Nav from "./components/navbars/Nav";

function App() {
  return (
    <div className="App">
      <Nav />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
