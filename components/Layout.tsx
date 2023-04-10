import Navbar from "../islands/Navbar.tsx";
import Footer from "./Footer.tsx";

export default function Layout({ children }) {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
