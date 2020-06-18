export  const requiredField = value => {
    if (value && value.length > 0) return undefined
    return "This field is required"
}

export  const maxLengthCreator = maxLength => value => {
    if (value && value.length > maxLength) return `Max length ${maxLength}`
    return undefined

}