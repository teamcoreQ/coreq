import { useState } from "react"
import '../../src/assets/css/Header.css';
import PropTypes from 'prop-types';

export default function Header(props) {
  const [isNavExpanded, setIsNavExpanded] = useState(false)

  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        Core<span>Q</span>
      </a>

      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded)
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
            <a href="/About">About</a>
          </li>
          <li>
            <a href="/about">Mission</a>
          </li>
          <li>
            <a href="/contact">Our team</a>
          </li>
          <li>
            <a href="/contact">contact</a>
          </li>
        </ul>
        <a className="btn" href={props.link} target="_blank">
          <button type="submit">Join us</button>
        </a>

      </div>
    </nav >
  );
}