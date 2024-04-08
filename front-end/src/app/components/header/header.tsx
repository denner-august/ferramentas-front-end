"use client";
import styles from "./header.module.scss";
import { RenderLinks } from "@/app/functions/renderLinks";
import { useEffect } from "react";
import { toast } from "react-toastify";

export function Header() {
  useEffect(() => {
    toast("Este projeto ainda está em desenvolvimento", {
      position: "top-right",
      autoClose: 10000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  });

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
