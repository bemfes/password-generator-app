import { renderHook } from "@testing-library/react";
import { useGeneratePassword } from "./useGeneratePassword";
import usePasswordStore from "@/entities/password/model";
import * as generatePassword from "../lib/generatePassword";
import { act } from "react";

const generatePasswordMock = vi.spyOn(generatePassword, "generatePassword");

describe("useGeneratePassword", () => {
  beforeEach(() => {
    usePasswordStore.setState({
      password: null,
      length: "6",
      checkedUpperCase: true,
      checkedLowerCase: false,
      checkedNumbers: false,
      checkedSymbols: false,
    });
  });
  it("should return all values", () => {
    const { result } = renderHook(useGeneratePassword);

    expect(result.current).toHaveProperty("generateBtnAccess");
    expect(result.current).toHaveProperty("handlePasswordGeneration");
  });
  it("should return true for generateBtnAccess even when only one property is checked", () => {
    const { result } = renderHook(useGeneratePassword);
    expect(result.current.generateBtnAccess).toBe(true);
  });
  it("should return false for generateBtnAccess when no property is checked", () => {
    usePasswordStore.setState({ checkedUpperCase: false });
    const { result } = renderHook(useGeneratePassword);
    expect(result.current.generateBtnAccess).toBe(false);
  });
  it("shoul generate and set password", () => {
    generatePasswordMock.mockReturnValue("PASSED");

    const { result } = renderHook(useGeneratePassword);

    act(() => {
      result.current.handlePasswordGeneration();
    });

    expect(generatePasswordMock).toHaveBeenCalledWith({
      checkedUpperCase: true,
      checkedLowerCase: false,
      checkedNumbers: false,
      checkedSymbols: false,
      length: 6,
    });

    expect(usePasswordStore.getState().password).toBe("PASSED");
  });
});
