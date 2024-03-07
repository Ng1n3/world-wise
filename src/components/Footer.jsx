import styles from './Footer.module.css'

function Footer() {
  return (
    <div>
      <footer className={styles.footer}>
        <p className={styles.copyright}>
          &copy; Copyright {new Date().getFullYear()} by NG1N3
        </p>
      </footer>
    </div>
  );
}

export default Footer;
