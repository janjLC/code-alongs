import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer';
import ProductCard from '../../components/productCard/ProductCard';
import styles from './Home.module.css';
import * as productService from '../../services/productService'

const products = await productService.getProducts();


function Home() {
    return (
    <div id="home" className={styles.shell}> 
        <Header/>
        <main>
            <section className={styles.hero} aria-labelledby="hero-heading">
            <div className={styles.heroText} >
            <div className={styles.overline}>THE GOODFORM EDIT &bull; 2026</div>
            <h1 id="hero-heading">LESS<br />ORDINARY.<br />MORE YOU.</h1>
            <p className={styles.heroP}>The little things that make everyday life feel anything but everyday.</p>
            <a className={styles.primary} href="#discover">EXPLORE THE EDIT &nbsp; ↗</a>
            </div>
            <div className={styles.heroPhoto} data-class="hero-photo">
          <img src="https://images.unsplash.com/photo-1773000129212-3546d5e083cd?auto=format&amp;fit=crop&amp;fm=jpg&amp;ixid=NHwxMjA3fDA%3D&amp;ixlib=rb-4.1.0&amp;q=60&amp;w=3000" alt="Photograph of skincare products on orange display steps" />
        </div>
      </section>
      <section className={styles.products} id="discover" aria-labelledby="products-heading">
        <div className={styles.eyebrow}>CURATED FOR YOU / 001</div>
        <div className={styles.heading}>
          <h2 id="products-heading">Things we're into.</h2>
          <a href="#collection">THE COLLECTION &#8599;</a>
        </div>
        <ul className={styles.grid} id="collection">
            {products.map((product, index) => index < 6 && (
                <ProductCard key={product.id} product={product}/>
            )) }
        </ul>
        </section>
         <section className={styles.cta} aria-labelledby="cta-heading">
        <h2 id="cta-heading">MAKE ROOM FOR<br />SOMETHING GOOD.</h2>
        <a className={styles.darkButton} href="#discover">DISCOVER MORE &#8599;</a>
      </section>
      </main>
      <Footer/>

    </div>
    )
}
export default Home;
