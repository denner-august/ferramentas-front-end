import { RenderImage } from "@/app/functions/renderImage";
import styles from "./layoutCursos.module.scss";
import { renderImageProps } from "@/app/types/renderImage";

interface layoutCursoPros extends renderImageProps {
  descrição: string;
  Link: string;
}

export const LayoutCurso = ({
  princialImage,
  BluerImage,
  alt,
  descrição,
  Link,
}: layoutCursoPros) => {
  return (
    <div className={styles.Container}>
      <RenderImage
        princialImage={princialImage}
        BluerImage={BluerImage}
        alt={alt}
      />

      <p>{descrição}</p>

      <button>
        <a href={Link} target="_blank" rel="noopener noreferrer">
          Acessar
        </a>
      </button>
    </div>
  );
};
