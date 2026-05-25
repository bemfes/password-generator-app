import { fireEvent, render, screen } from "@testing-library/react";
import RangeInput from "./RangeInput";

const renderRangeInput = (props = {}) => {
  render(
    <RangeInput
      fullTrackColor="#A4FFAF"
      emptyTrackColor="#18171F"
      value="20"
      min="5"
      max="20"
      onChange={vi.fn()}
      className="range-input-box"
      labelText="Character length"
      id="range"
      {...props}
    />,
  );
};

describe("RangeInput", () => {
  it("should render range input", () => {
    renderRangeInput();
    expect(screen.getByRole("slider")).toBeInTheDocument();
  });
  it("should have label", () => {
    renderRangeInput();
    expect(screen.getByLabelText(/Character length/i)).toBeInTheDocument();
  });
  it("should have classname", () => {
    renderRangeInput();
    expect(screen.getByRole("slider").parentElement).toHaveClass(
      "range-input-box",
    );
  });
  it("should invoke onChange when user changes range input", () => {
    const onChange = vi.fn();
    renderRangeInput({ onChange });
    const elem = screen.getByRole("slider");
    fireEvent.change(elem, { target: { value: "10" } });
    expect(onChange).toHaveBeenCalledOnce();
  });
  it("should have max attribute", () => {
    renderRangeInput();
    expect(screen.getByRole("slider")).toHaveAttribute("max", "20");
  });
  it("should have min attribute", () => {
    renderRangeInput();
    expect(screen.getByRole("slider")).toHaveAttribute("min", "5");
  });
  it("should pass default value", () => {
    renderRangeInput();
    expect(screen.getByRole("slider")).toHaveValue("20");
  });
});
