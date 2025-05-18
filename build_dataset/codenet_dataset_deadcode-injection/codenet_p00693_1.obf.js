var a0_0x119e85 = a0_0x237f;
function a0_0x2b08() {
    var _0xd9c998 = [
        'readFileSync',
        'replace',
        'trim',
        'split',
        'shift',
        'permit',
        'forEach',
        'test',
        'join',
        'log'
    ];
    a0_0x2b08 = function () {
        return _0xd9c998;
    };
    return a0_0x2b08();
}
function a0_0x237f(QMVWyn, key) {
    var stringArray = a0_0x2b08();
    a0_0x237f = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x237f(QMVWyn, key);
}
var input = require('fs')[a0_0x119e85(0x0)]('/dev/stdin', 'utf8');
input = input[a0_0x119e85(0x1)](/\?/g, '.');
var arr = input[a0_0x119e85(0x2)]()[a0_0x119e85(0x3)]('\x0a');
while (!![]) {
    var nm = arr[a0_0x119e85(0x4)]()['split']('\x20')['map'](Number);
    var n = nm[0x0];
    var m = nm[0x1];
    if (n == 0x0 && m == 0x0)
        break;
    var rule = [];
    while (n--) {
        var ary = arr[a0_0x119e85(0x4)]()['split']('\x20');
        var flag = ary[0x0] == a0_0x119e85(0x5) ? !![] : ![];
        rule['push']([
            flag,
            new RegExp(ary[0x1] + ary[0x2])
        ]);
    }
    var ans = [];
    while (m--) {
        var packet = arr[a0_0x119e85(0x4)]()[a0_0x119e85(0x3)]('\x20');
        var str = packet[0x0] + packet[0x1];
        var flag = ![];
        rule[a0_0x119e85(0x6)](function (v) {
            var _0x519312 = a0_0x237f;
            if (v[0x0] == !![] && v[0x1][_0x519312(0x7)](str))
                flag = !![];
            else if (v[0x0] == ![] && v[0x1]['test'](str))
                flag = ![];
        });
        if (flag)
            ans['push'](packet[a0_0x119e85(0x8)]('\x20'));
    }
    console['log'](ans['length']);
    ans['forEach'](function (v) {
        var _0x42ebc9 = a0_0x237f;
        console[_0x42ebc9(0x9)](v);
    });
}