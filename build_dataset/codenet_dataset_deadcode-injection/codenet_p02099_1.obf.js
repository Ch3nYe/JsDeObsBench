var a0_0x2a14ac = a0_0x4be9;
var input = require('fs')[a0_0x2a14ac(0x0)]('/dev/stdin', a0_0x2a14ac(0x1));
var arr = input[a0_0x2a14ac(0x2)]()['split']('\x0a');
var n = arr['shift']() - 0x0;
function a0_0x4be9(ECbYCu, key) {
    var stringArray = a0_0x2f84();
    a0_0x4be9 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4be9(ECbYCu, key);
}
arr = arr[a0_0x2a14ac(0x3)](v => v[a0_0x2a14ac(0x4)]('.', ''))['map'](Number);
var a = [];
for (var i = 0x0; i <= 0xfa0; i++)
    a[i] = 0x0;
arr[a0_0x2a14ac(0x5)](v => a[v]++);
var ans = [];
var s = [];
s[0x0] = a[0x0];
for (var i = 0x1; i <= 0xfa0; i++)
    s[i] = s[i - 0x1] + a[i];
function a0_0x2f84() {
    var _0x5cca03 = [
        'readFileSync',
        'utf8',
        'trim',
        'map',
        'replace',
        'forEach',
        'push',
        'log',
        'join'
    ];
    a0_0x2f84 = function () {
        return _0x5cca03;
    };
    return a0_0x2f84();
}
arr[a0_0x2a14ac(0x5)](v => {
    var _0x3a7c73 = a0_0x4be9;
    var point = 0x0;
    point += a[v] - 0x1;
    if (v != 0x0)
        point += s[v - 0x1] * 0x3;
    ans[_0x3a7c73(0x6)](point);
});
console[a0_0x2a14ac(0x7)](ans[a0_0x2a14ac(0x8)]('\x0a'));