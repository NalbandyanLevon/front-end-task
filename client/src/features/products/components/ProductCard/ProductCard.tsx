import React from "react";
import type { Product } from "@/features/products/types/product.types";

import styles from "./ProductCard.module.scss";

export const ProductCard: React.FC<{ product: Product }> = ({ product }) => (
  <div className={styles.card}>
    <img src={product.imageUrl} alt={product.name} />
    <h3>{product.name}</h3>
    <p>{product.brand}</p>
    <p>${product.price}</p>
    <p>⭐ {product.rating}</p>
  </div>
);
