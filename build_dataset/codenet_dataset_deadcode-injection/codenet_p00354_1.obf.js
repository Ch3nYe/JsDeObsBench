function a0_0x4ca1() {
    var _0x6f33e2 = [
        'readFileSync',
        'utf8',
        'fri',
        'sun',
        'mon',
        'tue',
        'wed',
        'log'
    ];
    a0_0x4ca1 = function () {
        return _0x6f33e2;
    };
    return a0_0x4ca1();
}
var a0_0x5d178a = a0_0x1006;
var input = require('fs')[a0_0x5d178a(0x0)]('/dev/stdin', a0_0x5d178a(0x1));
function a0_0x1006(JOwhxZ, key) {
    var stringArray = a0_0x4ca1();
    a0_0x1006 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1006(JOwhxZ, key);
}
var x = input['trim']() - 0x0;
var w = [
    'thu',
    a0_0x5d178a(0x2),
    'sat',
    a0_0x5d178a(0x3),
    a0_0x5d178a(0x4),
    a0_0x5d178a(0x5),
    a0_0x5d178a(0x6)
];
console[a0_0x5d178a(0x7)](w[x % 0x7]);