function a0_0x5039() {
    var _0x483e52 = [
        'round',
        'sqrt',
        'readFileSync',
        'trim',
        'shift',
        'log'
    ];
    a0_0x5039 = function () {
        return _0x483e52;
    };
    return a0_0x5039();
}
var a0_0x3c59cc = a0_0x59f4;
function isPrime(num) {
    var _0x5a5060 = a0_0x59f4;
    if (num == 0x2 || num == 0x3)
        return !![];
    if (num < 0x2 || num % 0x2 == 0x0 || num % 0x3 == 0x0)
        return ![];
    var limit = Math[_0x5a5060(0x0)](Math[_0x5a5060(0x1)](num));
    var i = 0x1;
    while (i * 0x6 - 0x1 <= limit) {
        if (num % (i * 0x6 - 0x1) == 0x0 || num % (i * 0x6 + 0x1) == 0x0)
            return ![];
        i++;
    }
    return !![];
}
function a0_0x59f4(SFIHIr, key) {
    var stringArray = a0_0x5039();
    a0_0x59f4 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x59f4(SFIHIr, key);
}
var input = require('fs')[a0_0x3c59cc(0x2)]('/dev/stdin', 'utf8');
var lines = input[a0_0x3c59cc(0x3)]()['split']('\x0a');
var line;
while (line = lines[a0_0x3c59cc(0x4)]()) {
    var num = +line;
    var mp;
    var lp;
    if (num == 0x3)
        mp = 0x2;
    var i = 0x3;
    while (!![]) {
        if (isPrime(i) && i < num) {
            mp = i;
        }
        if (isPrime(i) && i > num) {
            lp = i;
            break;
        }
        i += 0x2;
    }
    console[a0_0x3c59cc(0x5)](mp, lp);
}