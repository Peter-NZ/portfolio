import React from "react";
import styles from "./Divider.module.scss";
import clsx from "clsx";

const Divider = ({ children }) => {
  return (
    <div className={styles["divider"]}>
      <span className={clsx(["heading-secondary", styles['title']])}>{children}</span>
    </div>
  );
};

export default Divider;
