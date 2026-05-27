import { render, screen } from "@testing-library/react";
import PasswordGenerator from "./PasswordGenerator";
import usePasswordStore from "@/entities/password/model";

describe("Password Generator", () => {
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
  it("should render the title", () => {
    render(<PasswordGenerator />);
    expect(screen.getByText(/password generator/i)).toBeInTheDocument();
  });
  it("should render password placeholder when there is no generated password", () => {
    render(<PasswordGenerator />);
    expect(screen.getByText(/Password\.\.\./i)).toBeInTheDocument();
  });
  it("should render password when there is generated password", () => {
    usePasswordStore.setState({ password: "PASSED" });
    render(<PasswordGenerator />);
    expect(screen.getByText(/PASSED/i)).toBeInTheDocument();
  });
});
