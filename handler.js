// write your lambda here
export const reverser = (stringToReverse) => {
    const reversed = stringToReverse.reverse()
    return {
        payload: reversed,
        message: "Thank you for using the reverser!",
    }
}
