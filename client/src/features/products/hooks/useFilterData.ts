import { useEffect, useState } from "react";
import type { FiltersResponse } from "../types/product.types";
import { fetchFilters } from "../api/products.api";

export const useFiltersData = () => {
  const [data, setData] = useState<FiltersResponse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchFilters()
      .then(setData)
      .finally(() => setLoading(false));
  }, []);

  return { data, loading };
};
