import React, { useState } from "react";
import { useProducts } from "@/features/products/hooks/useProducts";
import { ProductsList } from "@/features/products/components/ProductsList/ProductsList";
import { Filters } from "@/features/products/components/Filters/Filters";
import { PaginationComponent } from "@/features/products/components/Pagination/Pagination";
import Loader from "@/shared/ui/Loader/Loader";
import type { ProductsFilters } from "@/features/products/types/product.types";

import styles from "./ProductsPage.module.scss";

export const ProductsPage: React.FC = () => {
  const [filters, setFilters] = useState<ProductsFilters>({
    page: 1,
    limit: 10,
  });
  const { products, pagination, loading } = useProducts(filters);

  return (
    <div className={styles.page}>
      <Filters
        onChange={(newFilters) =>
          setFilters({ ...filters, ...newFilters, page: 1 })
        }
      />
      {loading ? <Loader /> : <ProductsList products={products} />}
      {pagination && (
        <PaginationComponent
          pagination={pagination}
          onChange={(page) => setFilters({ ...filters, page })}
        />
      )}
    </div>
  );
};
