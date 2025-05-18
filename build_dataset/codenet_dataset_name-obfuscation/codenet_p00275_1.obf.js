var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var N = Arr['shift']() - 0x0;
    if (N == 0x0)
        break;
    var n = [];
    var p = 0x0;
    for (var i = 0x0; i < N; i++)
        n[i] = 0x0;
    var str = Arr['shift']();
    for (var i = 0x0; i < str['length']; i++) {
        var v = str[i];
        var j = i % N;
        if (v == 'M')
            n[j]++;
        if (v == 'S') {
            p += n[j] + 0x1;
            n[j] = 0x0;
        }
        if (v == 'L') {
            n[j] += p + 0x1;
            p = 0x0;
        }
    }
    n['sort'](function (_0x46b608, _0x1d242e) {
        return _0x46b608 - _0x1d242e;
    });
    console['log'](n['join']('\x20') + '\x20' + p);
}