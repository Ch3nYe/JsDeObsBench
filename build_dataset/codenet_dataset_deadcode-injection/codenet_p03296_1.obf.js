'use strict';
function myin() {
    var _0x56fa99 = a0_0x1a4c;
    return require('fs')[_0x56fa99(0x0)](_0x56fa99(0x1), 'utf8')['trim']();
}
function myout(t) {
    console['log'](t);
}
function myconv(i, no) {
    var _0x4b25d0 = a0_0x1a4c;
    switch (no) {
    case 0x0:
        return i;
    case 0x1:
        return parseInt(i);
    case 0x2:
        return i[_0x4b25d0(0x2)]('\x20');
    case 0x3:
        return i[_0x4b25d0(0x2)]('\x0a');
    case 0x4:
        return i[_0x4b25d0(0x2)]('\x20')['map'](a => Number(a));
    case 0x5:
        return i[_0x4b25d0(0x2)]('\x0a')[_0x4b25d0(0x3)](a => Number(a));
    case 0x6:
        return i[_0x4b25d0(0x2)]('');
    case 0x7:
        return i[_0x4b25d0(0x2)]('')[_0x4b25d0(0x3)](a => Number(a));
    }
}
function Main(input) {
    var _0x731ec3 = a0_0x1a4c;
    input = myconv(input, 0x3);
    var N = myconv(input[0x0], 0x1);
    var list = myconv(input[0x1], 0x4);
    var output = 0x0;
    for (var i = 0x0; i < N - 0x1; i++) {
        var mae = list[i];
        var ato = list[i + 0x1];
        if (mae == ato) {
            if (_0x731ec3(0x4) === _0x731ec3(0x5)) {
                switch (no) {
                case 0x0:
                    return i;
                case 0x1:
                    return parseInt(i);
                case 0x2:
                    return i[_0x731ec3(0x2)]('\x20');
                case 0x3:
                    return i[_0x731ec3(0x2)]('\x0a');
                case 0x4:
                    return i['split']('\x20')[_0x731ec3(0x3)](a => Number(a));
                case 0x5:
                    return i['split']('\x0a')[_0x731ec3(0x3)](a => Number(a));
                case 0x6:
                    return i[_0x731ec3(0x2)]('');
                case 0x7:
                    return i[_0x731ec3(0x2)]('')[_0x731ec3(0x3)](a => Number(a));
                }
            } else {
                output++;
                list[i + 0x1] = -0x1;
            }
        }
    }
    myout(output);
}
function a0_0x1a4c(wZsntU, key) {
    var stringArray = a0_0x1dc5();
    a0_0x1a4c = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1a4c(wZsntU, key);
}
Main(myin());
function a0_0x1dc5() {
    var _0x5b2049 = [
        'readFileSync',
        '/dev/stdin',
        'split',
        'map',
        'TTzvC',
        'btmyt'
    ];
    a0_0x1dc5 = function () {
        return _0x5b2049;
    };
    return a0_0x1dc5();
}