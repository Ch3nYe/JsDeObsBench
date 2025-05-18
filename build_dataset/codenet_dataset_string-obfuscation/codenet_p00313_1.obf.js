var a0_0x324aaa = a0_0x4c8d;
(function (stringArrayFunction, comparisonValue) {
    var _0x5c1489 = a0_0x4c8d;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x5c1489(0xe3)) / 0x1 + parseInt(_0x5c1489(0xe8)) / 0x2 * (-parseInt(_0x5c1489(0xe5)) / 0x3) + parseInt(_0x5c1489(0xd6)) / 0x4 + -parseInt(_0x5c1489(0xe4)) / 0x5 * (-parseInt(_0x5c1489(0xd8)) / 0x6) + parseInt(_0x5c1489(0xe2)) / 0x7 * (parseInt(_0x5c1489(0xdc)) / 0x8) + parseInt(_0x5c1489(0xd9)) / 0x9 * (-parseInt(_0x5c1489(0xdb)) / 0xa) + parseInt(_0x5c1489(0xda)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5481, 0x46aa5));
var input = require('fs')[a0_0x324aaa(0xd7)](a0_0x324aaa(0xe6), a0_0x324aaa(0xdf));
var arr = input['trim']()[a0_0x324aaa(0xe1)]('\x0a');
var n = arr[a0_0x324aaa(0xe0)]() - 0x0;
function a0_0x4c8d(GJOXtm, key) {
    var stringArray = a0_0x5481();
    a0_0x4c8d = function (index, key) {
        index = index - 0xd6;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4c8d(GJOXtm, key);
}
var xyz = [];
for (var i = 0x0; i <= n; i++)
    xyz[i] = [
        0x0,
        0x0,
        0x0
    ];
var x = arr[a0_0x324aaa(0xe0)]()[a0_0x324aaa(0xe1)]('\x20')['map'](Number);
var y = arr[a0_0x324aaa(0xe0)]()['split']('\x20')[a0_0x324aaa(0xde)](Number);
var z = arr['shift']()[a0_0x324aaa(0xe1)]('\x20')[a0_0x324aaa(0xde)](Number);
x[a0_0x324aaa(0xe0)]();
y[a0_0x324aaa(0xe0)]();
function a0_0x5481() {
    var _0x3f49cb = [
        'map',
        'utf8',
        'shift',
        'split',
        '35AouuPO',
        '327627pqGhuA',
        '398785VHRtrF',
        '6oLkbVP',
        '/dev/stdin',
        'log',
        '531076eanerY',
        '935908txPFiU',
        'readFileSync',
        '6yOhCUI',
        '12447xPvGlm',
        '8843098FySSWs',
        '2680lyzWWc',
        '641824PubqiG',
        'forEach'
    ];
    a0_0x5481 = function () {
        return _0x3f49cb;
    };
    return a0_0x5481();
}
z[a0_0x324aaa(0xe0)]();
x[a0_0x324aaa(0xdd)](v => {
    xyz[v][0x0] = 0x1;
});
y[a0_0x324aaa(0xdd)](v => {
    xyz[v][0x1] = 0x1;
});
z[a0_0x324aaa(0xdd)](v => {
    xyz[v][0x2] = 0x1;
});
xyz[a0_0x324aaa(0xe0)]();
var cnt = 0x0;
xyz[a0_0x324aaa(0xdd)](v => {
    if (v[0x0] == 0x0 && v[0x2] == 0x1)
        cnt++;
    else if (v[0x1] == 0x1 && v[0x2] == 0x1)
        cnt++;
});
console[a0_0x324aaa(0xe7)](cnt);