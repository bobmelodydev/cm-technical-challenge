// write your lambda here
const reverser = (stringToReverse) => {
    const reversed = stringToReverse.reverse()
    return {
        payload: reversed,
        message: "Thank you for using the reverser!",
    }
}

module.exports = reverser