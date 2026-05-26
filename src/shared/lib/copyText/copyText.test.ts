import { copyText } from "./copyText";

describe("copyText function", () => {
  const mockWriteText = vi.fn();
  beforeEach(() => {
    vi.clearAllMocks();
    Object.assign(navigator, {
      clipboard: {
        writeText: mockWriteText,
      },
    });
  });
  it("should call navigator.writeTest with text when function passes text", async () => {
    await copyText("text");
    expect(mockWriteText).toHaveBeenCalledWith("text");
  });
  it("should not call navigator.writeTest when function passes null", async () => {
    await copyText(null);
    expect(mockWriteText).not.toHaveBeenCalled();
  });
});
