var a0_0x13be2b = a0_0x5e19;
(function (stringArrayFunction, comparisonValue) {
    var _0x5dc520 = a0_0x5e19;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x5dc520(0x144)) / 0x1 + -parseInt(_0x5dc520(0x143)) / 0x2 * (parseInt(_0x5dc520(0x13d)) / 0x3) + -parseInt(_0x5dc520(0x139)) / 0x4 + -parseInt(_0x5dc520(0x140)) / 0x5 + -parseInt(_0x5dc520(0x13a)) / 0x6 * (parseInt(_0x5dc520(0x137)) / 0x7) + -parseInt(_0x5dc520(0x142)) / 0x8 * (parseInt(_0x5dc520(0x134)) / 0x9) + parseInt(_0x5dc520(0x13c)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x35b3, 0x5ef19));
function a0_0x5e19(uoQePl, key) {
    var stringArray = a0_0x35b3();
    a0_0x5e19 = function (index, key) {
        index = index - 0x134;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5e19(uoQePl, key);
}
function get_run_length(min, max) {
    var _0x42fc29 = a0_0x5e19;
    var result = 0x0;
    if (max > Math[_0x42fc29(0x136)](min)) {
        result = Math[_0x42fc29(0x136)](min * 0x2) + max;
    } else {
        result = Math[_0x42fc29(0x136)](min) + max * 0x2;
    }
    if (min >= 0x0) {
        result = max;
    }
    if (max <= 0x0) {
        result = Math[_0x42fc29(0x136)](min);
    }
    return result;
}
function a0_0x35b3() {
    var _0x87ea39 = [
        'log',
        'abs',
        '102431hYOGOf',
        'split',
        '2678428KQqHvU',
        '282ImEcRL',
        '/dev/stdin',
        '32034970jsYvTh',
        '2062677acTuKV',
        'readFileSync',
        'utf8',
        '436095MCdqlS',
        'map',
        '2512ozBWLi',
        '2JKxdop',
        '200796egSQVj',
        '13806sfpXvU'
    ];
    a0_0x35b3 = function () {
        return _0x87ea39;
    };
    return a0_0x35b3();
}
function main(input) {
    var _0x582ae1 = a0_0x5e19;
    const lines = input[_0x582ae1(0x138)]('\x0a');
    const N = parseInt(lines[0x0][_0x582ae1(0x138)]('\x20')[0x0]);
    const K = parseInt(lines[0x0][_0x582ae1(0x138)]('\x20')[0x1]);
    const Xs = lines[0x1][_0x582ae1(0x138)]('\x20')[_0x582ae1(0x141)](x => parseInt(x));
    var result = 0x989680;
    for (var i = 0x0; i < N - K + 0x1; i++) {
        var min = Xs[i];
        var max = Xs[i + K - 0x1];
        var tmp = get_run_length(min, max);
        result = Math['min'](tmp, result);
    }
    console[_0x582ae1(0x135)](result);
}
main(require('fs')[a0_0x13be2b(0x13e)](a0_0x13be2b(0x13b), a0_0x13be2b(0x13f)));