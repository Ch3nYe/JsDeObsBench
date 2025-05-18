inp = require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split']('\x0a');
l = inp['shift']()['split']('\x20');
N = l['shift']() * 0x1;
P = l['shift']() * 0x1;
_primFactors = function (_0x23ba07) {
    var _0x1cbdec = [];
    if (_0x23ba07 == 0x1) {
        return [{
                'n': 0x1,
                'r': 0x1
            }];
    }
    s = _0x23ba07;
    var _0x4aed15 = 0x2;
    r = 0x0;
    if (_0x23ba07 % _0x4aed15 === 0x0) {
        do {
            r++;
            _0x23ba07 /= _0x4aed15;
        } while (_0x23ba07 % _0x4aed15 === 0x0);
        _0x1cbdec['push']({
            'n': _0x4aed15,
            'r': r
        });
    }
    for (_0x4aed15 = 0x3; _0x4aed15 * _0x4aed15 <= s; _0x4aed15 += 0x2) {
        r = 0x0;
        if (_0x23ba07 % _0x4aed15 === 0x0) {
            do {
                r++;
                _0x23ba07 /= _0x4aed15;
            } while (_0x23ba07 % _0x4aed15 === 0x0);
            _0x1cbdec['push']({
                'n': _0x4aed15,
                'r': r
            });
        }
    }
    if (_0x23ba07 > 0x1) {
        _0x1cbdec['push']({
            'n': _0x23ba07,
            'r': 0x1
        });
    }
    return _0x1cbdec;
};
arr = _primFactors(P);
ans = 0x1;
for (i = 0x0; i < arr['length']; i++) {
    a = arr[i];
    r = a['r'];
    while (r >= N) {
        ans *= a['n'];
        r -= N;
    }
}
console['log'](ans);