var a0_0x555edd = a0_0x172c;
(function (stringArrayFunction, comparisonValue) {
    var _0x40072e = a0_0x172c;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x40072e(0x188)) / 0x1 + -parseInt(_0x40072e(0x180)) / 0x2 + -parseInt(_0x40072e(0x186)) / 0x3 + parseInt(_0x40072e(0x182)) / 0x4 * (-parseInt(_0x40072e(0x185)) / 0x5) + parseInt(_0x40072e(0x184)) / 0x6 + -parseInt(_0x40072e(0x17e)) / 0x7 + parseInt(_0x40072e(0x183)) / 0x8;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x7523, 0x22fb1));
function Main(input) {
    var _0x3719ac = a0_0x172c;
    input = input[_0x3719ac(0x187)]('\x0a');
    tmp = input[0x0][_0x3719ac(0x187)]('\x20');
    var N = parseInt(tmp[0x0]);
    var Q = parseInt(tmp[0x1]);
    var minRows = Array(N - 0x2);
    var minCols = Array(N - 0x2);
    minRows[_0x3719ac(0x181)](N - 0x2);
    minCols[_0x3719ac(0x181)](N - 0x2);
    var result = BigInt((N - 0x2) * (N - 0x2));
    for (var i = 0x0; i < Q; i++) {
        var query = input[i + 0x1][_0x3719ac(0x187)]('\x20');
        var q_1 = parseInt(query[0x0]);
        var q_2 = parseInt(query[0x1]);
        var myArray = minRows;
        var myArray2 = minCols;
        var index = q_2 - 0x2;
        var closest = minCols[index];
        if (q_1 == 0x1) {
            myArray = minCols;
            myArray2 = minRows;
            closest = minRows[index];
        }
        result -= BigInt(closest);
        for (var j = 0x0; j < closest; j++) {
            if (myArray[j] > index)
                myArray[j] = index;
        }
        myArray2[index] = 0x0;
    }
    console[_0x3719ac(0x17f)]('%d', Number(result));
}
function a0_0x172c(UOerly, key) {
    var stringArray = a0_0x7523();
    a0_0x172c = function (index, key) {
        index = index - 0x17d;
        var value = stringArray[index];
        return value;
    };
    return a0_0x172c(UOerly, key);
}
Main(require('fs')[a0_0x555edd(0x17d)]('/dev/stdin', 'utf8'));
function a0_0x7523() {
    var _0x43aea6 = [
        'fill',
        '26416FfsLDT',
        '4356136SnouGA',
        '1018146JcrJVc',
        '140TWUgVm',
        '771636oSyohc',
        'split',
        '102779phVcps',
        'readFileSync',
        '60634RJdhsp',
        'log',
        '34724EvUgXN'
    ];
    a0_0x7523 = function () {
        return _0x43aea6;
    };
    return a0_0x7523();
}