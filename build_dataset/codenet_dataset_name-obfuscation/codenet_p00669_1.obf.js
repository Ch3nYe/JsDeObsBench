function maxCards(_0x18a428, _0x10f1cf) {
    for (var _0x470f99 = 0x0; _0x470f99 < n - (k - 0x1); _0x470f99++) {
        var _0x463143 = 0x1;
        var _0x217d75 = 0x0;
        while (_0x217d75 < k) {
            _0x463143 *= _0x18a428[_0x470f99 + _0x217d75];
            _0x217d75++;
        }
        _0x10f1cf = Math['max'](_0x10f1cf, _0x463143);
    }
    return _0x10f1cf;
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var I = 0x0;
while (!![]) {
    var nk = Arr[I]['split']('\x20')['map'](Number);
    I++;
    var n = nk[0x0];
    var k = nk[0x1];
    if (n == 0x0 && k == 0x0)
        break;
    var c = [];
    for (var i = 0x0; i < n; i++) {
        c['push'](Arr[I]);
        I++;
    }
    var maxA = 0x1;
    maxA = maxCards(c, maxA);
    var maxB = 0x1;
    for (var i = 0x0; i < n; i++) {
        for (var j = i + 0x1; j < n; j++) {
            var memo = c[i];
            c[i] = c[j];
            c[j] = memo;
            maxB = maxCards(c, maxB);
            c[j] = c[i];
            c[i] = memo;
        }
    }
    console['log'](maxA > maxB ? 'NO\x20GAME' : maxB - maxA);
}