'use strict';
function a0_0x3000() {
    const _0x5a4160 = [
        'length',
        'split',
        'substring',
        'substr',
        'log',
        'Yes',
        'utf8'
    ];
    a0_0x3000 = function () {
        return _0x5a4160;
    };
    return a0_0x3000();
}
function a0_0x2da0(PKbyZQ, key) {
    const stringArray = a0_0x3000();
    a0_0x2da0 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x2da0(PKbyZQ, key);
}
const a0_0x53c7d4 = a0_0x2da0;
const is_palindrome = s => {
    const _0x27195c = a0_0x2da0;
    let n = s[_0x27195c(0x0)];
    for (let i = 0x0; i < n; i++) {
        if (s[i] !== s[n - i - 0x1])
            return ![];
    }
    return !![];
};
const main = input => {
    const _0x1814d1 = a0_0x2da0;
    const spi = input[_0x1814d1(0x1)]('\x0a');
    const s = spi[0x0];
    const n = s[_0x1814d1(0x0)];
    if (is_palindrome(s) && is_palindrome(s[_0x1814d1(0x2)](0x0, (n - 0x1) / 0x2)) && is_palindrome(s[_0x1814d1(0x3)]((n + 0x3) / 0x2 - 0x1)))
        console[_0x1814d1(0x4)](_0x1814d1(0x5));
    else
        console[_0x1814d1(0x4)]('No');
};
main(require('fs')['readFileSync']('/dev/stdin', a0_0x53c7d4(0x6)));