import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => (
  <div className="min-h-screen flex flex-col items-center bg-white">
    <Header />
    {children}
    <Footer />
  </div>
);

export default Layout;
