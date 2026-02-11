export const strengthLevels: Record<number, string> = {
    0: '',
    1: 'VERY WEAK',
    2: 'WEAK',
    3: 'MEDIUM',
    4: 'HARD'
}

export function countStrength(checkedProperties: boolean[], length: string): number {
    if (checkedProperties.filter(Boolean).length === 1) {
        return 1
    }
    if ((checkedProperties.filter(Boolean).length === 2 || checkedProperties.filter(Boolean).length === 3)
            && Number(length) < 10 ) {
        return 2
    }
    if (((checkedProperties.filter(Boolean).length === 3 || checkedProperties.filter(Boolean).length === 2)
            && Number(length) >= 10)
        || (checkedProperties.every(Boolean) && Number(length) < 10)
    ) {
        return 3
    }
    if (checkedProperties.every(Boolean) && Number(length) >= 10) {
        return 4
    }
    return 0
}