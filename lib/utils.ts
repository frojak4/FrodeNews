export const CheckIfPosted = (date: Date) => {
    const now = new Date(Date.now())

    if (now > date) {
        return true
    } else {
        return false
    }

}