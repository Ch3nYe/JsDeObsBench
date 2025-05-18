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
function expand_map(map, smaller) {
    var yGAZkr = {
        'bLpUh': function (x, y) {
            return x < y;
        },
        'HIeir': function (x, y) {
            return x - y;
        },
        'iypKR': function (x, y) {
            return x <= y;
        }
    };
    for (var i = 0x0; yGAZkr['bLpUh'](i, MAX); i++) {
        for (var j = Math['max'](0x0, yGAZkr['HIeir'](i, 0x9)); yGAZkr['iypKR'](j, i); j++) {
            map[i] += smaller[j];
        }
    }
}
expand_map(map1, map0);
expand_map(map2, map1);
expand_map(map3, map2);
require('fs')['readFileSync'](config['input'], 'ascii')['trim']()['split'](config['newline'])['forEach'](function (line) {
    console['log'](map3[parseInt(line)]);
});