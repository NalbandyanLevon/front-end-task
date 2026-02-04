export interface Product {
  id: number;
  name: string;
  category: string;
  brand: string;
  price: number;
  rating: number;
  imageUrl: string;
}

export interface Pagination {
  page: number;
  limit: number;
  total: number;
  totalPages: number;
}

export interface ProductsResponse {
  data: Product[];
  pagination: Pagination;
}

export interface ProductsFilters {
  category?: string;
  brand?: string;
  minPrice?: number;
  maxPrice?: number;
  minRating?: number;
  page?: number;
  limit?: number;
}
export interface FiltersResponse {
  categories: string[];
  brands: string[];
  minPrice: number;
  maxPrice: number;
  minRating: number;
  maxRating: number;
}
export interface FiltersProps {
  onChange: (filters: ProductsFilters) => void;
}

export type SelectType = "category" | "brand";

export interface FilterOption {
  value: string;
  label: string;
}

export interface FilterSelectProps {
  value: string;
  options: string[];
  placeholder: string;
  onChange: (value: string) => void;
  isOpen: boolean;
  onToggle: () => void;
}
