function saiki(_0x31483b, _0x382a1e) {
    while (!![]) {
        if (/\[{2}\d.*?\]{2}/['test'](_0x31483b)) {
            _0x31483b = _0x31483b['replace'](/\[{2}\d.*?\]{2}/, function (_0x437bf4) {
                var _0x523e11 = _0x437bf4['slice'](0x2, -0x2)['split']('][')['map'](Number);
                _0x523e11['sort']((_0x2d3149, _0x65ce95) => _0x2d3149 - _0x65ce95);
                var _0x43198e = 0x0;
                for (var _0x51fc32 = 0x0; _0x51fc32 < Math['ceil'](_0x523e11['length'] / 0x2); _0x51fc32++) {
                    if (_0x382a1e)
                        _0x43198e += Math['floor'](_0x523e11[_0x51fc32] / 0x2) + 0x1;
                    else
                        _0x43198e += Math['floor'](_0x523e11[_0x51fc32]);
                }
                return '(' + _0x43198e + ')';
            });
        } else
            break;
    }
    _0x31483b = _0x31483b['replace'](/\(/g, '[');
    _0x31483b = _0x31483b['replace'](/\)/g, ']');
    return _0x31483b;
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
var n = arr['shift']() - 0x0;
arr['forEach'](_0x48aeee => {
    _0x48aeee = saiki(_0x48aeee, !![]);
    while (/\[\[/['test'](_0x48aeee))
        _0x48aeee = saiki(_0x48aeee, ![]);
    console['log'](_0x48aeee['replace'](/\[|\]/g, ''));
});