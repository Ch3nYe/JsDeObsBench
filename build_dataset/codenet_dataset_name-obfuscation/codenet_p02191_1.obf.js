var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
var [n, q] = arr['shift']()['split']('\x20')['map'](Number);
var ary = arr['shift']()['split']('\x20')['map'](Number);
ary['sort']((_0x1d2135, _0x387070) => _0x1d2135 - _0x387070);
var tansaku = function (_0x4f90af, _0x5beca5) {
    var _0x511b7d = -0x1;
    var _0x5a50f1 = ary['length'];
    while (_0x5a50f1 - _0x511b7d > 0x1) {
        var _0x2bbd9f = _0x511b7d + Math['floor']((_0x5a50f1 - _0x511b7d) / 0x2);
        if (ary[_0x2bbd9f] < _0x4f90af)
            _0x511b7d = _0x2bbd9f;
        else if (_0x5beca5 == 'ookii' && ary[_0x2bbd9f] == _0x4f90af)
            _0x511b7d = _0x2bbd9f;
        else
            _0x5a50f1 = _0x2bbd9f;
    }
    return _0x5a50f1;
};
var ans = [];
arr['forEach'](_0x5e65f => {
    var [_0x1aaab2, _0x59253e] = _0x5e65f['split']('\x20')['map'](Number);
    ans['push'](tansaku(_0x59253e, 'ookii') - tansaku(_0x1aaab2, 'izyou'));
});
console['log'](ans['join']('\x0a'));