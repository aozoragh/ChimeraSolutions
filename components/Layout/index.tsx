import PropTypes from "prop-types";
import Header from "./Header";
// import { LayoutView } from "./layout.style.js";
// import { FontStyles } from "./layout.style.js";

const Layout = ({ children }) => {
  return (
    <>
      {/* <FontStyles /> */}
      <Header />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  );
};
Layout.propTypes = {
  children: PropTypes.node,
};
export default Layout;
