'use strict';
var a0_0x22aea4 = a0_0x5084;
function a0_0x2c12() {
    var _0x17b2aa = [
        'split',
        'shift',
        'aoki',
        'taka',
        'sort',
        'WcBBg',
        'axYYN',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x2c12 = function () {
        return _0x17b2aa;
    };
    return a0_0x2c12();
}
function Main(input) {
    var _0x11bbaf = a0_0x5084;
    var lines = input[_0x11bbaf(0x0)]('\x0a');
    var N = lines[_0x11bbaf(0x1)]() - 0x0;
    var ryo = new Array(N);
    for (var n = 0x0; n < N; n++) {
        var nums = lines[n][_0x11bbaf(0x0)]('\x20');
        ryo[n] = {
            'taka': nums[0x0] - 0x0,
            'aoki': nums[0x1] - 0x0
        };
        ryo[n]['sa'] = ryo[n][_0x11bbaf(0x2)] - ryo[n][_0x11bbaf(0x3)];
    }
    ryo[_0x11bbaf(0x4)](function (a, b) {
        var _0x113086 = a0_0x5084;
        if ('wDUTW' !== 'dsviV') {
            return b['sa'] - a['sa'];
        } else {
            if (n % 0x2 == 0x0) {
                koufuku += ryo[n]['taka'];
                ryo[n][_0x113086(0x3)] = 0x0;
            } else {
                koufuku -= ryo[n][_0x113086(0x2)];
                ryo[n][_0x113086(0x2)] = 0x0;
            }
        }
    });
    ryo[_0x11bbaf(0x4)](function (a, b) {
        var _0x39c5cf = a0_0x5084;
        if ('mzZKF' !== _0x39c5cf(0x5)) {
            return b[_0x39c5cf(0x3)] - a['taka'];
        } else {
            return b[_0x39c5cf(0x3)] - a['taka'];
        }
    });
    var koufuku = 0x0;
    for (var n = 0x0; n < N; n++) {
        if (n % 0x2 == 0x0) {
            if (_0x11bbaf(0x6) === 'axYYN') {
                koufuku += ryo[n][_0x11bbaf(0x3)];
                ryo[n][_0x11bbaf(0x3)] = 0x0;
            } else {
                koufuku -= ryo[n][_0x11bbaf(0x2)];
                ryo[n][_0x11bbaf(0x2)] = 0x0;
            }
        } else {
            koufuku -= ryo[n][_0x11bbaf(0x2)];
            ryo[n][_0x11bbaf(0x2)] = 0x0;
        }
    }
    console['log'](koufuku);
}
function a0_0x5084(ihIcAv, key) {
    var stringArray = a0_0x2c12();
    a0_0x5084 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5084(ihIcAv, key);
}
Main(require('fs')[a0_0x22aea4(0x7)](a0_0x22aea4(0x8), 'utf8'));