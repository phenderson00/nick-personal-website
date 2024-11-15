import { Link } from "react-router-dom";

import "./Menu.css";

export function Menu() {
  return (
    <div className="menu">
      <menu>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/cv">CV</Link></li>
        <li><Link to="/publications">Publications</Link></li>
        <li><Link to="/currentwork">Current Work</Link></li>
        <li><Link to="/teaching">Teaching</Link></li>
        <li><Link to="/contact">Contact Me</Link></li>
      </menu>
    </div>
  );
}
