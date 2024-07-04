import Footer from "./Footer.jsx";
import Navbar from "./Navbar.jsx";

import "./Layout.css";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
