var a0_0x24b986 = a0_0x1ae1;
(function (stringArrayFunction, comparisonValue) {
    var _0x43c0c4 = a0_0x1ae1;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x43c0c4(0x1ed)) / 0x1 * (parseInt(_0x43c0c4(0x1f0)) / 0x2) + parseInt(_0x43c0c4(0x1f1)) / 0x3 + parseInt(_0x43c0c4(0x1f6)) / 0x4 + -parseInt(_0x43c0c4(0x1f7)) / 0x5 + parseInt(_0x43c0c4(0x1fc)) / 0x6 + -parseInt(_0x43c0c4(0x1fa)) / 0x7 + -parseInt(_0x43c0c4(0x1f8)) / 0x8;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5c39, 0x6eff7));
function a0_0x5c39() {
    var _0x5b3984 = [
        'join',
        'length',
        'utf8',
        '100phNOWM',
        'shift',
        'replace',
        '2480DsuzGQ',
        '542844qbfcME',
        'log',
        'readFileSync',
        'toUpperCase',
        'split',
        '2991064CUAgpm',
        '2885385upxYFm',
        '6836184rgxlBy',
        '/dev/stdin',
        '396116bLbPWD',
        'toLowerCase',
        '5340726jPOTkK'
    ];
    a0_0x5c39 = function () {
        return _0x5b3984;
    };
    return a0_0x5c39();
}
function a0_0x1ae1(VGqSEb, key) {
    var stringArray = a0_0x5c39();
    a0_0x1ae1 = function (index, key) {
        index = index - 0x1ea;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1ae1(VGqSEb, key);
}
var input = require('fs')[a0_0x24b986(0x1f3)](a0_0x24b986(0x1f9), a0_0x24b986(0x1ec));
var Arr = input[a0_0x24b986(0x1ef)](/\n$/, '')['split']('\x0a');
while (!![]) {
    var nt = Arr[a0_0x24b986(0x1ee)]()[a0_0x24b986(0x1f5)]('\x20');
    var str = nt[0x0];
    var type = nt[0x1];
    if (type == 'X')
        break;
    str = str[a0_0x24b986(0x1ef)](/^./, function (s) {
        return s['toLowerCase']();
    });
    str = str['replace'](/[A-Z]/g, function (s) {
        return '_' + s;
    });
    var arr = str[a0_0x24b986(0x1f5)]('_');
    for (var i = 0x1; i < arr[a0_0x24b986(0x1eb)]; i++) {
        arr[i] = arr[i][a0_0x24b986(0x1ef)](/./, function (s) {
            var _0x295fc5 = a0_0x24b986;
            return s[_0x295fc5(0x1f4)]();
        });
    }
    if (type == 'U') {
        arr[0x0] = arr[0x0][a0_0x24b986(0x1ef)](/^./, function (s) {
            var _0x1b4634 = a0_0x24b986;
            return s[_0x1b4634(0x1f4)]();
        });
        console['log'](arr[a0_0x24b986(0x1ea)](''));
    }
    if (type == 'L')
        console[a0_0x24b986(0x1f2)](arr['join'](''));
    if (type == 'D')
        console['log'](arr[a0_0x24b986(0x1ea)]('_')[a0_0x24b986(0x1fb)]());
}