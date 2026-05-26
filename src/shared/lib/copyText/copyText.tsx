export async function copyText(text: string | null): Promise<void> {
  if (text) {
    await navigator.clipboard.writeText(text);
  }
}
