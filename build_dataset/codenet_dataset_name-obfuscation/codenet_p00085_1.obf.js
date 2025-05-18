var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
for (var i = 0x0; i < Arr['length']; i++) {
    if (Arr[i] == '0\x200')
        break;
    var arr = Arr[i]['split']('\x20')['map'](Number);
    var N = arr[0x0];
    var m = arr[0x1];
    var n = {};
    for (var j = 0x0; j < N; j++)
        n[j] = null;
    var x = 0x0;
    for (var k = 0x0; k < N; k++) {
        var y = 0x0;
        do {
            x++;
            if (x == N)
                x = 0x0;
            if (n[x] === null)
                y++;
        } while (y != m);
        n[x] = k;
    }
    console['log'](x);
}