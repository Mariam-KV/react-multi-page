import MainHeader from "./MainHeader.js";
import classes from "./Layout.module.css";
let Layout = (props) => {
  return (
    <div>
      <MainHeader />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
};
export default Layout;
