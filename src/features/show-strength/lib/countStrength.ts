export function countStrength(
  checkedProperties: boolean[],
  length: string,
): number {
  const checkedPropertiesLength = checkedProperties.filter(Boolean).length;
  if (checkedPropertiesLength === 1) {
    return 1;
  }
  if (
    (checkedPropertiesLength === 2 || checkedPropertiesLength === 3) &&
    Number(length) < 10
  ) {
    return 2;
  }
  if (
    ((checkedPropertiesLength === 3 || checkedPropertiesLength === 2) &&
      Number(length) >= 10) ||
    (checkedPropertiesLength === 4 && Number(length) < 10)
  ) {
    return 3;
  }
  if (checkedPropertiesLength === 4 && Number(length) >= 10) {
    return 4;
  }
  return 0;
}
