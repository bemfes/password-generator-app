import { fireEvent, render, screen } from "@testing-library/react";
import CheckBox from "./CheckBox";

const renderCheckBox = (props = {}) => {
  render(
    <CheckBox
      onChange={vi.fn()}
      checked
      labelText="Choose age"
      className="green"
      id="age"
      {...props}
    />,
  );
};

describe("CheckBox", () => {
  it("should render checkbox", () => {
    renderCheckBox();
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });
  it("should have label", () => {
    renderCheckBox();
    expect(screen.getByLabelText(/Choose age/i)).toBeInTheDocument();
  });
  it("should invoke onChange when user clicks checkbox", () => {
    const onChange = vi.fn();
    renderCheckBox({ onChange });
    const elem = screen.getByRole("checkbox");
    fireEvent.click(elem);
    expect(onChange).toHaveBeenCalledOnce();
  });
  it("should be checked when checked prop is true", () => {
    renderCheckBox();
    expect(screen.getByRole("checkbox")).toBeChecked();
  });
  it("should not be checked when checked prop is false", () => {
    renderCheckBox({ checked: false });
    expect(screen.getByRole("checkbox")).not.toBeChecked();
  });
  it("should have classname", () => {
    renderCheckBox();
    expect(screen.getByRole("checkbox").parentElement).toHaveClass("green");
  });
});
