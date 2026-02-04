import { useCallback, useState } from "react";
import type { ProductsFilters } from "../types/product.types";

export const useFiltersState = (initialFilters: ProductsFilters = {}) => {
  const [filters, setFilters] = useState<ProductsFilters>(initialFilters);

  const updateFilter = useCallback(
    (key: keyof ProductsFilters, value: string | number) => {
      const newFilters = { ...filters, [key]: value };
      setFilters(newFilters);
      return newFilters;
    },
    [filters],
  );

  const resetFilters = useCallback(() => {
    setFilters({});
  }, []);

  return {
    filters,
    updateFilter,
    resetFilters,
  };
};
