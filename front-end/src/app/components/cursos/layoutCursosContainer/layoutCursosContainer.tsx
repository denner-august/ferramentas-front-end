import { PropsWithChildren } from "react";
import styles from "./layoutCursosContainer.module.scss";

export const LayoutCursosContainer: React.FC<PropsWithChildren> = ({
  children,
}) => {
  return (
    <div className={styles.Container}>
      <p>Playlist para seu Desenvolvimento</p>

      <div>{children}</div>
    </div>
  );
};
