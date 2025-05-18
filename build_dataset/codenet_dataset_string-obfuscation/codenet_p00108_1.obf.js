var a0_0x143c8f = a0_0x14e9;
(function (stringArrayFunction, comparisonValue) {
    var _0x118f1b = a0_0x14e9;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x118f1b(0x1c9)) / 0x1 * (-parseInt(_0x118f1b(0x1cd)) / 0x2) + parseInt(_0x118f1b(0x1cb)) / 0x3 + parseInt(_0x118f1b(0x1c6)) / 0x4 * (-parseInt(_0x118f1b(0x1d0)) / 0x5) + -parseInt(_0x118f1b(0x1c4)) / 0x6 + parseInt(_0x118f1b(0x1c3)) / 0x7 * (-parseInt(_0x118f1b(0x1c8)) / 0x8) + parseInt(_0x118f1b(0x1d1)) / 0x9 + parseInt(_0x118f1b(0x1ca)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3b34, 0xa33c5));
function a0_0x3b34() {
    var _0x403cfa = [
        'shift',
        '4zYLDuh',
        'readFileSync',
        '904NNqPFM',
        '7288YslDwJ',
        '17670580YbYaDX',
        '1554639SKrbZF',
        'map',
        '218UyieLu',
        'join',
        '/dev/stdin',
        '5875565vlPFhs',
        '9077130lcmFmU',
        '80612IeiSFP',
        '5659194sasElh'
    ];
    a0_0x3b34 = function () {
        return _0x403cfa;
    };
    return a0_0x3b34();
}
function a0_0x14e9(GGpEoa, key) {
    var stringArray = a0_0x3b34();
    a0_0x14e9 = function (index, key) {
        index = index - 0x1c3;
        var value = stringArray[index];
        return value;
    };
    return a0_0x14e9(GGpEoa, key);
}
var input = require('fs')[a0_0x143c8f(0x1c7)](a0_0x143c8f(0x1cf), 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = Arr[a0_0x143c8f(0x1c5)]();
    if (n == '0')
        break;
    var arr = Arr[a0_0x143c8f(0x1c5)]()['split']('\x20')[a0_0x143c8f(0x1cc)](Number);
    var k = 0x0;
    var S = [];
    while (!![]) {
        for (var i = 0x0; i < arr['length']; i++) {
            var cnt = 0x0;
            for (var j = 0x0; j < arr['length']; j++) {
                if (arr[i] == arr[j])
                    cnt++;
            }
            S['push'](cnt);
        }
        if (S[a0_0x143c8f(0x1ce)]('\x20') == arr[a0_0x143c8f(0x1ce)]('\x20'))
            break;
        arr = S['slice']();
        S = [];
        k++;
    }
    console['log'](k);
    console['log'](S[a0_0x143c8f(0x1ce)]('\x20'));
}