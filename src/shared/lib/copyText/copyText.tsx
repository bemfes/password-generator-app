export function copyText(text: string | null): void {
  if (text) {
    navigator.clipboard.writeText(text);
  }
}
