function a0_0x1aac(BegqxP, key) {
    var stringArray = a0_0x136e();
    a0_0x1aac = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1aac(BegqxP, key);
}
function a0_0x136e() {
    var _0x242530 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'split',
        'shift',
        'replace',
        'repeat',
        'map',
        'join',
        'log'
    ];
    a0_0x136e = function () {
        return _0x242530;
    };
    return a0_0x136e();
}
var a0_0x4ebfa2 = a0_0x1aac;
var input = require('fs')[a0_0x4ebfa2(0x0)](a0_0x4ebfa2(0x1), a0_0x4ebfa2(0x2));
var data = input['trim']()[a0_0x4ebfa2(0x3)]('\x0a');
while (!![]) {
    var str = data[a0_0x4ebfa2(0x4)]();
    if (str == '#')
        break;
    str = str[a0_0x4ebfa2(0x5)](/\d/g, function (v) {
        var _0x41140b = a0_0x1aac;
        return 'n'[_0x41140b(0x6)](v - 0x0);
    });
    var arr = str[a0_0x4ebfa2(0x3)]('/');
    arr = arr[a0_0x4ebfa2(0x7)](v => v[a0_0x4ebfa2(0x3)](''));
    var [a, b, c, d] = data[a0_0x4ebfa2(0x4)]()[a0_0x4ebfa2(0x3)]('\x20')[a0_0x4ebfa2(0x7)](Number);
    arr[a - 0x1][b - 0x1] = 'n';
    arr[c - 0x1][d - 0x1] = 'b';
    arr = arr['map'](v => v['join'](''));
    str = arr[a0_0x4ebfa2(0x8)]('/');
    str = str[a0_0x4ebfa2(0x5)](/n+/g, function (v) {
        return v['length'];
    });
    console[a0_0x4ebfa2(0x9)](str);
}