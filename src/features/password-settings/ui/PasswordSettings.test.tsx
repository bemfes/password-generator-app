import usePasswordStore from "@/entities/password/model";
import { fireEvent, render, screen } from "@testing-library/react";
import PasswordSettings from "./PasswordSettings";

describe("Password Settings", () => {
  beforeEach(() => {
    usePasswordStore.setState({
      password: null,
      length: "5",
      checkedUpperCase: false,
      checkedLowerCase: false,
      checkedNumbers: false,
      checkedSymbols: false,
    });
  });
  it("should have range input", () => {
    render(<PasswordSettings />);
    expect(screen.getByRole("slider")).toBeInTheDocument();
  });
  it("should have checkbox for upper case", () => {
    render(<PasswordSettings />);
    expect(
      screen.getByLabelText(/Include Uppercase Letters/i),
    ).toBeInTheDocument();
  });
  it("should have checkbox for lower case", () => {
    render(<PasswordSettings />);
    expect(
      screen.getByLabelText(/Include Lowercase Letters/i),
    ).toBeInTheDocument();
  });
  it("should have checkbox for numbers", () => {
    render(<PasswordSettings />);
    expect(screen.getByLabelText(/Include Numbers/i)).toBeInTheDocument();
  });
  it("should have checkbox for symbols", () => {
    render(<PasswordSettings />);
    expect(screen.getByLabelText(/Include Symbols/i)).toBeInTheDocument();
  });
  it("should change the upper case checkbox", () => {
    render(<PasswordSettings />);
    const checkbox = screen.getByLabelText(/Include Uppercase Letters/i);

    expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox);

    expect(checkbox).toBeChecked();
  });
  it("should change the lower case checkbox", () => {
    render(<PasswordSettings />);
    const checkbox = screen.getByLabelText(/Include Lowercase Letters/i);

    expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox);

    expect(checkbox).toBeChecked();
  });
  it("should change the numbers checkbox", () => {
    render(<PasswordSettings />);
    const checkbox = screen.getByLabelText(/Include Numbers/i);

    expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox);

    expect(checkbox).toBeChecked();
  });
  it("should change the symbols checkbox", () => {
    render(<PasswordSettings />);
    const checkbox = screen.getByLabelText(/Include Symbols/i);

    expect(checkbox).not.toBeChecked();

    fireEvent.click(checkbox);

    expect(checkbox).toBeChecked();
  });
  it("should change the length", () => {
    render(<PasswordSettings />);
    const rangeInput = screen.getByRole("slider");

    expect(rangeInput).toHaveValue("5");

    fireEvent.change(rangeInput, { target: { value: "15" } });

    expect(rangeInput).toHaveValue("15");
  });
});
