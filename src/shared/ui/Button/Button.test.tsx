import { fireEvent, render, screen } from "@testing-library/react";
import Button from "./Button";

describe("Button", () => {
  it("should render button", () => {
    render(<Button onClick={vi.fn()}>Click</Button>);
    expect(screen.getByRole("button")).toBeInTheDocument();
  });
  it("should render button with children", () => {
    render(<Button onClick={vi.fn()}>Click</Button>);
    expect(screen.getByText(/click/i)).toBeInTheDocument();
  });
  it("should invoke onClick function when user clicks the button", () => {
    const onClick = vi.fn();
    render(<Button onClick={onClick}>Click</Button>);
    const elem = screen.getByRole("button");
    fireEvent.click(elem);
    expect(onClick).toHaveBeenCalledOnce();
  });
  it("should have classname", () => {
    render(
      <Button className="btn" onClick={vi.fn()}>
        Click
      </Button>,
    );
    expect(screen.getByRole("button")).toHaveClass("btn");
  });
  it("should be disabled, when the prop for disabled is true", () => {
    render(
      <Button disabled onClick={vi.fn()}>
        Click
      </Button>,
    );
    expect(screen.getByRole("button")).toBeDisabled();
  });
  it("should not invoke onClick function when the button is disabled", () => {
    const onClick = vi.fn();
    render(
      <Button disabled onClick={onClick}>
        Click
      </Button>,
    );
    const elem = screen.getByRole("button");
    fireEvent.click(elem);
    expect(onClick).not.toHaveBeenCalled();
  });
});
