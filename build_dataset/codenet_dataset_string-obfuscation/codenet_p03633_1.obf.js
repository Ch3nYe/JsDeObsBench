var a0_0x1251f4 = a0_0x298d;
(function (stringArrayFunction, comparisonValue) {
    var _0x44272b = a0_0x298d;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x44272b(0x128)) / 0x1 + -parseInt(_0x44272b(0x11f)) / 0x2 + parseInt(_0x44272b(0x121)) / 0x3 + parseInt(_0x44272b(0x125)) / 0x4 * (parseInt(_0x44272b(0x12c)) / 0x5) + -parseInt(_0x44272b(0x12b)) / 0x6 + -parseInt(_0x44272b(0x122)) / 0x7 + parseInt(_0x44272b(0x129)) / 0x8;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1386, 0x8c3a1));
log = console[a0_0x1251f4(0x127)];
var stdin = require('fs')[a0_0x1251f4(0x12a)]('/dev/stdin', a0_0x1251f4(0x123));
var lines = stdin['split']('\x0a');
var N = lines[0x0][a0_0x1251f4(0x126)]('\x20')['map'](Number)[0x0];
var T = lines['slice'](0x1)[a0_0x1251f4(0x124)](v => v !== '')[a0_0x1251f4(0x120)](Number);
function gcd(a, b) {
    if (b === 0x0)
        return a;
    return gcd(b, a % b);
}
function lcm(a, b) {
    return a * b / gcd(a, b);
}
function a0_0x298d(KLJNYW, key) {
    var stringArray = a0_0x1386();
    a0_0x298d = function (index, key) {
        index = index - 0x11f;
        var value = stringArray[index];
        return value;
    };
    return a0_0x298d(KLJNYW, key);
}
for (var i = 0x1; i < N; i++) {
    T[i] = lcm(T[i], T[i - 0x1]);
}
log(T[N - 0x1]);
function a0_0x1386() {
    var _0x520ab3 = [
        '1024313VOIjtQ',
        '10045096BFzkJb',
        'readFileSync',
        '6061650mGpZxA',
        '5bvCufR',
        '874032rBkpUI',
        'map',
        '1818189klrJeb',
        '6079164hwwycG',
        'UTF-8',
        'filter',
        '16396fjhYZf',
        'split',
        'log'
    ];
    a0_0x1386 = function () {
        return _0x520ab3;
    };
    return a0_0x1386();
}