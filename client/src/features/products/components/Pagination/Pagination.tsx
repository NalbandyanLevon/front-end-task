import React from "react";
import type { Pagination } from "@features/products/types/product.types";

import styles from "./Pagination.module.scss";

interface Props {
  pagination: Pagination;
  onChange: (page: number) => void;
}

export const PaginationComponent: React.FC<Props> = ({
  pagination,
  onChange,
}) => {
  const pages = Array.from({ length: pagination.totalPages }, (_, i) => i + 1);

  return (
    <div className={styles.pagination}>
      {pages.map((p) => (
        <button
          key={p}
          onClick={() => onChange(p)}
          className={p === pagination.page ? styles.active : ""}
        >
          {p}
        </button>
      ))}
    </div>
  );
};
