import { useState } from "react";
import "../../src/assets/css/Header.css";
import Logo from "../../src/assets/img/Logo.png";
import { Anchor } from "antd";

const { Link } = Anchor;

export default function Header(props) {
  const [isNavExpanded, setIsNavExpanded] = useState(false);

  return (
    <nav className="navigation" style={{position: fixed;top : 0;}}>
      <a className="ml-7 lg-1/3">
        <img src={Logo} alt="coreQ_logo" width="84" height="36.75" />
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        {/* hamburger svg code... */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <Link href="#about" title="About" />
          </li>
          <li>
            <Link href="#mission" title="Mission" />
          </li>
          <li>
            <Link href="#programs" title="Programs" />
          </li>
          <li>
            <Link href="#our team" title="Our team" />
          </li>
          <li>
            <Link href="#footer" title="Contact" />
          </li>
        </ul>

        <a className="btn" href={props.link} target="_blank">
          <button type="submit">Join Us</button>
        </a>
      </div>
    </nav>
  );
}
