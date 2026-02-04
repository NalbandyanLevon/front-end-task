import { http } from "@/shared/api/http";
import type {
  FiltersResponse,
  ProductsFilters,
  ProductsResponse,
} from "../types/product.types";

export const fetchProducts = async (
  params: ProductsFilters,
): Promise<ProductsResponse> => {
  const response = await http.get<ProductsResponse>("/products", { params });
  return response.data;
};

export const fetchFilters = async (): Promise<FiltersResponse> => {
  const response = await http.get<FiltersResponse>("/filters");
  return response.data;
};
