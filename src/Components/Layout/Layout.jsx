import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import { NavbarWebsite } from '../Navbar/Navbar';

export default function Layout() {
  return (
    <>
      <NavbarWebsite />
      <main className="bg-gray-900 pt-[90px] min-h-[calc(100vh-48px)]">
        <div className="container">
          <Outlet></Outlet>
        </div>
      </main>
      <Footer />
    </>
  );
}
