import { fireEvent, render, screen } from "@testing-library/react";
import * as useGenerate from "../model/useGeneratePassword";
import GeneratePasswordButton from "./GeneratePasswordButton";

const useGeneratePasswordMock = vi.spyOn(useGenerate, "useGeneratePassword");

describe("GeneratePasswordButton", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });
  it("should be disabled when generateBtnAccess prop is false", () => {
    useGeneratePasswordMock.mockReturnValue({
      generateBtnAccess: false,
      handlePasswordGeneration: vi.fn(),
    });
    render(<GeneratePasswordButton />);
    expect(screen.getByRole("button")).toBeDisabled();
  });
  it("should be not disabled when generateBtnAccess prop is true", () => {
    useGeneratePasswordMock.mockReturnValue({
      generateBtnAccess: true,
      handlePasswordGeneration: vi.fn(),
    });
    render(<GeneratePasswordButton />);
    expect(screen.getByRole("button")).not.toBeDisabled();
  });
  it("should invoke handlePasswordGeneration function when user clicks", () => {
    const handlePasswordGenerationMock = vi.fn();
    useGeneratePasswordMock.mockReturnValue({
      generateBtnAccess: true,
      handlePasswordGeneration: handlePasswordGenerationMock,
    });
    render(<GeneratePasswordButton />);
    const elem = screen.getByRole("button");
    fireEvent.click(elem);
    expect(handlePasswordGenerationMock).toHaveBeenCalledOnce();
  });
});
