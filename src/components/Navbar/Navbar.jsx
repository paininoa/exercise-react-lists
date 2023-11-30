import "./Navbar.css";

const Navbar = ({ logoURL, websiteName, navList }) => {
  const lista = navList.map(({ url, name }, i) => (
    <li key={`navlink${i}`}>
      <a href={url}>{name}</a>
    </li>
  ));

  return (
    <div className="navWrapper">
      <figure>
        <img src={logoURL} alt="logo image" />
        {websiteName}
      </figure>

      <menu>{lista}</menu>
    </div>
  );
};

export default Navbar;
