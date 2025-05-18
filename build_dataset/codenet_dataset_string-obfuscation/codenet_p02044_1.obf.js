var a0_0x383668 = a0_0x1c23;
(function (stringArrayFunction, comparisonValue) {
    var _0x2b053c = a0_0x1c23;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x2b053c(0xa9)) / 0x1 + -parseInt(_0x2b053c(0xab)) / 0x2 + -parseInt(_0x2b053c(0xa8)) / 0x3 + -parseInt(_0x2b053c(0xaa)) / 0x4 * (parseInt(_0x2b053c(0xae)) / 0x5) + -parseInt(_0x2b053c(0xaf)) / 0x6 * (-parseInt(_0x2b053c(0xad)) / 0x7) + parseInt(_0x2b053c(0xb6)) / 0x8 + -parseInt(_0x2b053c(0xac)) / 0x9 * (-parseInt(_0x2b053c(0xb3)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3b55, 0xb21be));
var input = require('fs')[a0_0x383668(0xb1)](a0_0x383668(0xb5), 'utf8');
var arr = input['trim']()[a0_0x383668(0xb0)]('\x0a');
while (!![]) {
    var [n, m] = arr[a0_0x383668(0xa7)]()[a0_0x383668(0xb0)]('\x20')[a0_0x383668(0xb2)](Number);
    if (n == 0x0 && m == 0x0)
        break;
    var x = m / n;
    var sum = 0x0;
    var a = arr[a0_0x383668(0xa7)]()[a0_0x383668(0xb0)]('\x20')['map'](Number);
    a['forEach'](v => {
        if (v >= x)
            sum += x;
        else
            sum += v;
    });
    console[a0_0x383668(0xb4)](sum);
}
function a0_0x1c23(bmRiAL, key) {
    var stringArray = a0_0x3b55();
    a0_0x1c23 = function (index, key) {
        index = index - 0xa7;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1c23(bmRiAL, key);
}
function a0_0x3b55() {
    var _0x2930cc = [
        '3671656jySpmz',
        '1352456xffCTr',
        '9lrZvav',
        '154861auSPwp',
        '5HIZqeD',
        '12yYUNzn',
        'split',
        'readFileSync',
        'map',
        '14318810MgoSkS',
        'log',
        '/dev/stdin',
        '9990136cmLdxX',
        'shift',
        '555531bVnqeq',
        '216041mCYLaZ'
    ];
    a0_0x3b55 = function () {
        return _0x2930cc;
    };
    return a0_0x3b55();
}