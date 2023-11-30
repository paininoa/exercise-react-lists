import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Jumbotrone from "./Jumbotrone/Jumbotrone";

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

      <Jumbotrone
        imgURL="https://images.pexels.com/photos/355508/pexels-photo-355508.jpeg"
        subtitle="FEATURED POSTS"
        title="I am a blogger & I love foods"
        paragraph="orem ipsum dolor sit amet, consectetur adipiscing elit. Quisque condimentum sed nulla eu sodales. Morbi condimentum lorem sodales tellus molestie, nec imperdiet lorem congue."
        showBtn={true}
      />
    </>
  );
};

export default App;
