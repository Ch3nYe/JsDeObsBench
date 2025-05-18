function a0_0x2d23(lbLCYk, key) {
    var stringArray = a0_0x5720();
    a0_0x2d23 = function (index, key) {
        index = index - 0xe7;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2d23(lbLCYk, key);
}
var a0_0x595d0a = a0_0x2d23;
function a0_0x5720() {
    var _0x512489 = [
        'forEach',
        'readFileSync',
        '384wLXNrj',
        'log',
        '2tCbgno',
        '7529951JoZvKC',
        '66jvjWLq',
        '9LqlBdp',
        'utf8',
        'shift',
        '57tahHyh',
        'fill',
        '2159333glNnXm',
        'map',
        '/dev/stdin',
        '21bBNNhP',
        '208773qSELvV',
        '2031680NCueRR',
        '74735zGTuhs',
        '12rfpsYQ',
        'split',
        '304504bIQaIX'
    ];
    a0_0x5720 = function () {
        return _0x512489;
    };
    return a0_0x5720();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x39e3f1 = a0_0x2d23;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x39e3f1(0xf5)) / 0x1 * (-parseInt(_0x39e3f1(0xe9)) / 0x2) + -parseInt(_0x39e3f1(0xef)) / 0x3 * (parseInt(_0x39e3f1(0xe7)) / 0x4) + -parseInt(_0x39e3f1(0xf7)) / 0x5 * (parseInt(_0x39e3f1(0xeb)) / 0x6) + -parseInt(_0x39e3f1(0xf4)) / 0x7 * (parseInt(_0x39e3f1(0xfa)) / 0x8) + parseInt(_0x39e3f1(0xec)) / 0x9 * (-parseInt(_0x39e3f1(0xf6)) / 0xa) + -parseInt(_0x39e3f1(0xf1)) / 0xb + parseInt(_0x39e3f1(0xf8)) / 0xc * (parseInt(_0x39e3f1(0xea)) / 0xd);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5720, 0x1a643));
function Main(input) {
    var _0x52bebb = a0_0x2d23;
    input = input[_0x52bebb(0xf9)]('\x0a');
    var m = input[0x0][_0x52bebb(0xf9)]('\x20')[_0x52bebb(0xf2)](Number);
    input['shift']();
    var arr = new Array(0x23)[_0x52bebb(0xf0)](0x0);
    input[_0x52bebb(0xfb)](function (val) {
        var _0x40f05b = _0x52bebb;
        var mem = val[_0x40f05b(0xf9)]('\x20')[_0x40f05b(0xf2)](Number);
        mem[_0x40f05b(0xee)]();
        mem[_0x40f05b(0xfb)](function (p) {
            arr[p]++;
        });
    });
    var ans = 0x0;
    arr[_0x52bebb(0xfb)](function (val) {
        if (val == m[0x0])
            ans++;
    });
    console[_0x52bebb(0xe8)](ans);
}
Main(require('fs')[a0_0x595d0a(0xfc)](a0_0x595d0a(0xf3), a0_0x595d0a(0xed))['trim']());