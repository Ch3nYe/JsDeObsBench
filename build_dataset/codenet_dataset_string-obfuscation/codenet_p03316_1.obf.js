var a0_0x31bf36 = a0_0x54e0;
(function (stringArrayFunction, comparisonValue) {
    var _0x4fe33c = a0_0x54e0;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x4fe33c(0xf8)) / 0x1 * (-parseInt(_0x4fe33c(0xf2)) / 0x2) + parseInt(_0x4fe33c(0xee)) / 0x3 + -parseInt(_0x4fe33c(0xf4)) / 0x4 + -parseInt(_0x4fe33c(0xf9)) / 0x5 + parseInt(_0x4fe33c(0xf6)) / 0x6 * (-parseInt(_0x4fe33c(0xf1)) / 0x7) + parseInt(_0x4fe33c(0xfa)) / 0x8 + parseInt(_0x4fe33c(0xf5)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2d14, 0x71b08));
function main(input) {
    var _0xf189e1 = a0_0x54e0;
    var inputA = input[_0xf189e1(0xfd)]()[_0xf189e1(0xf3)]('');
    var sum = 0x0;
    for (var i = 0x0; i < inputA['length']; i++) {
        sum += parseInt(inputA[i]);
    }
    if (parseInt(input) % sum == 0x0) {
        console[_0xf189e1(0xf0)](_0xf189e1(0xfc));
    } else {
        console[_0xf189e1(0xf0)]('No');
    }
}
function a0_0x2d14() {
    var _0x17ba58 = [
        'readFileSync',
        'log',
        '5482834hCYpli',
        '2mdrZut',
        'split',
        '1244924QkqtmI',
        '7568910WosxHY',
        '6HYoOwH',
        'utf8',
        '181636ZzCikg',
        '4360820qZccGo',
        '6956032hHfPRA',
        '/dev/stdin',
        'Yes',
        'toString',
        '1620597HOmrke'
    ];
    a0_0x2d14 = function () {
        return _0x17ba58;
    };
    return a0_0x2d14();
}
function a0_0x54e0(KGjejO, key) {
    var stringArray = a0_0x2d14();
    a0_0x54e0 = function (index, key) {
        index = index - 0xee;
        var value = stringArray[index];
        return value;
    };
    return a0_0x54e0(KGjejO, key);
}
main(require('fs')[a0_0x31bf36(0xef)](a0_0x31bf36(0xfb), a0_0x31bf36(0xf7)));