export function copyText(text: string): void {
        if (text) {
            navigator.clipboard.writeText(text)
        }
}

