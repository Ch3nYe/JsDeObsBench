var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
var n = arr['shift']() - 0x0;
var xyz = [];
for (var i = 0x0; i <= n; i++)
    xyz[i] = [
        0x0,
        0x0,
        0x0
    ];
var x = arr['shift']()['split']('\x20')['map'](Number);
var y = arr['shift']()['split']('\x20')['map'](Number);
var z = arr['shift']()['split']('\x20')['map'](Number);
x['shift']();
y['shift']();
z['shift']();
x['forEach'](v => {
    xyz[v][0x0] = 0x1;
});
y['forEach'](v => {
    xyz[v][0x1] = 0x1;
});
z['forEach'](v => {
    xyz[v][0x2] = 0x1;
});
xyz['shift']();
var cnt = 0x0;
xyz['forEach'](v => {
    var lcqbew = {
        'AGXrW': function (x, y) {
            return x == y;
        },
        'TdLVr': function (x, y) {
            return x == y;
        }
    };
    if (lcqbew['AGXrW'](v[0x0], 0x0) && lcqbew['AGXrW'](v[0x2], 0x1))
        cnt++;
    else if (lcqbew['TdLVr'](v[0x1], 0x1) && v[0x2] == 0x1)
        cnt++;
});
console['log'](cnt);