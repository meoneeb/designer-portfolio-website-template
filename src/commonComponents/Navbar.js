import { useState } from "react";
import Link from "next/link";
import "@/styles/buttons.scss";
import { menu, menuButtons } from "@/database/menu";

const Navbar = ({ menu, menuButtons, pathname }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <Link href="/">
          <a>My Logo</a>
        </Link>
      </div>
      <div className={`"menu" ${isMenuOpen ? "open" : ""}`}>
        <ul>
          {menu.map((nav, index) => (
            <li
              key={index}
              className={`${
                pathname.startsWith(nav.Link) && index !== 0 ? "navActive" : ""
              }`}
            >
              <Link href={nav.Link}>
                <a>{nav.Label}</a>
              </Link>
            </li>
          ))}
          {menuButtons.map((btn, index) => (
            <li key={index}>
              <Link href={btn.Link}>
                <a className={btn.CTA ? "btnPR" : "btnSEC"}>{btn.Label}</a>
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div
        className={`hamburger" ${isMenuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <div className={styles.line}></div>
        <div className={styles.line}></div>
        <div className={styles.line}></div>
      </div>
    </nav>
  );
};

export default Navbar;
