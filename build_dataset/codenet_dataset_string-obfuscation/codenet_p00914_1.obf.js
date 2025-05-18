var a0_0x3287c8 = a0_0xa454;
(function (stringArrayFunction, comparisonValue) {
    var _0x5415fe = a0_0xa454;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x5415fe(0xb4)) / 0x1 + -parseInt(_0x5415fe(0xa7)) / 0x2 + parseInt(_0x5415fe(0xb1)) / 0x3 + parseInt(_0x5415fe(0xa6)) / 0x4 + -parseInt(_0x5415fe(0xae)) / 0x5 * (parseInt(_0x5415fe(0xa4)) / 0x6) + parseInt(_0x5415fe(0xb3)) / 0x7 + parseInt(_0x5415fe(0xa8)) / 0x8;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x37a0, 0x6441d));
function kumiawase(start, end, len) {
    var ans = [];
    var loop = function (a, arr) {
        var _0xc5f3de = a0_0xa454;
        if (arr['length'] == len)
            ans[_0xc5f3de(0xab)](arr);
        else {
            for (var i = a; i <= end; i++)
                loop(i + 0x1, arr[_0xc5f3de(0xb0)](i));
        }
    };
    loop(start, []);
    return ans;
}
var input = require('fs')[a0_0x3287c8(0xad)](a0_0x3287c8(0xb5), a0_0x3287c8(0xa9));
function a0_0xa454(xfRBUI, key) {
    var stringArray = a0_0x37a0();
    a0_0xa454 = function (index, key) {
        index = index - 0xa4;
        var value = stringArray[index];
        return value;
    };
    return a0_0xa454(xfRBUI, key);
}
var arr = input[a0_0x3287c8(0xaf)]()[a0_0x3287c8(0xac)]('\x0a');
function a0_0x37a0() {
    var _0x1fcdda = [
        'concat',
        '1241073VzehtO',
        'map',
        '675724hOzpLm',
        '287172xOzmxA',
        '/dev/stdin',
        'some',
        'reduce',
        '834318EwZgkp',
        'log',
        '2536312iLUdnv',
        '498294YHoQWo',
        '3983488IIBSGE',
        'utf8',
        '0\x200\x200',
        'push',
        'split',
        'readFileSync',
        '25KqCvij',
        'trim'
    ];
    a0_0x37a0 = function () {
        return _0x1fcdda;
    };
    return a0_0x37a0();
}
arr[a0_0x3287c8(0xb6)](function (v, i) {
    var _0x36ff83 = a0_0x3287c8;
    if (v == _0x36ff83(0xaa))
        return !![];
    var nks = v['split']('\x20')[_0x36ff83(0xb2)](Number);
    var ary = kumiawase(0x1, nks[0x0], nks[0x1]);
    var cnt = 0x0;
    ary['forEach'](function (v) {
        var _0x5b8f28 = _0x36ff83;
        var sum = v[_0x5b8f28(0xb7)](function (a, b) {
            return a + b;
        });
        if (sum == nks[0x2])
            cnt++;
    });
    console[_0x36ff83(0xa5)](cnt);
});