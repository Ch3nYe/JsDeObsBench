var a0_0x12e155 = a0_0x4360;
function initOfficialHouse(bMax, fMax, rMax) {
    var o = Array(bMax);
    for (var b = 0x0; b < bMax; b++) {
        o[b] = Array(fMax);
        for (var f = 0x0; f < fMax; f++) {
            o[b][f] = Array(rMax);
            for (var r = 0x0; r < rMax; r++) {
                o[b][f][r] = 0x0;
            }
        }
    }
    return o;
}
function toString(o) {
    var _0x38a9f9 = a0_0x4360;
    return o[_0x38a9f9(0x0)](function (b) {
        var _0x583a51 = a0_0x4360;
        return b['map'](function (f) {
            var _0x972d6b = a0_0x4360;
            return '\x20' + f[_0x972d6b(0x1)]('\x20');
        })[_0x583a51(0x1)]('\x0a');
    })[_0x38a9f9(0x1)]('\x0a####################\x0a');
}
const chunk = require('fs')['readFileSync'](a0_0x12e155(0x2), a0_0x12e155(0x3));
var lines = chunk[a0_0x12e155(0x4)]()[a0_0x12e155(0x5)]('\x0a');
lines[a0_0x12e155(0x6)]();
var o = initOfficialHouse(0x4, 0x3, 0xa);
function a0_0x4360(OQcOoJ, key) {
    var stringArray = a0_0x4b88();
    a0_0x4360 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4360(OQcOoJ, key);
}
function a0_0x4b88() {
    var _0x5a8300 = [
        'map',
        'join',
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'shift',
        'forEach',
        'log'
    ];
    a0_0x4b88 = function () {
        return _0x5a8300;
    };
    return a0_0x4b88();
}
lines[a0_0x12e155(0x7)](function (line) {
    var _0x309ee0 = a0_0x4360;
    var bfrv = line[_0x309ee0(0x5)]('\x20')[_0x309ee0(0x0)](Number);
    var b = bfrv[0x0], f = bfrv[0x1], r = bfrv[0x2], v = bfrv[0x3];
    o[b - 0x1][f - 0x1][r - 0x1] += v;
});
console[a0_0x12e155(0x8)](toString(o));