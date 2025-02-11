import React from "react";

import Button from "../Button";

import styles from "./ToastPlayground.module.css";
//import Toast from "../Toast/Toast";
import ToastShelf from "../ToastShelf/ToastShelf";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [variant, setVariant] = React.useState();
  const [message, setMessage] = React.useState();

  const [toastArray, setToastArray] = React.useState([
    {
      variant: "notice",
      text: "Example notice toast",
    },
    {
      variant: "error",
      text: "Example error toast",
    },
  ]);

  console.log(toastArray);

  function onToastSelect(toastId) {
    console.log(toastId);
    const newArray = toastArray.filter((_, index) => index !== toastId);
    setToastArray(newArray);
  }

  function createNewToast() {
    setToastArray([...toastArray, { variant: variant, text: message }]);
    setMessage("");
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf toastArray={toastArray} onToastSelect={onToastSelect} />

      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              id="message"
              className={styles.messageInput}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label}>Variant</div>
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            {VARIANT_OPTIONS.map((item, index) => {
              return (
                <label htmlFor={`variant-${item}`} key={`variant-${item}`}>
                  <input
                    id={`variant-${item}`}
                    type="radio"
                    name="variant"
                    value={item}
                    onClick={() => {
                      setVariant(item);
                    }}
                  />
                  {item}
                </label>
              );
            })}
            {/* TODO Other Variant radio buttons here */}
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button onClick={() => createNewToast()}>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ToastPlayground;
