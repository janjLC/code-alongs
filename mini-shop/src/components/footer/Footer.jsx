import styles from './Footer.module.css';

function Footer () {
    return (
        <footer id="footer" className={styles.footer}>
            <strong>GOODFORM.</strong>
            <nav className={styles.footerLinks} aria-label="Footer navigation">
                <a href='#about'>About</a>
                <span>Contact</span><span>Instagram</span>
                <span>&copy; 2026 GOODFORM</span>
            </nav>
        </footer>
    );

};

export default Footer;