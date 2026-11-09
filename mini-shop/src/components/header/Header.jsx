import styles from './Header.module.css'

function Header() {
  return (
      <header className={styles.nav}>
        <a className={styles.brand} href="#home" aria-label="Goodform home">GOODFORM
          <span className={styles.brandDot}>.</span>
        </a>
        <nav className={styles.links} aria-label="Main navigation">
          <a href="#home">Home</a>
          <a href="#discover">Discover</a>
          <a href="#about">About</a>
          <span className={styles.bag}>Bag (0)</span>
        </nav>
      </header>
  )
}

export default Header