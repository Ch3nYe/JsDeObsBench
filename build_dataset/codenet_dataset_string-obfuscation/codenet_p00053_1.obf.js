var a0_0x195b64 = a0_0x53c9;
(function (stringArrayFunction, comparisonValue) {
    var _0x5a28ea = a0_0x53c9;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x5a28ea(0x200)) / 0x1 * (-parseInt(_0x5a28ea(0x1f9)) / 0x2) + parseInt(_0x5a28ea(0x1f6)) / 0x3 * (-parseInt(_0x5a28ea(0x1fa)) / 0x4) + parseInt(_0x5a28ea(0x1f8)) / 0x5 * (parseInt(_0x5a28ea(0x1f1)) / 0x6) + -parseInt(_0x5a28ea(0x1ee)) / 0x7 * (parseInt(_0x5a28ea(0x1f2)) / 0x8) + parseInt(_0x5a28ea(0x1fe)) / 0x9 + -parseInt(_0x5a28ea(0x1f3)) / 0xa + parseInt(_0x5a28ea(0x1fb)) / 0xb * (parseInt(_0x5a28ea(0x1ed)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2ac0, 0x195aa));
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
    var _0xcf5355 = a0_0x53c9;
    if (m[n])
        return m[n];
    var found = m[_0xcf5355(0x1f4)] - 0x1;
    var foundP = m[found];
    for (var i = foundP + 0x2;; i += 0x2) {
        if (isPrime(i)) {
            found++;
            m[found] = i;
            if (found == n)
                return i;
        }
    }
}
function isPrime(num) {
    var _0x459ccf = a0_0x53c9;
    if (num % 0x3 == 0x0)
        return ![];
    var limit = Math[_0x459ccf(0x1ff)](Math[_0x459ccf(0x1fc)](num));
    var i = 0x1;
    while (i * 0x6 - 0x1 <= limit) {
        if (num % (i * 0x6 - 0x1) == 0x0 || num % (i * 0x6 + 0x1) == 0x0)
            return ![];
        i++;
    }
    return !![];
}
function a0_0x2ac0() {
    var _0x216243 = [
        '135684ezEHSa',
        'round',
        '2627UhEVmJ',
        '332292ULsqPF',
        '5446byvbZi',
        'log',
        'shift',
        '84fEtnWC',
        '616qtDqhg',
        '930190lcTIED',
        'length',
        'readFileSync',
        '1662QfhHHW',
        'utf8',
        '3735RDUXzZ',
        '20LUAcCZ',
        '340ejzbym',
        '121YWyxQh',
        'sqrt',
        'split'
    ];
    a0_0x2ac0 = function () {
        return _0x216243;
    };
    return a0_0x2ac0();
}
var input = require('fs')[a0_0x195b64(0x1f5)]('/dev/stdin', a0_0x195b64(0x1f7));
var lines = input[a0_0x195b64(0x1fd)]('\x0a');
var line;
function a0_0x53c9(cixEoQ, key) {
    var stringArray = a0_0x2ac0();
    a0_0x53c9 = function (index, key) {
        index = index - 0x1ed;
        var value = stringArray[index];
        return value;
    };
    return a0_0x53c9(cixEoQ, key);
}
while (line = lines[a0_0x195b64(0x1f0)]()) {
    var num = +line;
    if (num == 0x0)
        break;
    var s = 0x0;
    for (var i = num; i > 0x0; i--) {
        s += p(i);
    }
    console[a0_0x195b64(0x1ef)](s);
}