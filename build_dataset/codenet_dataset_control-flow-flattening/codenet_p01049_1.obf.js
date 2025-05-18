var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
var n = arr['shift']() - 0x0;
var [a, d] = arr['shift']()['split']('\x20')['map'](Number);
var retu = [];
for (var i = 0x0; i < n; i++) {
    retu['push'](a + i * d);
}
var m = arr['shift']() - 0x0;
for (var i = 0x0; i < m; i++) {
    var [x, y, z] = arr['shift']()['split']('\x20')['map'](Number);
    if (x == 0x0)
        [retu[y - 0x1], retu[z - 0x1]] = [
            retu[z - 0x1],
            retu[y - 0x1]
        ];
    else
        retu[y - 0x1] = retu[z - 0x1];
}
var k = arr['shift']() - 0x0;
console['log'](retu[k - 0x1]);