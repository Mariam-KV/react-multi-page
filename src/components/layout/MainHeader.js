import classes from "./MainHeader.module.css";
import { NavLink } from "react-router-dom";
let MainHeader = () => {
  return (
    <div className={classes.header}>
      <div className={classes.logo}>Great quotes</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink to="/allQuotes" activeClassName={classes.active}>
              All quotes
            </NavLink>
          </li>
          <li>
            <NavLink to="/newQuote" activeClassName={classes.active}>
              Add a quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};
export default MainHeader;
