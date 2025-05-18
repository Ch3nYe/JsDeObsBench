var a0_0x37df51 = a0_0x1490;
var m = [
    -0x1,
    0x2,
    0x3,
    0x5,
    0x7,
    0xb,
    0xd
];
function p(n) {
    var _0x241664 = a0_0x1490;
    if (m[n])
        return m[n];
    var found = m[_0x241664(0x0)] - 0x1;
    var foundP = m[found];
    for (var i = foundP + 0x2;; i += 0x2) {
        if (isPrime(i)) {
            if ('fgGmF' !== _0x241664(0x1)) {
                found++;
                m[found] = i;
                if (found == n)
                    return i;
            } else {
                found++;
                m[found] = i;
                if (found == n)
                    return i;
            }
        }
    }
}
function isPrime(num) {
    var _0xbaffad = a0_0x1490;
    if (num % 0x3 == 0x0)
        return ![];
    var limit = Math[_0xbaffad(0x2)](Math[_0xbaffad(0x3)](num));
    var i = 0x1;
    while (i * 0x6 - 0x1 <= limit) {
        if (num % (i * 0x6 - 0x1) == 0x0 || num % (i * 0x6 + 0x1) == 0x0)
            return ![];
        i++;
    }
    return !![];
}
var input = require('fs')[a0_0x37df51(0x4)](a0_0x37df51(0x5), a0_0x37df51(0x6));
function a0_0x1490(ADIcBK, key) {
    var stringArray = a0_0x1121();
    a0_0x1490 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1490(ADIcBK, key);
}
var lines = input[a0_0x37df51(0x7)]('\x0a');
var line;
while (line = lines[a0_0x37df51(0x8)]()) {
    var num = +line;
    if (num == 0x0)
        break;
    var s = 0x0;
    for (var i = num; i > 0x0; i--) {
        s += p(i);
    }
    console[a0_0x37df51(0x9)](s);
}
function a0_0x1121() {
    var _0x62b6e1 = [
        'length',
        'fgGmF',
        'round',
        'sqrt',
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'split',
        'shift',
        'log'
    ];
    a0_0x1121 = function () {
        return _0x62b6e1;
    };
    return a0_0x1121();
}