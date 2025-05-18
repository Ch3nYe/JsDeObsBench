var lines = [];
var readline = require('readline');
var rl = readline['createInterface']({
    'input': process['stdin'],
    'output': process['stdout']
});
rl['on']('line', _0x341aa7 => {
    lines['push'](_0x341aa7);
});
var A;
rl['on']('close', () => {
    var _0x25b869 = Number(lines[0x0]['split']('\x20')[0x0]);
    var _0x5dcdb1 = Number(lines[0x0]['split']('\x20')[0x1]);
    A = lines[0x1]['split']('\x20')['map'](_0x211f7f => Number(_0x211f7f));
    lines['shift']();
    lines['shift']();
    var _0x3827f8 = lines['map'](_0x3b6da0 => _0x3b6da0['split']('\x20')['map'](_0x36e3bd => Number(_0x36e3bd)));
    A['sort']((_0x153a09, _0x7b6b53) => _0x153a09 - _0x7b6b53);
    _0x3827f8['sort']((_0x2c15b3, _0x48c310) => _0x48c310[0x1] - _0x2c15b3[0x1]);
    var _0x2b8c25 = 0x0;
    var _0x7922ff = 0x0;
    for (var _0x3c3670 = 0x0; _0x3c3670 < _0x5dcdb1; _0x3c3670++) {
        var _0x52de93 = _0x3827f8[_0x3c3670][0x0];
        var _0x20c7d1 = _0x3827f8[_0x3c3670][0x1];
        var _0x2633b3 = 0x1;
        for (var _0x1c1f7a = _0x2b8c25; _0x1c1f7a < _0x25b869; _0x1c1f7a++) {
            if (_0x52de93 < _0x2633b3) {
                _0x2b8c25 = _0x1c1f7a;
                break;
            }
            if (A[_0x1c1f7a] < _0x20c7d1) {
                _0x7922ff += _0x20c7d1;
            } else {
                for (var _0x47fbad = _0x1c1f7a; _0x47fbad < _0x25b869; _0x47fbad++) {
                    _0x7922ff += A[_0x47fbad];
                }
                console['log'](_0x7922ff);
                return 0x0;
            }
            _0x2633b3++;
        }
    }
    for (var _0x47fbad = _0x1c1f7a; _0x47fbad < _0x25b869; _0x47fbad++) {
        _0x7922ff += A[_0x47fbad];
    }
    console['log'](_0x7922ff);
});