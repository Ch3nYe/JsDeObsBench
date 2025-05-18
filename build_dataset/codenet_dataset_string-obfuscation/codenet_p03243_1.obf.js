function a0_0x3422(XmmFzO, key) {
    var stringArray = a0_0x2f6e();
    a0_0x3422 = function (index, key) {
        index = index - 0x11a;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3422(XmmFzO, key);
}
var a0_0x33c8ad = a0_0x3422;
function a0_0x2f6e() {
    var _0x5e5585 = [
        '7596yAGKFs',
        '576275WKEAER',
        '66nwunIY',
        'length',
        '298502tupxhB',
        'readFileSync',
        '201278NcWcEf',
        '44DBOMPM',
        'trim',
        '6391FCHzdn',
        '1070ctPEQr',
        '4184wNMGCN',
        'utf8',
        '744410IcuPJG',
        '/dev/stdin',
        '55149HMcnKW'
    ];
    a0_0x2f6e = function () {
        return _0x5e5585;
    };
    return a0_0x2f6e();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x5c3369 = a0_0x3422;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x5c3369(0x11e)) / 0x1 + parseInt(_0x5c3369(0x127)) / 0x2 + -parseInt(_0x5c3369(0x129)) / 0x3 * (parseInt(_0x5c3369(0x121)) / 0x4) + parseInt(_0x5c3369(0x11b)) / 0x5 + -parseInt(_0x5c3369(0x11c)) / 0x6 * (-parseInt(_0x5c3369(0x120)) / 0x7) + parseInt(_0x5c3369(0x125)) / 0x8 * (-parseInt(_0x5c3369(0x11a)) / 0x9) + -parseInt(_0x5c3369(0x124)) / 0xa * (parseInt(_0x5c3369(0x123)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2f6e, 0x60cb0));
function myout(text) {
    console['log'](text);
}
function Main(input) {
    var _0x585c85 = a0_0x3422;
    input = parseInt(input[_0x585c85(0x122)]());
    var check = [
        0x0,
        0x6f,
        0xde,
        0x14d,
        0x1bc,
        0x22b,
        0x29a,
        0x309,
        0x378,
        0x3e7
    ];
    for (var i = 0x0; i < check[_0x585c85(0x11d)] - 0x1; i++) {
        if (check[i] < input && check[i + 0x1] > input) {
            myout(check[i + 0x1]);
            return;
        } else if (check[i] == input) {
            myout(check[i]);
            return;
        }
    }
}
Main(require('fs')[a0_0x33c8ad(0x11f)](a0_0x33c8ad(0x128), a0_0x33c8ad(0x126)));