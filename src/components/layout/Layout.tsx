import classes from './Layout.module.css'
import React, {FC, Fragment} from "react";
import MainNavigation from "./MainNavigation";

const Layout: FC = (props) => (
  <Fragment>
    <MainNavigation/>
    <main className={classes.main}>
      {props.children}
    </main>
  </Fragment>
)

export default Layout
