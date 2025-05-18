var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = Arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var first = Arr['shift']()['split'](':');
    first = first[0x1]['slice'](0x0, -0x1)['split'](',');
    var F = {};
    first['forEach'](function (v) {
        F[v] = !![];
    });
    var obj = {};
    for (var i = 0x0; i < n - 0x1; i++) {
        var arr = Arr['shift']()['split'](':');
        obj[arr[0x0]] = arr[0x1]['slice'](0x0, -0x1)['split'](',');
    }
    var L = 0x0;
    while (!![]) {
        if (L == Object['keys'](F)['length'])
            break;
        L = Object['keys'](F)['length'];
        for (var k in F) {
            if (obj['hasOwnProperty'](k) && F[k]) {
                obj[k]['forEach'](function (v) {
                    F[v] = !![];
                });
                F[k] = ![];
            }
        }
    }
    var cnt = 0x0;
    for (var k in F)
        if (obj['hasOwnProperty'](k) == ![])
            cnt++;
    console['log'](cnt);
}