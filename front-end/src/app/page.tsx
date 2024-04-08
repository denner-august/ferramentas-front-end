import "react-toastify/dist/ReactToastify.css";
import { Banner } from "./components/banner/banner";
import { CursoProgramação } from "./components/cursos/programação/cursoProgramação";
import { Header } from "./components/header/header";
import { ToastContainer } from "react-toastify";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <CursoProgramação />
      <ToastContainer />
    </>
  );
}
