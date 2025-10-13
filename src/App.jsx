import "@/styles/globals.scss"
import Header from "./layouts/Header"
import Content from "./layouts/Content/Content"
import { Outlet, useLocation } from "react-router-dom";
import Footer from "./layouts/Footer";

function App() {

  const location = useLocation();

  const path = location.pathname === "/" ? "home" : location.pathname.slice(1);

  return (
    <>
      <Header />
      <Content className={path}>
        <Outlet />
      </Content>
      <Footer />
    </>
  )
}

export default App
