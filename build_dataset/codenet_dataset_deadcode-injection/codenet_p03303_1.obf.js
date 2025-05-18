function a0_0x5316() {
    var _0x996d02 = [
        'log',
        'split',
        'yvexu',
        'slice',
        'length',
        'Yiglt',
        'push',
        'shift',
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim'
    ];
    a0_0x5316 = function () {
        return _0x996d02;
    };
    return a0_0x5316();
}
function a0_0x1958(BhAnnz, key) {
    var stringArray = a0_0x5316();
    a0_0x1958 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1958(BhAnnz, key);
}
var a0_0x30e7c6 = a0_0x1958;
function myout(text) {
    var _0x5e85ff = a0_0x1958;
    console[_0x5e85ff(0x0)](text);
}
function Main(input) {
    var _0xa44253 = a0_0x1958;
    input = input[_0xa44253(0x1)]('\x0a');
    var S = input[0x0];
    var w = parseInt(input[0x1]);
    if (w == 0x1) {
        if (_0xa44253(0x2) !== _0xa44253(0x2)) {
            output += list[i][_0xa44253(0x3)](0x0, 0x1);
        } else {
            myout(S);
            return;
        }
    }
    S = S[_0xa44253(0x1)]('');
    var list = [];
    while (S[_0xa44253(0x4)] != 0x0) {
        if (_0xa44253(0x5) === 'Yiglt') {
            var tmp = '';
            for (var i = 0x0; i < w; i++) {
                if (S[_0xa44253(0x4)] != 0x0) {
                    tmp += S['shift']();
                }
            }
            list[_0xa44253(0x6)](tmp);
        } else {
            var tmp = '';
            for (var i = 0x0; i < w; i++) {
                if (S[_0xa44253(0x4)] != 0x0) {
                    tmp += S[_0xa44253(0x7)]();
                }
            }
            list[_0xa44253(0x6)](tmp);
        }
    }
    var output = '';
    for (var i = 0x0; i < list[_0xa44253(0x4)]; i++) {
        output += list[i]['slice'](0x0, 0x1);
    }
    myout(output);
}
Main(require('fs')[a0_0x30e7c6(0x8)](a0_0x30e7c6(0x9), a0_0x30e7c6(0xa))[a0_0x30e7c6(0xb)]());