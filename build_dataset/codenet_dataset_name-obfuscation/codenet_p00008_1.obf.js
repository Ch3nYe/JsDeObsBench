config = {
    'input': '/dev/stdin',
    'newline': '\x0a'
};
const MAX = 0x32;
map0 = [];
for (i = 0x0; i <= MAX; i++)
    map0['push'](0x0);
map1 = []['concat'](map0);
map2 = []['concat'](map1);
map3 = []['concat'](map2);
for (i = 0x0; i <= 0x9; i++)
    map0[i] = 0x1;
function expand_map(_0x3b60d4, _0x3f2918) {
    for (var _0x118144 = 0x0; _0x118144 < MAX; _0x118144++) {
        for (var _0x2ca361 = Math['max'](0x0, _0x118144 - 0x9); _0x2ca361 <= _0x118144; _0x2ca361++) {
            _0x3b60d4[_0x118144] += _0x3f2918[_0x2ca361];
        }
    }
}
expand_map(map1, map0);
expand_map(map2, map1);
expand_map(map3, map2);
require('fs')['readFileSync'](config['input'], 'ascii')['trim']()['split'](config['newline'])['forEach'](function (_0x5b3ced) {
    console['log'](map3[parseInt(_0x5b3ced)]);
});