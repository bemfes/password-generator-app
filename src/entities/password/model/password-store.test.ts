import usePasswordStore from "./password-store";

describe("Password store", () => {
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
  it("should have default values", () => {
    const state = usePasswordStore.getState();

    expect(state.password).toBeNull();
    expect(state.length).toBe("5");
    expect(state.checkedUpperCase).toBe(false);
    expect(state.checkedLowerCase).toBe(false);
    expect(state.checkedNumbers).toBe(false);
    expect(state.checkedSymbols).toBe(false);
  });
  it("should change the password", () => {
    expect(usePasswordStore.getState().password).toBeNull();
    usePasswordStore.getState().setPassword("123");
    expect(usePasswordStore.getState().password).toBe("123");
  });
  it("should change the length", () => {
    expect(usePasswordStore.getState().length).toBe("5");
    usePasswordStore.getState().changeLength("10");
    expect(usePasswordStore.getState().length).toBe("10");
  });
  it("should change the checkedUpperCase", () => {
    expect(usePasswordStore.getState().checkedUpperCase).toBe(false);
    usePasswordStore.getState().changeUpperCase();
    expect(usePasswordStore.getState().checkedUpperCase).toBe(true);
  });
  it("should change the checkedLowerCase", () => {
    expect(usePasswordStore.getState().checkedLowerCase).toBe(false);
    usePasswordStore.getState().changeLowerCase();
    expect(usePasswordStore.getState().checkedLowerCase).toBe(true);
  });
  it("should change the checkedNumbers", () => {
    expect(usePasswordStore.getState().checkedNumbers).toBe(false);
    usePasswordStore.getState().changeNumbers();
    expect(usePasswordStore.getState().checkedNumbers).toBe(true);
  });
  it("should change the checkedSymbols", () => {
    expect(usePasswordStore.getState().checkedSymbols).toBe(false);
    usePasswordStore.getState().changeSymbols();
    expect(usePasswordStore.getState().checkedSymbols).toBe(true);
  });
});
