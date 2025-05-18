var a0_0x20270d = a0_0x1529;
(function (stringArrayFunction, comparisonValue) {
    var _0x1fe9d8 = a0_0x1529;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x1fe9d8(0xf6)) / 0x1 + -parseInt(_0x1fe9d8(0xfb)) / 0x2 + parseInt(_0x1fe9d8(0xfd)) / 0x3 * (-parseInt(_0x1fe9d8(0xee)) / 0x4) + -parseInt(_0x1fe9d8(0xf5)) / 0x5 * (-parseInt(_0x1fe9d8(0xfc)) / 0x6) + parseInt(_0x1fe9d8(0x100)) / 0x7 * (parseInt(_0x1fe9d8(0xf3)) / 0x8) + parseInt(_0x1fe9d8(0xfe)) / 0x9 * (-parseInt(_0x1fe9d8(0xff)) / 0xa) + -parseInt(_0x1fe9d8(0xf8)) / 0xb * (-parseInt(_0x1fe9d8(0xf9)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5974, 0x70bd6));
function Main(input) {
    var _0x545698 = a0_0x1529;
    input = input[_0x545698(0xf4)]('\x0a');
    var n = parseInt(input[0x0], 0xa);
    var a = input[0x1][_0x545698(0xf4)]('\x20');
    a = a['map'](str => parseInt(str, 0xa));
    var b = input[0x2]['split']('\x20');
    b = b[_0x545698(0xf7)](str => parseInt(str, 0xa));
    var count = 0x0;
    for (var i = 0x0; i < n; i++) {
        var atarget = a[i] + a[i + 0x1];
        var rest = atarget - b[i];
        if (rest < 0x0) {
            count += atarget;
            a[i + 0x1] = 0x0;
        } else {
            count += b[i];
            a[i + 0x1] = Math[_0x545698(0xf2)](rest, a[i + 0x1]);
        }
    }
    console[_0x545698(0xf0)](count);
}
function a0_0x1529(ouJQhi, key) {
    var stringArray = a0_0x5974();
    a0_0x1529 = function (index, key) {
        index = index - 0xee;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1529(ouJQhi, key);
}
function a0_0x5974() {
    var _0x1546e5 = [
        'utf8',
        'log',
        'readFileSync',
        'min',
        '1392lwBpKY',
        'split',
        '5HOxmjo',
        '684720kUGrYq',
        'map',
        '814gzDxIl',
        '27708IrqfbJ',
        '/dev/stdin',
        '786470nrQMCA',
        '3454698gUhEBB',
        '1528971psbseb',
        '99BrOFbA',
        '217390VPQjWH',
        '6937dBjtEx',
        '4dXioXM'
    ];
    a0_0x5974 = function () {
        return _0x1546e5;
    };
    return a0_0x5974();
}
Main(require('fs')[a0_0x20270d(0xf1)](a0_0x20270d(0xfa), a0_0x20270d(0xef)));