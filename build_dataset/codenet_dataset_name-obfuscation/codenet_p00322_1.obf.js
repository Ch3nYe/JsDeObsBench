var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var x = input['trim']()['split']('\x20')['map'](Number);
var cnt = 0x0;
for (var a = 0x1; a <= 0x9; a++) {
    for (var b = 0x1; b <= 0x9; b++) {
        for (var c = 0x1; c <= 0x9; c++) {
            for (var d = 0x1; d <= 0x8; d++) {
                for (var e = 0x1; e <= 0x9; e++) {
                    for (var f = 0x1; f <= 0x9; f++) {
                        var z = (a + c + f + (b + e) * 0xa + d * 0x64 + '')['split']('')['map'](Number);
                        if (z['length'] != 0x3)
                            continue;
                        z = [
                            a,
                            b,
                            c,
                            d,
                            e,
                            f
                        ]['concat'](z);
                        var flag = z['every'](function (_0xd3ba75, _0x5de8c2) {
                            return (x[_0x5de8c2] == _0xd3ba75 || x[_0x5de8c2] == -0x1) && z['indexOf'](_0x5de8c2 + 0x1) >= 0x0;
                        });
                        if (flag)
                            cnt++;
                    }
                }
            }
        }
    }
}
console['log'](cnt);