import { render, screen } from "@testing-library/react";
import ShowStrength from "./ShowStrength";
import * as hook from "../model/useShowStrength";

const useShowStrengthMock = vi.spyOn(hook, "useShowStrength");

describe("ShowStrength", () => {
  beforeEach(() => {
    vi.clearAllMocks();
  });
  it("should render strength title", () => {
    render(<ShowStrength />);
    expect(screen.getByText(/strength/i)).toBeInTheDocument();
  });
  it("should render correct strength level", () => {
    useShowStrengthMock.mockReturnValue({
      strength: 3,
      strengthLevel: "MEDIUM",
    });
    render(<ShowStrength />);
    expect(screen.getByText(/medium/i)).toBeInTheDocument();
  });
  it("should render correct classname based on strength", () => {
    useShowStrengthMock.mockReturnValue({
      strength: 4,
      strengthLevel: "HARD",
    });
    const { container } = render(<ShowStrength />);
    expect(
      container.querySelector(".show-strength-cols-4"),
    ).toBeInTheDocument();
  });
});
