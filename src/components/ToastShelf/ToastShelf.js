import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toastArray, onToastSelect }) {
  return (
    <ol className={styles.wrapper}>
      {toastArray.map((item, index) => {
        return (
          <li key={index} className={styles.toastWrapper}>
            <Toast
              variant={item.variant}
              text={item.text}
              id={index}
              onClose={onToastSelect}
            />
          </li>
        );
      })}
    </ol>
  );
}

export default ToastShelf;
