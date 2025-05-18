var a0_0x2a5d44 = a0_0xb2bc;
(function (stringArrayFunction, comparisonValue) {
    var _0xc44c04 = a0_0xb2bc;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0xc44c04(0x112)) / 0x1 + -parseInt(_0xc44c04(0x118)) / 0x2 * (parseInt(_0xc44c04(0x10c)) / 0x3) + parseInt(_0xc44c04(0x10e)) / 0x4 * (parseInt(_0xc44c04(0x109)) / 0x5) + -parseInt(_0xc44c04(0x110)) / 0x6 * (-parseInt(_0xc44c04(0x10b)) / 0x7) + -parseInt(_0xc44c04(0x10a)) / 0x8 * (parseInt(_0xc44c04(0x107)) / 0x9) + parseInt(_0xc44c04(0x115)) / 0xa + parseInt(_0xc44c04(0x10f)) / 0xb * (-parseInt(_0xc44c04(0x114)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x44f0, 0x3e3d3));
function Main(input) {
    var _0x3d0880 = a0_0xb2bc;
    input = input[_0x3d0880(0x119)]('\x0a');
    var s = input[0x0];
    if (s[_0x3d0880(0x111)](/BW/g)) {
        var l1 = s[_0x3d0880(0x111)](/BW/g)[_0x3d0880(0x117)];
    } else {
        l1 = 0x0;
    }
    if (s[_0x3d0880(0x111)](/WB/g)) {
        var l2 = s[_0x3d0880(0x111)](/WB/g)[_0x3d0880(0x117)];
    } else {
        l2 = 0x0;
    }
    console[_0x3d0880(0x116)]('%s', l1 + l2);
}
function a0_0x44f0() {
    var _0x117ed8 = [
        'log',
        'length',
        '20494norZJn',
        'split',
        '18wiIJIq',
        'readFileSync',
        '78005CTdfQl',
        '1508624mwAfCA',
        '938XnVNbz',
        '15shYcKL',
        '/dev/stdin',
        '16DThFQn',
        '1529fPuWqO',
        '17394myJRaD',
        'match',
        '12343gTAFEh',
        'utf8',
        '16836OuokQu',
        '4398120fgWkZu'
    ];
    a0_0x44f0 = function () {
        return _0x117ed8;
    };
    return a0_0x44f0();
}
function a0_0xb2bc(WpKxwI, key) {
    var stringArray = a0_0x44f0();
    a0_0xb2bc = function (index, key) {
        index = index - 0x107;
        var value = stringArray[index];
        return value;
    };
    return a0_0xb2bc(WpKxwI, key);
}
Main(require('fs')[a0_0x2a5d44(0x108)](a0_0x2a5d44(0x10d), a0_0x2a5d44(0x113)));