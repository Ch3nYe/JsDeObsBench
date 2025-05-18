var a0_0x3f6588 = a0_0x5b3b;
function a0_0x5b3b(KjDKIv, key) {
    var stringArray = a0_0x28ba();
    a0_0x5b3b = function (index, key) {
        index = index - 0x1e3;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5b3b(KjDKIv, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x51f91b = a0_0x5b3b;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x51f91b(0x1f5)) / 0x1 * (parseInt(_0x51f91b(0x1f8)) / 0x2) + parseInt(_0x51f91b(0x1f2)) / 0x3 * (parseInt(_0x51f91b(0x1e5)) / 0x4) + -parseInt(_0x51f91b(0x1e7)) / 0x5 + parseInt(_0x51f91b(0x1e9)) / 0x6 + -parseInt(_0x51f91b(0x1f0)) / 0x7 * (parseInt(_0x51f91b(0x1ec)) / 0x8) + parseInt(_0x51f91b(0x1eb)) / 0x9 * (parseInt(_0x51f91b(0x1f9)) / 0xa) + parseInt(_0x51f91b(0x1f1)) / 0xb * (-parseInt(_0x51f91b(0x1e6)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x28ba, 0xc6287));
var input = require('fs')[a0_0x3f6588(0x1f3)](a0_0x3f6588(0x1f7), a0_0x3f6588(0x1ed));
var arr = input['trim']()[a0_0x3f6588(0x1f6)]('\x0a');
function a0_0x28ba() {
    var _0x4b4a31 = [
        '000',
        'push',
        '76CYyXnl',
        '2138244RzUhzC',
        '6377760QlSvcM',
        'join',
        '6978132tIsKmo',
        'log',
        '36TTkRzE',
        '1067320SpTBIZ',
        'utf8',
        'shift',
        'map',
        '77IGIalI',
        '55HEbdHL',
        '217149GpoYoW',
        'readFileSync',
        'length',
        '19244CNaBSb',
        'split',
        '/dev/stdin',
        '118lQgDwd',
        '1930030IjkNwz'
    ];
    a0_0x28ba = function () {
        return _0x4b4a31;
    };
    return a0_0x28ba();
}
while (!![]) {
    var nlr = arr['shift']()[a0_0x3f6588(0x1f6)]('\x20')[a0_0x3f6588(0x1ef)](Number);
    if (nlr[a0_0x3f6588(0x1e8)]('') == a0_0x3f6588(0x1e3))
        break;
    var [n, l, r] = [
        nlr[0x0],
        nlr[0x1],
        nlr[0x2]
    ];
    var A = [];
    for (var i = 0x0; i < n; i++)
        A[a0_0x3f6588(0x1e4)](arr[a0_0x3f6588(0x1ee)]() - 0x0);
    var cnt = 0x0;
    for (var x = l; x <= r; x++) {
        var flag = !![];
        for (var i = 0x0; i < A[a0_0x3f6588(0x1f4)]; i++) {
            if (x % A[i] == 0x0) {
                flag = ![];
                if ((i + 0x1) % 0x2 != 0x0)
                    cnt++;
                break;
            }
        }
        if (flag && n % 0x2 == 0x0)
            cnt++;
    }
    console[a0_0x3f6588(0x1ea)](cnt);
}