import Navbar from './Navbar';
import Footer from './Footer';
import GlobalBackground3D from './GlobalBackground3D';

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen relative">
      <GlobalBackground3D />
      <Navbar />
      <main className="flex-grow relative z-10">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
