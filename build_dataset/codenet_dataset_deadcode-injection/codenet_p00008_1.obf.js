var a0_0x5176b2 = a0_0x1f1f;
config = {
    'input': a0_0x5176b2(0x0),
    'newline': '\x0a'
};
function a0_0x1f1f(VvulUk, key) {
    var stringArray = a0_0x18f2();
    a0_0x1f1f = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1f1f(VvulUk, key);
}
const MAX = 0x32;
function a0_0x18f2() {
    var _0x3d68e8 = [
        '/dev/stdin',
        'concat',
        'readFileSync',
        'input',
        'split',
        'newline',
        'log'
    ];
    a0_0x18f2 = function () {
        return _0x3d68e8;
    };
    return a0_0x18f2();
}
map0 = [];
for (i = 0x0; i <= MAX; i++)
    map0['push'](0x0);
map1 = [][a0_0x5176b2(0x1)](map0);
map2 = [][a0_0x5176b2(0x1)](map1);
map3 = [][a0_0x5176b2(0x1)](map2);
for (i = 0x0; i <= 0x9; i++)
    map0[i] = 0x1;
function expand_map(map, smaller) {
    for (var i = 0x0; i < MAX; i++) {
        for (var j = Math['max'](0x0, i - 0x9); j <= i; j++) {
            map[i] += smaller[j];
        }
    }
}
expand_map(map1, map0);
expand_map(map2, map1);
expand_map(map3, map2);
require('fs')[a0_0x5176b2(0x2)](config[a0_0x5176b2(0x3)], 'ascii')['trim']()[a0_0x5176b2(0x4)](config[a0_0x5176b2(0x5)])['forEach'](function (line) {
    var _0x2fc1c7 = a0_0x1f1f;
    console[_0x2fc1c7(0x6)](map3[parseInt(line)]);
});