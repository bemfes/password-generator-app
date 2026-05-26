import { renderHook } from "@testing-library/react";
import { useShowStrength } from "./useShowStrength";
import usePasswordStore from "@/entities/password/model";
import { act } from "react";

describe("useShowStrength", () => {
  beforeEach(() => {
    usePasswordStore.setState({
      password: null,
      length: "5",
      checkedUpperCase: true,
      checkedLowerCase: true,
      checkedNumbers: false,
      checkedSymbols: false,
    });
  });
  it("should return all values", () => {
    const { result } = renderHook(useShowStrength);
    expect(result.current.strength).toBe(2);
    expect(result.current.strengthLevel).toBe("WEAK");
  });
  it("should return medium strength level", () => {
    usePasswordStore.setState({ length: "12" });
    const { result } = renderHook(useShowStrength);
    expect(result.current.strength).toBe(3);
    expect(result.current.strengthLevel).toBe("MEDIUM");
  });
  it("should update password strength when store changes", () => {
    const { result } = renderHook(useShowStrength);
    expect(result.current.strength).toBe(2);
    expect(result.current.strengthLevel).toBe("WEAK");

    act(() => {
      usePasswordStore.setState({
        length: "15",
        checkedNumbers: true,
        checkedSymbols: true,
      });
    });
    expect(result.current.strength).toBe(4);
    expect(result.current.strengthLevel).toBe("HARD");
  });
});
