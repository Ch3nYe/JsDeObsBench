var a0_0x560b27 = a0_0x3983;
function a0_0x3983(deEcvl, key) {
    var stringArray = a0_0x35e7();
    a0_0x3983 = function (index, key) {
        index = index - 0xc2;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3983(deEcvl, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x19c56d = a0_0x3983;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x19c56d(0xc7)) / 0x1 + parseInt(_0x19c56d(0xc3)) / 0x2 * (-parseInt(_0x19c56d(0xc4)) / 0x3) + parseInt(_0x19c56d(0xce)) / 0x4 + -parseInt(_0x19c56d(0xcc)) / 0x5 + -parseInt(_0x19c56d(0xcd)) / 0x6 + parseInt(_0x19c56d(0xc2)) / 0x7 + -parseInt(_0x19c56d(0xc9)) / 0x8 * (-parseInt(_0x19c56d(0xc6)) / 0x9);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x35e7, 0xcc0dd));
function a0_0x35e7() {
    var _0x256933 = [
        '653190DSXdZa',
        'utf8',
        '369vAlEWj',
        '648215eUBhsd',
        'readFileSync',
        '455432acvzTU',
        'log',
        'split',
        '5280320pXcyVF',
        '5142054BelgfH',
        '6169960ETKLMn',
        '2740038chLwJl',
        '8hqoBKa'
    ];
    a0_0x35e7 = function () {
        return _0x256933;
    };
    return a0_0x35e7();
}
function Main(input) {
    var _0x303993 = a0_0x3983;
    input = input[_0x303993(0xcb)]('\x20');
    var valN = input[0x0];
    var valK = input[0x1];
    if (valN < 0x3) {
        console[_0x303993(0xca)]('0');
        return;
    }
    var count = 0x0;
    for (var i = 0x0; i + 0x2 < valN; i++) {
        for (var j = 0x0; j < 0x5; j++) {
            if ((i * 0x3f + j * 0x9 + 0x51) % 0xb == valK) {
                count++;
            }
        }
    }
    console[_0x303993(0xca)](count);
}
Main(require('fs')[a0_0x560b27(0xc8)]('/dev/stdin', a0_0x560b27(0xc5)));