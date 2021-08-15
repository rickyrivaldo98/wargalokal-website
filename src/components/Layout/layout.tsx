import Footer from "./footer";
import Navbar from "./navbar";

interface Props {
  children?: any;
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <div className="content">
        <Navbar />
        {children}
        <Footer />
      </div>
    </>
  );
};

export default Layout;
