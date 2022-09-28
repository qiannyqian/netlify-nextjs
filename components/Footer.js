import styles from './Footer.module.css';
import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        Made with{' '}
        <img src="/netliheart.svg" alt="Netlify Logo" className={styles.logo} />{' '}
        by Qian | <Link href="/">Home</Link>
      </footer>
    </>
  );
}
