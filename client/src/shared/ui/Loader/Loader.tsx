import React from "react";

import styles from "./Loader.module.scss";

const Loader: React.FC = () => {
  return (
    <div className={styles.loaderWrapper}>
      <div className={styles.spinner}></div>
      <span>Loading...</span>
    </div>
  );
};

export default Loader;
