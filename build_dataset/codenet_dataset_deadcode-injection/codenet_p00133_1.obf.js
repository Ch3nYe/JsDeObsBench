var a0_0x59d355 = a0_0x84f9;
function move(yx) {
    var arr = [];
    for (var y = 0x0; y < 0x8; y++)
        arr[y] = [];
    for (var y = 0x0; y < 0x8; y++) {
        for (var x = 0x0; x < 0x8; x++) {
            arr[y][x] = yx[0x7 - x][y];
        }
    }
    return arr;
}
function a0_0x84f9(CnfffL, key) {
    var stringArray = a0_0x306a();
    a0_0x84f9 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x84f9(CnfffL, key);
}
var input = require('fs')[a0_0x59d355(0x0)]('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var yx = [];
for (var i = 0x0; i < 0x8; i++)
    yx['push'](Arr[i][a0_0x59d355(0x1)](''));
yx = move(yx);
function a0_0x306a() {
    var _0x57f422 = [
        'readFileSync',
        'split',
        '90\x0a',
        'replace',
        'join',
        'log',
        '270\x0a'
    ];
    a0_0x306a = function () {
        return _0x57f422;
    };
    return a0_0x306a();
}
console['log'](a0_0x59d355(0x2) + yx['join']('\x0a')[a0_0x59d355(0x3)](/\,/g, ''));
yx = move(yx);
console['log']('180\x0a' + yx[a0_0x59d355(0x4)]('\x0a')[a0_0x59d355(0x3)](/\,/g, ''));
yx = move(yx);
console[a0_0x59d355(0x5)](a0_0x59d355(0x6) + yx[a0_0x59d355(0x4)]('\x0a')['replace'](/\,/g, ''));