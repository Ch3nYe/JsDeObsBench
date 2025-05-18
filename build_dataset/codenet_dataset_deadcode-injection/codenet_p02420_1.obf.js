'use strict';
function a0_0x8fa2() {
    var _0x15e6f0 = [
        'toString',
        'map',
        'slice',
        'reduce',
        'join',
        'match',
        'split',
        'log',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x8fa2 = function () {
        return _0x15e6f0;
    };
    return a0_0x8fa2();
}
function a0_0x1a0b(vlHYNn, key) {
    var stringArray = a0_0x8fa2();
    a0_0x1a0b = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1a0b(vlHYNn, key);
}
var a0_0x255e14 = a0_0x1a0b;
(function (stdin) {
    var _0x58c910 = a0_0x1a0b;
    var lines = stdin[_0x58c910(0x0)]();
    var re = /[A-Za-z]+\n([1-9][0-9]*\n)+/g;
    var result = function (data) {
        var _0x21b803 = a0_0x1a0b;
        return data[_0x21b803(0x1)](function (v) {
            var _0x3ea3a5 = a0_0x1a0b;
            return v[_0x3ea3a5(0x2)](-v[0x1])[_0x3ea3a5(0x1)](Number)[_0x3ea3a5(0x3)](function (str, num) {
                var _0x4036c8 = a0_0x1a0b;
                return str[_0x4036c8(0x2)](num) + str['slice'](0x0, num);
            }, v[0x0]);
        })[_0x21b803(0x4)]('\x0a');
    }(lines[_0x58c910(0x5)](re)[_0x58c910(0x1)](function (v) {
        var _0x49aac4 = a0_0x1a0b;
        return v['trim']()[_0x49aac4(0x6)]('\x0a');
    }));
    console[_0x58c910(0x7)](result);
}(require('fs')['readFileSync'](a0_0x255e14(0x8), a0_0x255e14(0x9))));