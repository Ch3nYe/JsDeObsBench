function a0_0x1779(CeREDb, key) {
    var stringArray = a0_0x5d4a();
    a0_0x1779 = function (index, key) {
        index = index - 0xd8;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1779(CeREDb, key);
}
var a0_0x4e3f72 = a0_0x1779;
(function (stringArrayFunction, comparisonValue) {
    var _0x237233 = a0_0x1779;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x237233(0xdb)) / 0x1 * (-parseInt(_0x237233(0xe2)) / 0x2) + parseInt(_0x237233(0xdc)) / 0x3 + parseInt(_0x237233(0xe3)) / 0x4 + parseInt(_0x237233(0xe0)) / 0x5 * (-parseInt(_0x237233(0xd8)) / 0x6) + -parseInt(_0x237233(0xe1)) / 0x7 + parseInt(_0x237233(0xe6)) / 0x8 + -parseInt(_0x237233(0xe5)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5d4a, 0x87480));
var lines = [];
function a0_0x5d4a() {
    var _0x29ac7d = [
        '6673dCkJeF',
        '726585LajEPn',
        'readline',
        'stdin',
        'log',
        '260535jsLQPm',
        '7282632PgqKKm',
        '186cCVwsr',
        '3654880XnXQng',
        'exit',
        '2716560Zgsska',
        '2626016ZQqjSU',
        '24nUaKMM',
        'toFixed',
        'createInterface'
    ];
    a0_0x5d4a = function () {
        return _0x29ac7d;
    };
    return a0_0x5d4a();
}
var reader = require(a0_0x4e3f72(0xdd))[a0_0x4e3f72(0xda)]({
    'input': process[a0_0x4e3f72(0xde)],
    'output': process['stdout']
});
reader['on']('line', function (line) {
    var _0x243d51 = a0_0x4e3f72;
    var a = line['split']('\x20');
    var b = parseInt(a[0x0], 0xa);
    var c = b * b * Math['PI'];
    var d = b * 0x2 * Math['PI'];
    console[_0x243d51(0xdf)](c[_0x243d51(0xd9)](0x6) + '\x20' + d[_0x243d51(0xd9)](0x6));
    process[_0x243d51(0xe4)]();
});
process[a0_0x4e3f72(0xde)]['on']('end', function () {
});