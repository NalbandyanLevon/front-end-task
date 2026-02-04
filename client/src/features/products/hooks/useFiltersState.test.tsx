import { renderHook, act } from "@testing-library/react";
import { useFiltersState } from "./useFiltersState";

describe("useFiltersState", () => {
  it("initializes with empty object", () => {
    const { result } = renderHook(() => useFiltersState());
    expect(result.current.filters).toEqual({});
  });

  it("updates filter value", () => {
    const { result } = renderHook(() => useFiltersState());

    act(() => {
      result.current.updateFilter("category", "Electronics");
    });

    expect(result.current.filters).toEqual({ category: "Electronics" });
  });

  it("updates filters state correctly", () => {
    const { result } = renderHook(() => useFiltersState());

    act(() => {
      result.current.updateFilter("minPrice", 100);
    });

    expect(result.current.filters).toEqual({ minPrice: 100 });
  });

  it("resets all filters", () => {
    const initial = { category: "Test" };
    const { result } = renderHook(() => useFiltersState(initial));

    act(() => {
      result.current.updateFilter("minPrice", 100);
      result.current.resetFilters();
    });

    expect(result.current.filters).toEqual({});
  });
});
