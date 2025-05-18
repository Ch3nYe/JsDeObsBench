var a0_0x5d91fa = a0_0x2745;
function a0_0x2745(txlRbi, key) {
    var stringArray = a0_0x2b82();
    a0_0x2745 = function (index, key) {
        index = index - 0x10c;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2745(txlRbi, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x1f3fdf = a0_0x2745;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x1f3fdf(0x114)) / 0x1 * (parseInt(_0x1f3fdf(0x11c)) / 0x2) + parseInt(_0x1f3fdf(0x113)) / 0x3 * (parseInt(_0x1f3fdf(0x112)) / 0x4) + -parseInt(_0x1f3fdf(0x11b)) / 0x5 * (-parseInt(_0x1f3fdf(0x11e)) / 0x6) + parseInt(_0x1f3fdf(0x10e)) / 0x7 + parseInt(_0x1f3fdf(0x10f)) / 0x8 * (parseInt(_0x1f3fdf(0x118)) / 0x9) + parseInt(_0x1f3fdf(0x11a)) / 0xa * (-parseInt(_0x1f3fdf(0x10d)) / 0xb) + -parseInt(_0x1f3fdf(0x110)) / 0xc * (parseInt(_0x1f3fdf(0x116)) / 0xd);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2b82, 0x826ee));
function a0_0x2b82() {
    var _0x1ccd1e = [
        'readFileSync',
        '11pPvbMA',
        '7162330NLCuUA',
        '8zmsqaQ',
        '60JYAnVU',
        'split',
        '4zcmpTM',
        '2282109RBLeYy',
        '1QrlnJV',
        'trim',
        '1351571tXRemG',
        'log',
        '5480883tZmPTs',
        'length',
        '7835590lqqSIw',
        '122495gGkWtC',
        '1404452piXSnz',
        '/dev/stdin',
        '36OQHEHr'
    ];
    a0_0x2b82 = function () {
        return _0x1ccd1e;
    };
    return a0_0x2b82();
}
function Main(input) {
    var _0x724060 = a0_0x2745;
    input = input[_0x724060(0x111)]('\x0a');
    var arr = input[0x1]['split']('\x20')['map'](Number);
    var m = 0x0;
    var n = 0x0;
    for (var i = 0x0; i < arr[_0x724060(0x119)]; i++) {
        if (arr[i] % 0x2 == 0x0)
            m++;
        else
            n++;
    }
    console[_0x724060(0x117)](n % 0x2 == 0x0 && (n / 0x2 + m) % 0x2 == 0x0 ? 'YES' : 'NO');
}
Main(require('fs')[a0_0x5d91fa(0x10c)](a0_0x5d91fa(0x11d), 'utf8')[a0_0x5d91fa(0x115)]());