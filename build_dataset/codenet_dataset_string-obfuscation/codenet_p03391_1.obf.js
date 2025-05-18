'use strict';
function a0_0x7f7b(VqkHNO, key) {
    var stringArray = a0_0x1c0b();
    a0_0x7f7b = function (index, key) {
        index = index - 0x1b2;
        var value = stringArray[index];
        return value;
    };
    return a0_0x7f7b(VqkHNO, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x935f62 = a0_0x7f7b;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x935f62(0x1b9)) / 0x1 + parseInt(_0x935f62(0x1be)) / 0x2 * (parseInt(_0x935f62(0x1c0)) / 0x3) + parseInt(_0x935f62(0x1b3)) / 0x4 + parseInt(_0x935f62(0x1b7)) / 0x5 + parseInt(_0x935f62(0x1c2)) / 0x6 * (-parseInt(_0x935f62(0x1bd)) / 0x7) + parseInt(_0x935f62(0x1bc)) / 0x8 * (-parseInt(_0x935f62(0x1b8)) / 0x9) + parseInt(_0x935f62(0x1bb)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1c0b, 0x42714));
function a0_0x1c0b() {
    var _0x271c1d = [
        '1218485dIThUL',
        '18NtEsMr',
        '497217MOjPmP',
        'readFileSync',
        '9007340avkgXA',
        '1330856OoHgOa',
        '3438967oIJSYv',
        '342928sbFdRp',
        '/dev/stdin',
        '6eqhmhx',
        'utf8',
        '6HcQRlP',
        'map',
        'length',
        '424004KaDPob',
        'split',
        'log',
        'shift'
    ];
    a0_0x1c0b = function () {
        return _0x271c1d;
    };
    return a0_0x1c0b();
}
function myin() {
    var _0x58da3c = a0_0x7f7b;
    return require('fs')[_0x58da3c(0x1ba)](_0x58da3c(0x1bf), _0x58da3c(0x1c1))['trim']();
}
function myout(t) {
    var _0x29e2f6 = a0_0x7f7b;
    console[_0x29e2f6(0x1b5)](t);
}
function myconv(i, no) {
    var _0x398b05 = a0_0x7f7b;
    switch (no) {
    case 0x0:
        return i;
    case 0x1:
        return parseInt(i);
    case 0x2:
        return i['split']('\x20');
    case 0x3:
        return i[_0x398b05(0x1b4)]('\x0a');
    case 0x4:
        return i[_0x398b05(0x1b4)]('\x20')[_0x398b05(0x1c3)](a => Number(a));
    case 0x5:
        return i[_0x398b05(0x1b4)]('\x0a')[_0x398b05(0x1c3)](a => Number(a));
    case 0x6:
        return i[_0x398b05(0x1b4)]('');
    case 0x7:
        return i[_0x398b05(0x1b4)]('')[_0x398b05(0x1c3)](a => Number(a));
    }
}
function Main(input) {
    var _0x17b008 = a0_0x7f7b;
    input = myconv(input, 0x3);
    input[_0x17b008(0x1b6)]();
    var output = 0x0;
    for (var i = 0x0; i < input[_0x17b008(0x1b2)]; i++) {
        var A = parseInt(input[i][_0x17b008(0x1b4)]('\x20')[0x0]);
        var B = parseInt(input[i][_0x17b008(0x1b4)]('\x20')[0x1]);
        if (A < B) {
            output += B;
        }
    }
    myout(output);
}
Main(myin());