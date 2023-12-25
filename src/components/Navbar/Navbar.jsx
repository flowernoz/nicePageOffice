import { HiBars3 } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import "./Navbar.css";
function Navbar() {
  function openSidebar() {
    document.querySelector(".Sidebar").style.transform = "translateX(0)";
    document.querySelector(".overlay").style.display = "block";
    document.body.style.overflow = "hidden";
  }

  function closeSidebar() {
    document.querySelector(".Sidebar").style.transform = "translateX(-100%)";
    document.querySelector(".overlay").style.display = "none";
    document.body.style.overflow = "auto";
  }

  return (
    <header className="Navbar">
      <Link to={"/"} className="navLogo">
        Office Design Gallery
      </Link>
      <HiBars3 onClick={openSidebar} className="navMenuIcon" />

      {/* ============ SIDEBAR ============ */}

      <div className="Sidebar">
        <button onClick={closeSidebar} className="sidebarClose">
          <IoMdClose />
        </button>
        <div className="SidebarLinks">
          <Link to={"/"}>Page1</Link>
          <Link to={"/page2"}>Page2</Link>
          <Link to={"/page3"}>Page3</Link>
          <Link to={"/page4"}>Page4</Link>
        </div>
      </div>
        <div onClick={closeSidebar} className="overlay"></div>
    </header>
  );
}

export default Navbar;
