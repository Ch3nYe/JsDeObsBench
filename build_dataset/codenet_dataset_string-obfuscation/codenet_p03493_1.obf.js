var a0_0x4cf743 = a0_0x343e;
function a0_0x4236() {
    var _0x1f007a = [
        'log',
        'utf8',
        '2916249NgdXLb',
        '47zEIVao',
        '8605256ifbaWe',
        '6MPNdkf',
        'split',
        '68886qYOeBb',
        'toString',
        'readFileSync',
        '3994662ruuJUZ',
        '5063255MACvIV',
        '971772mUuCSn',
        '23235885IputHC'
    ];
    a0_0x4236 = function () {
        return _0x1f007a;
    };
    return a0_0x4236();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x59dda6 = a0_0x343e;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x59dda6(0x17a)) / 0x1 * (parseInt(_0x59dda6(0x17e)) / 0x2) + -parseInt(_0x59dda6(0x179)) / 0x3 + parseInt(_0x59dda6(0x175)) / 0x4 + -parseInt(_0x59dda6(0x174)) / 0x5 * (parseInt(_0x59dda6(0x17c)) / 0x6) + parseInt(_0x59dda6(0x173)) / 0x7 + parseInt(_0x59dda6(0x17b)) / 0x8 + parseInt(_0x59dda6(0x176)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4236, 0xd3c94));
function a0_0x343e(LjiXUO, key) {
    var stringArray = a0_0x4236();
    a0_0x343e = function (index, key) {
        index = index - 0x172;
        var value = stringArray[index];
        return value;
    };
    return a0_0x343e(LjiXUO, key);
}
function Main(input) {
    var _0x2dc4d7 = a0_0x343e;
    var args = input[_0x2dc4d7(0x17d)]('\x20');
    var num = parseInt(args[0x0], 0xa);
    var str = num[_0x2dc4d7(0x17f)](0xa);
    var count = 0x0;
    for (var i = 0x0; i < str['length']; i++) {
        if (str[i] == '1') {
            count += 0x1;
        }
    }
    console[_0x2dc4d7(0x177)](count);
}
Main(require('fs')[a0_0x4cf743(0x172)]('/dev/stdin', a0_0x4cf743(0x178)));