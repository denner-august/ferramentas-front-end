import { LayoutCurso } from "../LayoutCurso/LayoutCurso";
import { LayoutCursosContainer } from "../layoutCursosContainer/layoutCursosContainer";

import ImageCursoEmVideo from "@/../public/image/playlist/cursoemvideo.jpg";
import ImageOrigami from "@/../public/image/playlist/flexbox.jpg";

export const CursoProgramação = () => {
  return (
    <LayoutCursosContainer>
      <LayoutCurso
        princialImage={ImageCursoEmVideo}
        alt="curso em video"
        BluerImage={`${ImageCursoEmVideo}`}
        descrição="Se você deseja entender Logica de programação sem duvidas esse é a playlist certa"
        Link="https://www.youtube.com/playlist?list=PLHz_AreHm4dmSj0MHol_aoNYCSGFqvfXV"
      />

      <LayoutCurso
        princialImage={ImageOrigami}
        alt="Curso de flexbox"
        BluerImage={`${ImageOrigami}`}
        descrição="Um dos melhores cursos Gratuitos que você vai encontrar sobre flexbox"
        Link="https://www.youtube.com/watch?v=qq0z-YSPJLI"
      />
    </LayoutCursosContainer>
  );
};
