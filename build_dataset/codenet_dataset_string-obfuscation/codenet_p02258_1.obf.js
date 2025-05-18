function a0_0x1061() {
    var _0x44681d = [
        '18974358HngVeV',
        '1839649FxlNdm',
        '1454102ZwhuxR',
        'log',
        '3433284jEwlJO',
        'readFileSync',
        '462FbvSAW',
        '11COhhkW',
        '81280UCKuVq',
        '2876GUcWLB',
        '1551kHQDyi',
        '10TRSqDO',
        'split',
        '48HvkgXo',
        '15570084huliLx',
        'MAX_VALUE',
        '1LTsjsa'
    ];
    a0_0x1061 = function () {
        return _0x44681d;
    };
    return a0_0x1061();
}
function a0_0x2ce6(zsgpBf, key) {
    var stringArray = a0_0x1061();
    a0_0x2ce6 = function (index, key) {
        index = index - 0x7d;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2ce6(zsgpBf, key);
}
var a0_0x24e7b8 = a0_0x2ce6;
(function (stringArrayFunction, comparisonValue) {
    var _0x728904 = a0_0x2ce6;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x728904(0x80)) / 0x1 * (parseInt(_0x728904(0x83)) / 0x2) + parseInt(_0x728904(0x8b)) / 0x3 * (parseInt(_0x728904(0x8a)) / 0x4) + -parseInt(_0x728904(0x89)) / 0x5 * (-parseInt(_0x728904(0x87)) / 0x6) + -parseInt(_0x728904(0x82)) / 0x7 * (-parseInt(_0x728904(0x7d)) / 0x8) + -parseInt(_0x728904(0x85)) / 0x9 * (parseInt(_0x728904(0x8c)) / 0xa) + -parseInt(_0x728904(0x88)) / 0xb * (parseInt(_0x728904(0x7e)) / 0xc) + -parseInt(_0x728904(0x81)) / 0xd;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1061, 0xc092b));
function main(input) {
    var _0xd6d4a6 = a0_0x2ce6;
    input = input[_0xd6d4a6(0x8d)]('\x0a');
    var values = input['map'](function (v) {
        return parseInt(v);
    });
    var min = Number[_0xd6d4a6(0x7f)], val = -Number[_0xd6d4a6(0x7f)];
    var N = values[0x0];
    for (var i = 0x1; i <= N - 0x1; i++) {
        if (min >= values[i]) {
            min = values[i];
        }
        if (values[i + 0x1] - min >= val) {
            val = values[i + 0x1] - min;
        }
    }
    console[_0xd6d4a6(0x84)](val);
    return val;
}
main(require('fs')[a0_0x24e7b8(0x86)]('/dev/stdin', 'utf8'));