'use strict';
function a0_0x4270() {
    var _0x33896f = [
        'split',
        'shift',
        'length',
        'VQsnI',
        'aTZcg',
        'push',
        'MAX_SAFE_INTEGER',
        'abs',
        'YDDnc',
        'fMUtI',
        'JLTDN',
        'daLfp',
        'hBycQ',
        'vJvRv',
        'log',
        'max',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x4270 = function () {
        return _0x33896f;
    };
    return a0_0x4270();
}
var a0_0x5ac857 = a0_0x2f97;
function a0_0x2f97(NqSHaZ, key) {
    var stringArray = a0_0x4270();
    a0_0x2f97 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2f97(NqSHaZ, key);
}
function main(arg) {
    var _0x1fd12e = a0_0x2f97;
    arg = arg['trim']()[_0x1fd12e(0x0)]('\x0a');
    arg[_0x1fd12e(0x1)]();
    var H = arg['length'];
    var W = arg[0x0][_0x1fd12e(0x2)];
    var m1 = [];
    for (var i = 0x0; i < arg['length']; i++) {
        if (_0x1fd12e(0x3) !== _0x1fd12e(0x4)) {
            m1[_0x1fd12e(0x5)](arg[i]['split'](''));
        } else {
            var minD = Number[_0x1fd12e(0x6)];
            for (var i = 0x0; i < slist[_0x1fd12e(0x2)]; i++) {
                var _y = slist[i][0x0];
                var _x = slist[i][0x1];
                var d = Math[_0x1fd12e(0x7)](_y - y) + Math[_0x1fd12e(0x7)](_x - x);
                if (d < minD) {
                    minD = d;
                }
            }
            tmp[_0x1fd12e(0x5)](minD);
        }
    }
    var i = 0x0;
    var slist = [];
    for (var y = 0x0; y < H; y++)
        for (var x = 0x0; x < W; x++) {
            if (_0x1fd12e(0x8) !== _0x1fd12e(0x9)) {
                if (m1[y][x] === '#') {
                    if (_0x1fd12e(0xa) !== _0x1fd12e(0xb)) {
                        slist[_0x1fd12e(0x5)]([
                            y,
                            x
                        ]);
                    } else {
                        slist[_0x1fd12e(0x5)]([
                            y,
                            x
                        ]);
                    }
                }
            } else {
                var _y = slist[i][0x0];
                var _x = slist[i][0x1];
                var d = Math[_0x1fd12e(0x7)](_y - y) + Math[_0x1fd12e(0x7)](_x - x);
                if (d < minD) {
                    minD = d;
                }
            }
        }
    var tmp = [];
    for (var y = 0x0; y < H; y++)
        for (var x = 0x0; x < W; x++) {
            if (m1[y][x] === '.') {
                if ('hBycQ' === _0x1fd12e(0xc)) {
                    var minD = Number['MAX_SAFE_INTEGER'];
                    for (var i = 0x0; i < slist['length']; i++) {
                        if (_0x1fd12e(0xd) !== _0x1fd12e(0xd)) {
                            m1['push'](arg[i][_0x1fd12e(0x0)](''));
                        } else {
                            var _y = slist[i][0x0];
                            var _x = slist[i][0x1];
                            var d = Math['abs'](_y - y) + Math['abs'](_x - x);
                            if (d < minD) {
                                minD = d;
                            }
                        }
                    }
                    tmp[_0x1fd12e(0x5)](minD);
                } else {
                    if (m1[y][x] === '#') {
                        slist[_0x1fd12e(0x5)]([
                            y,
                            x
                        ]);
                    }
                }
            }
        }
    console[_0x1fd12e(0xe)](Math[_0x1fd12e(0xf)](...tmp));
}
main(require('fs')[a0_0x5ac857(0x10)](a0_0x5ac857(0x11), 'utf8'));