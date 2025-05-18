function a0_0x1d1d() {
    var _0x5bd453 = [
        '6cFNPCg',
        '/dev/stdin',
        '338028zgpnnU',
        '558015ARcdkW',
        '64810XvbEuB',
        'trim',
        '6NNBsCz',
        '385677sOctCk',
        'split',
        'utf8',
        '8864030skCYDJ',
        '1343193dIEurZ',
        'map',
        'push',
        '263585bVOlre',
        '104gIDIgF'
    ];
    a0_0x1d1d = function () {
        return _0x5bd453;
    };
    return a0_0x1d1d();
}
var a0_0x54004d = a0_0x1cb7;
(function (stringArrayFunction, comparisonValue) {
    var _0xc4ee30 = a0_0x1cb7;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0xc4ee30(0x134)) / 0x1 * (parseInt(_0xc4ee30(0x132)) / 0x2) + -parseInt(_0xc4ee30(0x139)) / 0x3 + -parseInt(_0xc4ee30(0x130)) / 0x4 + -parseInt(_0xc4ee30(0x131)) / 0x5 + parseInt(_0xc4ee30(0x12e)) / 0x6 * (-parseInt(_0xc4ee30(0x12c)) / 0x7) + -parseInt(_0xc4ee30(0x12d)) / 0x8 * (-parseInt(_0xc4ee30(0x135)) / 0x9) + parseInt(_0xc4ee30(0x138)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1d1d, 0x8a90e));
function a0_0x1cb7(rkIBPO, key) {
    var stringArray = a0_0x1d1d();
    a0_0x1cb7 = function (index, key) {
        index = index - 0x12c;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1cb7(rkIBPO, key);
}
function Main(input) {
    var _0x4845f3 = a0_0x1cb7;
    input = input[_0x4845f3(0x133)]()[_0x4845f3(0x136)]('\x0a')['map'](function (x) {
        var _0x4db2de = _0x4845f3;
        return x[_0x4db2de(0x136)]('\x20');
    });
    var N = parseInt(input[0x0][0x0], 0xa);
    var x = parseInt(input[0x0][0x1], 0xa);
    var vec_a = input[0x1][_0x4845f3(0x13a)](e => parseInt(e, 0xa));
    var sum = function (arr) {
        var sum = 0x0;
        arr['forEach'](function (elm) {
            sum += elm;
        });
        return sum;
    };
    var vec_b = [];
    var tmp = 0x0;
    for (var i = 0x0; i < N; i++) {
        if (vec_a[i] >= x - tmp)
            vec_b[_0x4845f3(0x13b)](x - tmp);
        else
            vec_b['push'](vec_a[i]);
        tmp = vec_b[i];
    }
    console['log'](sum(vec_a) - sum(vec_b));
}
Main(require('fs')['readFileSync'](a0_0x54004d(0x12f), a0_0x54004d(0x137)));