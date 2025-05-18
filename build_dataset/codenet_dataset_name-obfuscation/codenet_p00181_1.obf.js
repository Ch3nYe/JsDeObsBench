function seach(_0x17ac1c) {
    var _0x28b2e8 = !![];
    var _0x333062 = 0x0;
    var _0x4e038c = 0x0;
    for (var _0x346a8d = 0x0; _0x346a8d < ary['length']; _0x346a8d++) {
        if (_0x17ac1c < ary[_0x346a8d]) {
            _0x28b2e8 = ![];
            break;
        } else if (_0x4e038c + ary[_0x346a8d] == _0x17ac1c) {
            _0x4e038c = 0x0;
            _0x333062++;
        } else if (_0x4e038c + ary[_0x346a8d] > _0x17ac1c) {
            _0x4e038c = ary[_0x346a8d];
            _0x333062++;
        } else if (_0x4e038c + ary[_0x346a8d] < _0x17ac1c) {
            _0x4e038c += ary[_0x346a8d];
        }
        if (_0x333062 == m) {
            _0x28b2e8 = ![];
            break;
        }
    }
    return _0x28b2e8;
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var mn = arr['shift']();
    if (mn == '0\x200')
        break;
    mn = mn['split']('\x20')['map'](Number);
    var m = mn[0x0];
    var n = mn[0x1];
    var ary = [];
    while (n--)
        ary['push'](arr['shift']() - 0x0);
    var L = 0x0;
    var R = 0x16e360;
    while (!![]) {
        var middle = Math['floor']((L + R) / 0x2);
        if (seach(middle)) {
            R = middle - 0x1;
        } else {
            L = middle + 0x1;
        }
        if (L > R)
            break;
    }
    console['log'](R + 0x1);
}