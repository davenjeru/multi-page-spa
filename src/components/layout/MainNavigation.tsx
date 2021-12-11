import classes from "./MainNavigation.module.css";
import {NavLink} from "react-router-dom";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <div className={classes.logo}>Great Quotes</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <NavLink className={(navData) => navData.isActive ? classes.active : ''}
                     to={'/quotes'}>
              All Quotes
            </NavLink>
          </li>
          <li>
            <NavLink className={(navData) => navData.isActive ? classes.active : ''} to={'/new-quote'}>
              Add A new Quote
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default MainNavigation
