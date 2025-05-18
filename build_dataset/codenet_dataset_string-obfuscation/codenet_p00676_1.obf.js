var a0_0x1ccfe5 = a0_0x4808;
(function (stringArrayFunction, comparisonValue) {
    var _0x3093c9 = a0_0x4808;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x3093c9(0x15f)) / 0x1 + parseInt(_0x3093c9(0x15d)) / 0x2 + -parseInt(_0x3093c9(0x158)) / 0x3 + parseInt(_0x3093c9(0x156)) / 0x4 * (-parseInt(_0x3093c9(0x150)) / 0x5) + parseInt(_0x3093c9(0x154)) / 0x6 * (-parseInt(_0x3093c9(0x153)) / 0x7) + parseInt(_0x3093c9(0x157)) / 0x8 + parseInt(_0x3093c9(0x15a)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4853, 0x4d202));
function heron(a, b, c) {
    var _0x1d4579 = a0_0x4808;
    var s = (a + b + c) / 0x2;
    var S = Math[_0x1d4579(0x15e)](s * (s - a) * (s - b) * (s - c));
    return S;
}
function a0_0x4853() {
    var _0x4b08cf = [
        'trim',
        '4496634mnMueL',
        'readFileSync',
        'utf8',
        '405166pzJFLh',
        'sqrt',
        '630973uHcrNO',
        '5MCbHWJ',
        'split',
        'toFixed',
        '14qigYfr',
        '1187976HMVWSl',
        'map',
        '1291868pyZMGc',
        '2375920WTbElq',
        '1785921NexKpE'
    ];
    a0_0x4853 = function () {
        return _0x4b08cf;
    };
    return a0_0x4853();
}
var input = require('fs')[a0_0x1ccfe5(0x15b)]('/dev/stdin', a0_0x1ccfe5(0x15c));
function a0_0x4808(NjUvOl, key) {
    var stringArray = a0_0x4853();
    a0_0x4808 = function (index, key) {
        index = index - 0x150;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4808(NjUvOl, key);
}
var Arr = input[a0_0x1ccfe5(0x159)]()[a0_0x1ccfe5(0x151)]('\x0a');
for (var i = 0x0; i < Arr['length']; i++) {
    var ALX = Arr[i][a0_0x1ccfe5(0x151)]('\x20')[a0_0x1ccfe5(0x155)](Number);
    var A = ALX[0x0];
    var L = ALX[0x1];
    var X = ALX[0x2];
    var sum = 0x0;
    sum += heron(A, L, L);
    sum += heron(L, (L + X) / 0x2, (L + X) / 0x2) * 0x2;
    console['log'](sum[a0_0x1ccfe5(0x152)](0xa));
}