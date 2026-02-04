import React from "react";
import type {
  FiltersResponse,
  ProductsFilters,
} from "@/features/products/types/product.types";

import styles from "./Filters.module.scss";

interface FilterInputsProps {
  filters: ProductsFilters;
  options: FiltersResponse | null;
  onChange: (key: keyof ProductsFilters, value: number) => void;
}

export const FilterInputs: React.FC<FilterInputsProps> = ({
  filters,
  options,
  onChange,
}) => (
  <>
    <div className={styles.priceRange}>
      <div className={styles.inputGroup}>
        <label>Min price</label>
        <input
          type="number"
          placeholder={options?.minPrice?.toString() || ""}
          value={filters.minPrice || ""}
          onChange={(e) => onChange("minPrice", Number(e.target.value))}
          className={styles.numberInput}
        />
      </div>
      <div className={styles.inputGroup}>
        <label>Max price</label>
        <input
          type="number"
          placeholder={options?.maxPrice?.toString() || ""}
          value={filters.maxPrice || ""}
          onChange={(e) => onChange("maxPrice", Number(e.target.value))}
          className={styles.numberInput}
        />
      </div>
    </div>

    <div className={styles.ratingInput}>
      <label>Min rating</label>
      <input
        type="number"
        placeholder={options?.minRating?.toString() || ""}
        step="0.1"
        value={filters.minRating || ""}
        onChange={(e) => onChange("minRating", Number(e.target.value))}
        className={styles.numberInput}
      />
    </div>
  </>
);
