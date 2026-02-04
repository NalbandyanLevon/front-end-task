import { useEffect, useState } from "react";
import { fetchProducts } from "../api/products.api";
import type {
  Pagination,
  Product,
  ProductsFilters,
} from "../types/product.types";

export const useProducts = (filters: ProductsFilters) => {
  const [products, setProducts] = useState<Product[]>([]);
  const [pagination, setPagination] = useState<Pagination | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchProducts(filters)
      .then((res) => {
        setProducts(res.data);
        setPagination(res.pagination);
      })
      .finally(() => setLoading(false));
  }, [filters]);

  return { products, pagination, loading };
};
