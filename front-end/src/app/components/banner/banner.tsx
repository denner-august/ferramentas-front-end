import styles from "./banner.module.scss";
import PrincipalImage from "@/../public/image/principal/header.jpg";
import { RenderImage } from "@/app/functions/renderImage";

export function Banner() {
  return (
    <div className={styles.Container}>
      <div className={styles.apresenta}>
        <h1>
          Melhore suas habilidades de codificação de front-end criando projetos
          reais
        </h1>

        <p>
          Resolva desafios reais de HTML, CSS e JavaScript enquanto trabalha com
          designs profissionais. Aqui você Encontrara diversos projetos de
          diferentes niveis para Praticar e melhorar ainda mais seu nivel de
          codificação
        </p>
      </div>

      <figure>
        <RenderImage
          princialImage={PrincipalImage}
          alt="comom podemos te ajudar"
          BluerImage={`${PrincipalImage}`}
        />
      </figure>
    </div>
  );
}
