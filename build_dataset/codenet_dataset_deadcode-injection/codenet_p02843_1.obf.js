function a0_0x472b(xEWlrm, key) {
    var stringArray = a0_0x33d5();
    a0_0x472b = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x472b(xEWlrm, key);
}
var a0_0x361819 = a0_0x472b;
function Main(input) {
    var _0x229917 = a0_0x472b;
    const n = input[_0x229917(0x0)]('\x0a')[0x0];
    var ans = 0x0;
    if (n >= 0x9dd) {
        ans = 0x1;
        console['log'](ans);
    } else {
        for (var i = 0x1; i <= 0x19; i++) {
            if (n >= i * 0x65 && n <= i * 0x69) {
                ans = 0x1;
                break;
            }
        }
    }
    console[_0x229917(0x1)](ans);
}
function a0_0x33d5() {
    var _0x2fa1e5 = [
        'split',
        'log',
        'readFileSync',
        'utf8'
    ];
    a0_0x33d5 = function () {
        return _0x2fa1e5;
    };
    return a0_0x33d5();
}
Main(require('fs')[a0_0x361819(0x2)]('/dev/stdin', a0_0x361819(0x3)));