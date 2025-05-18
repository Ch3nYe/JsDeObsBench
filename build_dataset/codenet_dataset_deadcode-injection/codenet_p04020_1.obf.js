function a0_0x3744(QElsAp, key) {
    var stringArray = a0_0x15a3();
    a0_0x3744 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3744(QElsAp, key);
}
var a0_0x3eb832 = a0_0x3744;
function a0_0x15a3() {
    var _0x57ca4c = [
        'log',
        'trim',
        'map',
        'shift',
        'iqQJe',
        'floor',
        'JzUmz',
        'AiuUr',
        'min',
        'czDPd',
        'NasOk',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x15a3 = function () {
        return _0x57ca4c;
    };
    return a0_0x15a3();
}
function myout(text) {
    var _0x4812c4 = a0_0x3744;
    console[_0x4812c4(0x0)](text);
}
function Main(input) {
    var _0x3d91e0 = a0_0x3744;
    input = input[_0x3d91e0(0x1)]()['split']('\x0a')[_0x3d91e0(0x2)](a => Number(a));
    var len = input[0x0];
    var output = 0x0;
    input[_0x3d91e0(0x3)]();
    for (var i = 0x0; i < len; i++) {
        if (i == len - 0x1) {
            if ('iqQJe' !== _0x3d91e0(0x4)) {
                output += Math[_0x3d91e0(0x5)](input[i] / 0x2);
            } else {
                output += Math['floor'](input[i] / 0x2);
            }
        } else {
            if (input[i] != 0x0) {
                if (_0x3d91e0(0x6) === _0x3d91e0(0x7)) {
                    if (input[i + 0x1] != 0x0) {
                        var tmp = Math[_0x3d91e0(0x8)](input[i], input[i + 0x1]);
                        output += tmp;
                        input[i] -= tmp;
                        input[i + 0x1] -= tmp;
                        if (input[i] >= 0x2) {
                            output += Math[_0x3d91e0(0x5)](input[i] / 0x2);
                        }
                    } else {
                        output += Math[_0x3d91e0(0x5)](input[i] / 0x2);
                    }
                } else {
                    if (input[i + 0x1] != 0x0) {
                        if (_0x3d91e0(0x9) === _0x3d91e0(0x9)) {
                            var tmp = Math['min'](input[i], input[i + 0x1]);
                            output += tmp;
                            input[i] -= tmp;
                            input[i + 0x1] -= tmp;
                            if (input[i] >= 0x2) {
                                output += Math[_0x3d91e0(0x5)](input[i] / 0x2);
                            }
                        } else {
                            console[_0x3d91e0(0x0)](text);
                        }
                    } else {
                        if ('NasOk' === _0x3d91e0(0xa)) {
                            output += Math[_0x3d91e0(0x5)](input[i] / 0x2);
                        } else {
                            output += Math['floor'](input[i] / 0x2);
                        }
                    }
                }
            }
        }
    }
    myout(output);
}
Main(require('fs')[a0_0x3eb832(0xb)](a0_0x3eb832(0xc), a0_0x3eb832(0xd))[a0_0x3eb832(0x1)]());