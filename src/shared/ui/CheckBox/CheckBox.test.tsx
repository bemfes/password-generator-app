import { fireEvent, render, screen } from "@testing-library/react";
import CheckBox from "./CheckBox";

describe("CheckBox", () => {
  it("should render checkbox", () => {
    render(
      <CheckBox
        onChange={vi.fn()}
        checked
        labelText="Choose age"
        className="green"
        id="age"
      />,
    );
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
  });
  it("should have label", () => {
    render(
      <CheckBox
        onChange={vi.fn()}
        checked
        labelText="Choose age"
        className="green"
        id="age"
      />,
    );
    expect(screen.getByLabelText(/Choose age/i)).toBeInTheDocument();
  });
  it("should invoke onChange when user clicks checkbox", () => {
    const onChange = vi.fn();
    render(
      <CheckBox
        onChange={onChange}
        checked
        labelText="Choose age"
        className="green"
        id="age"
      />,
    );
    const elem = screen.getByRole("checkbox");
    fireEvent.click(elem);
    expect(onChange).toHaveBeenCalledOnce();
  });
  it("should be checked when checked prop is true", () => {
    render(
      <CheckBox
        onChange={vi.fn()}
        checked
        labelText="Choose age"
        className="green"
        id="age"
      />,
    );
    expect(screen.getByRole("checkbox")).toBeChecked();
  });
  it("should not be checked when checked prop is false", () => {
    render(
      <CheckBox
        onChange={vi.fn()}
        checked={false}
        labelText="Choose age"
        className="green"
        id="age"
      />,
    );
    expect(screen.getByRole("checkbox")).not.toBeChecked();
  });
  it("should have classname", () => {
    render(
      <CheckBox
        onChange={vi.fn()}
        checked
        labelText="Choose age"
        className="green"
        id="age"
      />,
    );
    expect(screen.getByRole("checkbox").parentElement).toHaveClass("green");
  });
});
