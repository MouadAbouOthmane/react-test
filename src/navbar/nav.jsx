import { useState } from "react";
import "./nav.css";

function Nav() {
  const originList = {
    'home': false,
    'store': false,
    'contact': false,
    'aboutus': false,
  };
  const [activeList, setActiveList] = useState({
    'home': false,
    'store': false,
    'contact': false,
    'aboutus': false,
  });
  const listact = (e) => {
    let tempObject = JSON.parse(JSON.stringify(originList))
    tempObject[e] = true
    setActiveList({...tempObject})
  };

  return (
    <nav className="flex-center">
      <div className="nav-gauche flex-center">
        <h1>logo</h1>
        <div className="nav-items flex-center">
          <div className={activeList.home  ? "nav-item item-active" :"nav-item " } onClick={() => listact("home")}>
            home
          </div>
          <div className={activeList.store ? "nav-item item-active" :"nav-item " } onClick={() => listact("store")}>
            store
          </div>
          <div className={activeList.contact ? "nav-item item-active" :"nav-item " } onClick={() => listact("contact")}>
            contact
          </div>
          <div className={activeList.aboutus ? "nav-item item-active" :"nav-item " } onClick={() => listact("aboutus")}>
            about us
          </div>
        </div>
      </div>
      <div className="nav-droite flex-center">
        <div className="nav-signin">log in</div>
        <div className="nav-signup">sign up</div>
      </div>
    </nav>
  );
}

export default Nav;
