function a0_0x49be() {
    var _0x4be329 = [
        'forEach',
        '379944lyXdvZ',
        'test',
        'readFileSync',
        '872916MfwGju',
        'join',
        '1552whTPbP',
        '403794vbKjTp',
        'permit',
        'push',
        'shift',
        '522150RZYDNu',
        'length',
        '21yiqbiP',
        '/dev/stdin',
        '50921VMAiul',
        'split',
        '11385vWeRZJ',
        'log',
        'map',
        '322475kBjVIY'
    ];
    a0_0x49be = function () {
        return _0x4be329;
    };
    return a0_0x49be();
}
var a0_0x51cc1a = a0_0x1b5a;
(function (stringArrayFunction, comparisonValue) {
    var _0x289b84 = a0_0x1b5a;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x289b84(0x9b)) / 0x1 + -parseInt(_0x289b84(0x97)) / 0x2 + parseInt(_0x289b84(0x93)) / 0x3 + parseInt(_0x289b84(0x90)) / 0x4 + -parseInt(_0x289b84(0xa0)) / 0x5 + -parseInt(_0x289b84(0xa2)) / 0x6 * (parseInt(_0x289b84(0x99)) / 0x7) + parseInt(_0x289b84(0x92)) / 0x8 * (parseInt(_0x289b84(0x9d)) / 0x9);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x49be, 0x209f0));
var input = require('fs')[a0_0x51cc1a(0xa4)](a0_0x51cc1a(0x9a), 'utf8');
function a0_0x1b5a(wuFlHb, key) {
    var stringArray = a0_0x49be();
    a0_0x1b5a = function (index, key) {
        index = index - 0x90;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1b5a(wuFlHb, key);
}
input = input['replace'](/\?/g, '.');
var arr = input['trim']()[a0_0x51cc1a(0x9c)]('\x0a');
while (!![]) {
    var nm = arr['shift']()['split']('\x20')[a0_0x51cc1a(0x9f)](Number);
    var n = nm[0x0];
    var m = nm[0x1];
    if (n == 0x0 && m == 0x0)
        break;
    var rule = [];
    while (n--) {
        var ary = arr[a0_0x51cc1a(0x96)]()['split']('\x20');
        var flag = ary[0x0] == a0_0x51cc1a(0x94) ? !![] : ![];
        rule[a0_0x51cc1a(0x95)]([
            flag,
            new RegExp(ary[0x1] + ary[0x2])
        ]);
    }
    var ans = [];
    while (m--) {
        var packet = arr['shift']()['split']('\x20');
        var str = packet[0x0] + packet[0x1];
        var flag = ![];
        rule[a0_0x51cc1a(0xa1)](function (v) {
            var _0x340459 = a0_0x51cc1a;
            if (v[0x0] == !![] && v[0x1][_0x340459(0xa3)](str))
                flag = !![];
            else if (v[0x0] == ![] && v[0x1][_0x340459(0xa3)](str))
                flag = ![];
        });
        if (flag)
            ans['push'](packet[a0_0x51cc1a(0x91)]('\x20'));
    }
    console[a0_0x51cc1a(0x9e)](ans[a0_0x51cc1a(0x98)]);
    ans[a0_0x51cc1a(0xa1)](function (v) {
        console['log'](v);
    });
}