import React from "react";
import type { FilterSelectProps } from "@/features/products/types/product.types";

import styles from "./Filters.module.scss";

export const FilterSelect: React.FC<FilterSelectProps> = ({
  value,
  options,
  placeholder,
  onChange,
  isOpen,
  onToggle,
}) => {
  const selectOption = (option: string) => {
    onChange(option);
    onToggle();
  };

  return (
    <div className={styles.customSelect}>
      <div
        className={`${styles.selectHeader} ${isOpen ? styles.active : ""}`}
        onClick={onToggle}
      >
        <span className={styles.selectValue}>{value || placeholder}</span>
        <div
          className={`${styles.selectArrow} ${isOpen ? styles.rotated : ""}`}
        >
          ▼
        </div>
      </div>

      {isOpen && (
        <div className={styles.selectOptions}>
          <div
            className={`${styles.selectOption} ${!value ? styles.selected : ""}`}
            onClick={() => selectOption("")}
          >
            {placeholder}
          </div>
          {options.map((option) => (
            <div
              key={option}
              className={`${styles.selectOption} ${value === option ? styles.selected : ""}`}
              onClick={() => selectOption(option)}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
