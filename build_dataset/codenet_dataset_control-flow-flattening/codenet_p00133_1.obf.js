function move(yx) {
    var zOJvDX = {
        'wEkzz': function (x, y) {
            return x < y;
        },
        'ZoBxQ': function (x, y) {
            return x - y;
        }
    };
    var arr = [];
    for (var y = 0x0; zOJvDX['wEkzz'](y, 0x8); y++)
        arr[y] = [];
    for (var y = 0x0; zOJvDX['wEkzz'](y, 0x8); y++) {
        for (var x = 0x0; x < 0x8; x++) {
            arr[y][x] = yx[zOJvDX['ZoBxQ'](0x7, x)][y];
        }
    }
    return arr;
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var yx = [];
for (var i = 0x0; i < 0x8; i++)
    yx['push'](Arr[i]['split'](''));
yx = move(yx);
console['log']('90\x0a' + yx['join']('\x0a')['replace'](/\,/g, ''));
yx = move(yx);
console['log']('180\x0a' + yx['join']('\x0a')['replace'](/\,/g, ''));
yx = move(yx);
console['log']('270\x0a' + yx['join']('\x0a')['replace'](/\,/g, ''));