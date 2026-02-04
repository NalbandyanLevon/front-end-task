import React from "react";
import { ProductCard } from "../ProductCard/ProductCard";
import type { Product } from "@/features/products/types/product.types";

import styles from "./ProductsList.module.scss";

export const ProductsList: React.FC<{ products: Product[] }> = ({
  products,
}) => (
  <div className={styles.list}>
    {products.map((p) => (
      <ProductCard key={p.id} product={p} />
    ))}
  </div>
);
