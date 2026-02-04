import { renderHook } from "@testing-library/react";
import { useClickOutside } from "./useClickOutside";

describe("useClickOutside", () => {
  let callback: jest.Mock;

  beforeEach(() => {
    callback = jest.fn();
  });

  it("returns a ref", () => {
    const { result } = renderHook(() => useClickOutside(callback));
    expect(result.current).toBeDefined();
    expect(result.current.current).toBeNull();
  });

  it("attaches event listener", () => {
    const { result, unmount } = renderHook(() => useClickOutside(callback));

    const div = document.createElement("div");
    document.body.appendChild(div);
    (result.current as React.RefObject<HTMLDivElement>).current = div;

    const event = new MouseEvent("mousedown");
    document.dispatchEvent(event);

    unmount();
  });
});
