var a0_0x57f1d8 = a0_0x29a1;
function a0_0x3114() {
    var _0x4e95a7 = [
        'abs',
        'split',
        '3737237AgMIPu',
        '4911876nVkTxJ',
        'readFileSync',
        '14515200ISxpeX',
        'max',
        '/dev/stdin',
        '8FbUxNE',
        'length',
        'map',
        '3050490tmeUPd',
        'min',
        '18611vsNZRB',
        '861693YGVuZB',
        '8AmdWxM',
        '1673984qNnlxo',
        'log'
    ];
    a0_0x3114 = function () {
        return _0x4e95a7;
    };
    return a0_0x3114();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x4df9ff = a0_0x29a1;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x4df9ff(0x153)) / 0x1 * (-parseInt(_0x4df9ff(0x155)) / 0x2) + -parseInt(_0x4df9ff(0x154)) / 0x3 + parseInt(_0x4df9ff(0x156)) / 0x4 + -parseInt(_0x4df9ff(0x151)) / 0x5 + -parseInt(_0x4df9ff(0x15b)) / 0x6 + parseInt(_0x4df9ff(0x15a)) / 0x7 * (parseInt(_0x4df9ff(0x14e)) / 0x8) + parseInt(_0x4df9ff(0x14b)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3114, 0xbd270));
function Main(input) {
    var _0x2e7428 = a0_0x29a1;
    input = input[_0x2e7428(0x159)]('\x0a');
    if (input[input[_0x2e7428(0x14f)] - 0x1] === '') {
        input['pop']();
    }
    const N = input[0x0]['split']('\x20')[0x0] - 0x0;
    const K = input[0x0]['split']('\x20')[0x1] - 0x0;
    const x = input[0x1][_0x2e7428(0x159)]('\x20')[_0x2e7428(0x150)](e => {
        return e - 0x0;
    });
    var pointer = x['findIndex'](e => {
        return e => 0x0;
    }) - K;
    if (pointer < 0x0) {
        pointer = 0x0;
    }
    var temp;
    var ret = Infinity;
    for (var i = 0x0; i < K; i++) {
        if (pointer + i + K - 0x1 >= x['length']) {
            break;
        }
        if (x[pointer + i] * x[pointer + i + K - 0x1] < 0x0) {
            temp = Math[_0x2e7428(0x152)](-x[pointer + i], x[pointer + i + K - 0x1]) - x[pointer + i] + x[pointer + i + K - 0x1];
        } else {
            temp = Math[_0x2e7428(0x14c)](Math[_0x2e7428(0x158)](x[pointer + i]), Math[_0x2e7428(0x158)](x[pointer + i + K - 0x1]));
        }
        ret = Math[_0x2e7428(0x152)](ret, temp);
    }
    console[_0x2e7428(0x157)](ret);
}
function a0_0x29a1(BdVPvN, key) {
    var stringArray = a0_0x3114();
    a0_0x29a1 = function (index, key) {
        index = index - 0x14a;
        var value = stringArray[index];
        return value;
    };
    return a0_0x29a1(BdVPvN, key);
}
Main(require('fs')[a0_0x57f1d8(0x14a)](a0_0x57f1d8(0x14d), 'utf8'));