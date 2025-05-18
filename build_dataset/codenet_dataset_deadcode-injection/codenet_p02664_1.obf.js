const a0_0x1e29ca = a0_0x28fa;
function Main(str) {
    const _0x493a09 = a0_0x28fa;
    let newString = '';
    for (let i = 0x0; i < str['length']; i++) {
        if (str[i] === '?' && (str[i - 0x1] && str[i - 0x1] === 'P' || str[i + 0x1] && str[i + 0x1] === 'P')) {
            newString = newString + 'D';
        } else if (str[i] == '?') {
            newString = newString + 'P';
        } else {
            newString = newString + str[i];
        }
    }
    console[_0x493a09(0x0)](newString);
}
let input = require('fs')['readFileSync'](a0_0x1e29ca(0x1), a0_0x1e29ca(0x2));
Main(input);
function a0_0x28fa(baKfTN, key) {
    const stringArray = a0_0x147a();
    a0_0x28fa = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x28fa(baKfTN, key);
}
function a0_0x147a() {
    const _0x2b0a17 = [
        'log',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x147a = function () {
        return _0x2b0a17;
    };
    return a0_0x147a();
}