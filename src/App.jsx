import "./App.css";
import Navbar from "./components/Navbar";

const App = () => {
  const navList = [
    { name: "Home", url: "/home" },
    { name: "About", url: "/about" },
    { name: "Foods", url: "/foods" },
    { name: "Lifestyle", url: "/lifestyle" },
    { name: "Contact", url: "/contact" },
  ];

  return (
    <>
      <Navbar
        logoURL="https://as2.ftcdn.net/v2/jpg/01/17/28/51/1000_F_117285131_W2qjuUEEBPP2nPJHxosDk62mj4B6KvIg.jpg"
        websiteName="Urco website"
        navList={navList}
      />
    </>
  );
};

export default App;
