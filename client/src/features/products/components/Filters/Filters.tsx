import { useCallback, useState } from "react";
import { useFiltersData } from "@/features/products/hooks/useFilterData";
import { useFiltersState } from "@features/products/hooks/useFiltersState";
import type {
  FiltersProps,
  ProductsFilters,
} from "@features/products/types/product.types";
import { useClickOutside } from "@features/products/hooks/useClickOutside";
import { FilterSelect } from "./FilterSelect";
import { FilterInputs } from "./FilterInputs";

import styles from "./Filters.module.scss";

export const Filters: React.FC<FiltersProps> = ({ onChange }) => {
  const { data: options } = useFiltersData();
  const { filters, updateFilter } = useFiltersState();
  const [openSelect, setOpenSelect] = useState<"category" | "brand" | null>(
    null,
  );
  const selectRef = useClickOutside(() => setOpenSelect(null));

  const handleSelectToggle = useCallback((type: "category" | "brand") => {
    setOpenSelect((prev) => (prev === type ? null : type));
  }, []);

  const handleFilterChange = useCallback(
    (key: keyof ProductsFilters, value: string | number) => {
      const newFilters = updateFilter(key, value);
      onChange(newFilters);
    },
    [updateFilter, onChange],
  );

  return (
    <div className={styles.filters} ref={selectRef}>
      <div className={styles.filterGroup}>
        <FilterSelect
          value={filters.category as string}
          options={options?.categories || []}
          placeholder="All categories"
          isOpen={openSelect === "category"}
          onToggle={() => handleSelectToggle("category")}
          onChange={(value) => handleFilterChange("category", value)}
        />

        <FilterSelect
          value={filters.brand as string}
          options={options?.brands || []}
          placeholder="All brands"
          isOpen={openSelect === "brand"}
          onToggle={() => handleSelectToggle("brand")}
          onChange={(value) => handleFilterChange("brand", value)}
        />
      </div>

      <FilterInputs
        filters={filters}
        options={options}
        onChange={handleFilterChange}
      />
    </div>
  );
};
