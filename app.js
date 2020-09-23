function isValid(number) {
    var val;
    var bit = 1;
    var sum = 0;
    var len = numeroCartao.length;
    var arr = [0, 2, 4, 6, 8, 1, 3, 5, 7, 9];

    while (len) {
        val = parseInt(number.charAt(--len), 10);
        sum += (bit ^= 1) ? arr[val] : val;
    }

    return sum && sum % 10 === 0;
}

module.exports = isValid;
