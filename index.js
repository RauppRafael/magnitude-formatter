module.exports = (num, digits) => {
    const orders = [
        { value: 1, symbol: '' },
        { value: 1E3, symbol: 'k' },
        { value: 1E6, symbol: 'M' },
        { value: 1E9, symbol: 'B' },
        { value: 1E12, symbol: 'T' },
    ]
    const regex = /\.0+$|(\.[0-9]*[1-9])0+$/
    let i

    for (i = orders.length - 1; i > 0; i--) {
        if (num >= orders[i].value) {
            break
        }
    }

    return (num / orders[i].value).toFixed(digits).replace(regex, '$1') + orders[i].symbol
}
