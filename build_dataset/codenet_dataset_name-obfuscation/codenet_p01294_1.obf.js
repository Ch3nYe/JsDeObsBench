var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var [n, d] = arr['shift']()['split']('\x20')['map'](Number);
    if (n == 0x0 && d == 0x0)
        break;
    var S = [];
    var C = [];
    for (var i = 0x0; i < n; i++) {
        var mc = arr[i]['split']('\x20');
        mc['shift']();
        var c = mc['map'](Number)['reverse']();
        var sum = c['length'] != 0x0 ? c['reduce']((_0x1aa541, _0x200b2f) => _0x1aa541 + _0x200b2f) : 0x0;
        S[i] = sum;
        C[i] = c;
    }
    while (!![]) {
        var f = ![];
        for (var i = 0x0; i < S['length']; i++) {
            if (S[i] == 0x0)
                continue;
            S[i] -= C[i][0x0];
            if (Math['max'](...S) - Math['min'](...S) <= d) {
                C[i]['shift']();
                f = !![];
                break;
            } else {
                S[i] += C[i][0x0];
            }
        }
        if (f == ![])
            break;
    }
    var sum = S['reduce']((_0x109b6e, _0x1adbbb) => _0x109b6e + _0x1adbbb);
    if (sum == 0x0)
        console['log']('Yes');
    else
        console['log']('No');
    arr = arr['slice'](n);
}