import React from "react";
import { Link } from "react-router-dom";

const Nav: React.FC = () => {
  // TODO: Add necessary code to display the navigation bar and link between the pages
  return (
    <nav>
      <ul>
        <li><Link to="/">Candidate Search</Link></li>
        <li><Link to="/saved-candidates">Saved Candidates</Link></li>
        <li><Link to="/potential-candidates"> Potential Candidates</Link></li>
      </ul>
    </nav>
  );
};

export default Nav;