var a0_0x4c6b38 = a0_0x6013;
function a0_0x6013(uPiWEQ, key) {
    var stringArray = a0_0x31bc();
    a0_0x6013 = function (index, key) {
        index = index - 0x1b1;
        var value = stringArray[index];
        return value;
    };
    return a0_0x6013(uPiWEQ, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x1188c8 = a0_0x6013;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x1188c8(0x1bc)) / 0x1 + -parseInt(_0x1188c8(0x1b2)) / 0x2 + -parseInt(_0x1188c8(0x1bb)) / 0x3 + parseInt(_0x1188c8(0x1b1)) / 0x4 + parseInt(_0x1188c8(0x1be)) / 0x5 + -parseInt(_0x1188c8(0x1bf)) / 0x6 + parseInt(_0x1188c8(0x1b7)) / 0x7;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x31bc, 0x75fa4));
function Main(input) {
    var _0x2daf13 = a0_0x6013;
    var input = input[_0x2daf13(0x1b4)]('\x20');
    var n = parseInt(input[0x0], 0xa);
    var p = parseInt(input[0x1], 0xa);
    var arr = [];
    var counts = [];
    var ans = 0x1;
    var i = 0x2;
    while (i <= p) {
        while (p % i === 0x0) {
            arr[_0x2daf13(0x1bd)](i);
            p = Math[_0x2daf13(0x1b8)](p / i);
        }
        i++;
    }
    for (var i = 0x0; i < arr[_0x2daf13(0x1b6)]; i++) {
        var key = arr[i];
        counts[key] = counts[key] ? counts[key] + 0x1 : 0x1;
    }
    var b = arr[_0x2daf13(0x1b5)](function (x, i, self) {
        var _0x3c4875 = _0x2daf13;
        return self[_0x3c4875(0x1b9)](x) === i;
    });
    for (var i = 0x0; i < b[_0x2daf13(0x1b6)]; i++) {
        if (counts[b[i]] >= n) {
            ans *= b[i];
        }
    }
    console[_0x2daf13(0x1b3)](ans);
}
function a0_0x31bc() {
    var _0x500c58 = [
        '6355pvTVWD',
        'push',
        '4278090VBgevB',
        '545046DdadBX',
        '139824CnpBXx',
        '1001916HbGKxR',
        'log',
        'split',
        'filter',
        'length',
        '4954026CPEyiR',
        'floor',
        'indexOf',
        'utf8',
        '1550706qbTDSn'
    ];
    a0_0x31bc = function () {
        return _0x500c58;
    };
    return a0_0x31bc();
}
Main(require('fs')['readFileSync']('/dev/stdin', a0_0x4c6b38(0x1ba)));