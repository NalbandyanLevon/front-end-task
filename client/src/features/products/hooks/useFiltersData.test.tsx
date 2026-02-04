import { renderHook, waitFor } from "@testing-library/react";
import { useFiltersData } from "./useFilterData";

jest.mock("../api/products.api", () => ({
  fetchFilters: jest.fn(),
}));

import * as api from "../api/products.api";
const mockFetchFilters = api.fetchFilters as jest.Mock;

describe("useFiltersData", () => {
  beforeEach(() => {
    jest.clearAllMocks();
    mockFetchFilters.mockResolvedValue({});
  });

  it("starts loading", () => {
    const { result } = renderHook(() => useFiltersData());
    expect(result.current.loading).toBe(true);
  });

  it("loads success", async () => {
    mockFetchFilters.mockResolvedValue({
      categories: [],
      brands: [],
      minPrice: 0,
      maxPrice: 1000,
    });
    const { result } = renderHook(() => useFiltersData());
    await waitFor(() => expect(result.current.loading).toBe(false));
  });
});
