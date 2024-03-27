import { Banner } from "./components/banner/banner";
import { CursoProgramação } from "./components/cursos/programação/cursoProgramação";
import { Header } from "./components/header/header";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <CursoProgramação />
    </>
  );
}
