var a0_0x3defec = a0_0x568a;
(function (stringArrayFunction, comparisonValue) {
    var _0x39ea71 = a0_0x568a;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x39ea71(0xa0)) / 0x1 + -parseInt(_0x39ea71(0x9a)) / 0x2 + -parseInt(_0x39ea71(0xa7)) / 0x3 * (-parseInt(_0x39ea71(0xa9)) / 0x4) + -parseInt(_0x39ea71(0xa8)) / 0x5 + parseInt(_0x39ea71(0x9e)) / 0x6 * (parseInt(_0x39ea71(0xa3)) / 0x7) + parseInt(_0x39ea71(0xa1)) / 0x8 * (-parseInt(_0x39ea71(0x9c)) / 0x9) + parseInt(_0x39ea71(0xa5)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x13d2, 0x3b107));
var input = require('fs')[a0_0x3defec(0x9f)]('/dev/stdin', 'utf8');
function a0_0x568a(oFZzqN, key) {
    var stringArray = a0_0x13d2();
    a0_0x568a = function (index, key) {
        index = index - 0x99;
        var value = stringArray[index];
        return value;
    };
    return a0_0x568a(oFZzqN, key);
}
var Arr = input[a0_0x3defec(0xa6)]()[a0_0x3defec(0xa2)]('\x0a');
var obj = {};
function a0_0x13d2() {
    var _0x4d0cd6 = [
        'map',
        '10129390pzPxhV',
        'trim',
        '18EaAYQL',
        '1612190kiSWGe',
        '50836TtkVCi',
        'push',
        '926080NdISzB',
        'length',
        '403416inLRiO',
        'log',
        '144738uCKzhC',
        'readFileSync',
        '475301WbcBIU',
        '8WFhSzi',
        'split',
        '133pxLitm'
    ];
    a0_0x13d2 = function () {
        return _0x4d0cd6;
    };
    return a0_0x13d2();
}
for (var i = 0x0; i < Arr[a0_0x3defec(0x9b)]; i++) {
    var arr = Arr[i]['split']('\x20')[a0_0x3defec(0xa4)](Number);
    if (i != 0x0 && arr[a0_0x3defec(0x9b)] == 0x1) {
        var keys = [];
        for (var k in obj)
            keys[a0_0x3defec(0x99)](k - 0x0);
        var cnt = 0x0;
        for (var j = 0x0; j < keys['length']; j++) {
            if (obj[keys[j + '']] >= 0xf4240) {
                console[a0_0x3defec(0x9d)](keys[j + '']);
                cnt++;
            }
        }
        if (cnt == 0x0)
            console[a0_0x3defec(0x9d)]('NA');
        if (arr[0x0] == 0x0)
            break;
        obj = {};
    } else if (arr[a0_0x3defec(0x9b)] == 0x3) {
        if (!obj['hasOwnProperty'](arr[0x0]))
            obj[arr[0x0]] = arr[0x1] * arr[0x2];
        else
            obj[arr[0x0]] += arr[0x1] * arr[0x2];
    }
}