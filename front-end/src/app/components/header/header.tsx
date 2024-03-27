import styles from "./header.module.scss";
import { RenderLinks } from "@/app/functions/renderLinks";

export function Header() {
  return (
    <header className={styles.header}>
      <h1>Ferramentas front-end</h1>
      <ul>
        <RenderLinks
          link="https://github.com/denner-august"
          nomeLink="Github"
        />
        <RenderLinks
          link="https://www.linkedin.com/in/denner-bernardes/"
          nomeLink="Linkedin"
        />
        <RenderLinks
          link="https://denner-portfolio.vercel.app/"
          nomeLink="Portfolio"
        />
      </ul>
    </header>
  );
}
