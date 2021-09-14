import styles from './profileArea.module.css';

export default function ProfileArea({ icon, alt, handle, buttonLabel, bottomText, buttonEnabled}) {
  return (
    <div className={styles.container}>
      <div className={styles.topperArea}>
        <img
          className={styles.image}
          src={icon}
          alt={alt}
        ></img>
        <button
          disabled={!buttonEnabled}
          onClick={handle}
          className={styles.button}
        >{buttonLabel}
        </button>
      </div>
      <p className={styles.bottomText}>{bottomText}</p>
    </div>
  );
};
