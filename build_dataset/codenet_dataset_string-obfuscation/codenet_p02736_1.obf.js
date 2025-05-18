var a0_0x45c15f = a0_0x5663;
(function (stringArrayFunction, comparisonValue) {
    var _0x3b67ab = a0_0x5663;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x3b67ab(0x9b)) / 0x1 * (-parseInt(_0x3b67ab(0x9f)) / 0x2) + -parseInt(_0x3b67ab(0xa1)) / 0x3 + parseInt(_0x3b67ab(0xa5)) / 0x4 + -parseInt(_0x3b67ab(0x9c)) / 0x5 * (-parseInt(_0x3b67ab(0xa2)) / 0x6) + parseInt(_0x3b67ab(0x9a)) / 0x7 * (parseInt(_0x3b67ab(0xa4)) / 0x8) + parseInt(_0x3b67ab(0x99)) / 0x9 + -parseInt(_0x3b67ab(0x95)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4229, 0xd003d));
function a0_0x5663(VOjBeO, key) {
    var stringArray = a0_0x4229();
    a0_0x5663 = function (index, key) {
        index = index - 0x95;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5663(VOjBeO, key);
}
function Main(input) {
    var _0x2b99af = a0_0x5663;
    input = input['split']('\x0a');
    for (i = 0x0; i < input[_0x2b99af(0x9e)]; i = i + 0x2) {
        var N = parseInt(input[i]);
        var a = input[i + 0x1][_0x2b99af(0x9d)]('');
        var aa = a['map'](Number);
        for (j = N; j > 0x1; j--) {
            for (k = 0x0; k < j; k++) {
                var e = Math[_0x2b99af(0x98)](aa[0x0] - aa[0x1]);
                aa[_0x2b99af(0x96)](e);
                aa['shift']();
            }
            aa[_0x2b99af(0x97)]();
        }
        console[_0x2b99af(0xa0)](aa[0x0]);
    }
}
function a0_0x4229() {
    var _0x3e4124 = [
        '4274116gCFPUI',
        '24791430DiKdTa',
        'push',
        'pop',
        'abs',
        '14272020nxLhWR',
        '27356lSQPgZ',
        '2UuFJRQ',
        '62735ZDKyJp',
        'split',
        'length',
        '959258WLEZSd',
        'log',
        '1464600xKtoSP',
        '330WoBbGa',
        'utf8',
        '2936tpjPHq'
    ];
    a0_0x4229 = function () {
        return _0x3e4124;
    };
    return a0_0x4229();
}
Main(require('fs')['readFileSync']('/dev/stdin', a0_0x45c15f(0xa3)));