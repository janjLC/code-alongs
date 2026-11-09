import styles from './ProductCard.module.css'

function ProductCard({ product }) {
  return (
    <li>
      <div className={styles.productImage}>
        <img
        src={product.image}
        alt={product.name}
        />
      </div>
      <div className={styles.cardTag}>
          {product.category}
      </div>
      <div className={styles.cardName}>
          {product.name}
      </div>
    </li>
  )
}

export default ProductCard