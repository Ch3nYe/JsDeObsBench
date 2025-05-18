'use strict';
var a0_0x264340 = a0_0x627c;
function a0_0x627c(ZMqzkl, key) {
    var stringArray = a0_0xf268();
    a0_0x627c = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x627c(ZMqzkl, key);
}
function a0_0xf268() {
    var _0x13efc5 = [
        'shift',
        'map',
        'sGvdB',
        'push',
        'join',
        'replace',
        'split',
        'trim',
        'log',
        'readFileSync',
        'utf8'
    ];
    a0_0xf268 = function () {
        return _0x13efc5;
    };
    return a0_0xf268();
}
(function (stdin) {
    var _0x3d40a9 = a0_0x627c;
    function sumLine(a, b) {
        return a + b;
    }
    function result(matrix) {
        var _0x354b7c = a0_0x627c;
        if ('nKGhL' === 'nKGhL') {
            var size = matrix[_0x354b7c(0x0)]();
            matrix[_0x354b7c(0x1)](function (v) {
                var _0x1652f6 = a0_0x627c;
                if (_0x1652f6(0x2) === 'HmRCl') {
                    return a + b;
                } else {
                    return v[_0x1652f6(0x3)](v['reduce'](sumLine));
                }
            });
            var sumColumn = [];
            for (var i = 0x0; i < size[0x1] + 0x1; i++) {
                var sumValue = 0x0;
                for (var j = 0x0; j < size[0x0]; j++) {
                    sumValue += matrix[j][i];
                }
                sumColumn[_0x354b7c(0x3)](sumValue);
            }
            matrix[_0x354b7c(0x3)](sumColumn);
            return matrix[_0x354b7c(0x4)]('\x0a')[_0x354b7c(0x5)](/,/g, '\x20');
        } else {
            return v[_0x354b7c(0x6)]('\x20')['map'](Number);
        }
    }
    var inputs = stdin['toString']()[_0x3d40a9(0x7)]()['split']('\x0a');
    var sheet = inputs[_0x3d40a9(0x1)](function (v) {
        var _0x3bfcc4 = a0_0x627c;
        return v['split']('\x20')[_0x3bfcc4(0x1)](Number);
    });
    console[_0x3d40a9(0x8)](result(sheet));
}(require('fs')[a0_0x264340(0x9)]('/dev/stdin', a0_0x264340(0xa))));