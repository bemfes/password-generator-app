import { countStrength } from "./countStrength";

describe("countStrength function", () => {
  it("should return 0 when amount of checkedProperties is 0", () => {
    const result = countStrength([false, false, false, false], "5");
    expect(result).toBe(0);
  });
  it("should return 1 when amount of checkedProperties is 1", () => {
    const result = countStrength([false, false, false, true], "5");
    expect(result).toBe(1);
  });
  it("should return 2 when amount of checkedProperties is 2 and length is less than 10", () => {
    const result = countStrength([false, false, true, true], "5");
    expect(result).toBe(2);
  });
  it("should return 2 when amount of checkedProperties is 3 and length is less than 10", () => {
    const result = countStrength([false, true, true, true], "5");
    expect(result).toBe(2);
  });
  it("should return 3 when amount of checkedProperties is 2 and length is greater than 10", () => {
    const result = countStrength([false, false, true, true], "11");
    expect(result).toBe(3);
  });
  it("should return 3 when amount of checkedProperties is 3 and length is greater than 10", () => {
    const result = countStrength([false, true, true, true], "11");
    expect(result).toBe(3);
  });
  it("should return 3 when amount of checkedProperties is 4 and length is less than 10", () => {
    const result = countStrength([true, true, true, true], "8");
    expect(result).toBe(3);
  });
  it("should return 4 when amount of checkedProperties is 4 and length is greater than 10", () => {
    const result = countStrength([true, true, true, true], "12");
    expect(result).toBe(4);
  });
});
