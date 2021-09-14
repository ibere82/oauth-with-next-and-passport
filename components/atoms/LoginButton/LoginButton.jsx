import styles from './loginButton.module.css';

export default function LoginButton({ icon, label, provider, handle }) {
  return (
    <button
      className={styles.container}
      onClick={() => handle(provider)}
    >
      <div className={styles.labelIconWrapper}>
        <img className={styles.icon} src={icon} alt={label} />
        <span className={styles.label}>{label}</span>
      </div>
    </button>
  );
};
