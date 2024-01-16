const getDefaultValuesOfParams = (
    currentValue: string | Array<string> | undefined,
    validValues: Array<string>,
    defaultValue: string | Array<string>
): string | Array<string> => {
    if (currentValue && validValues.find((value) => value === currentValue)) return currentValue

    return defaultValue
}

export { getDefaultValuesOfParams }
