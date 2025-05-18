function gets(_0x2a6e78) {
    this['_s'] = _0x2a6e78['split']('\x0a');
    this['_y'] = 0x0;
}
;
gets['prototype'] = {
    'a': function (_0x4930f9) {
        var _0x5aea32 = this['_s'], _0x3cd455 = this['_y'], _0x12b40d;
        if (typeof _0x5aea32[_0x3cd455] === 'string')
            _0x5aea32[_0x3cd455] = _0x5aea32[_0x3cd455]['split']('\x20')['reverse']();
        _0x12b40d = _0x5aea32[_0x3cd455]['pop']();
        if (!_0x5aea32[_0x3cd455]['length'])
            this['_y']++;
        return _0x4930f9 ? _0x12b40d : +_0x12b40d;
    },
    'l': function (_0x2f5fce) {
        var _0x14261a = this['_s'][this['_y']++]['split']('\x20');
        return _0x2f5fce ? _0x14261a : _0x14261a['map'](_0x3a5589 => +_0x3a5589);
    },
    'm': function (_0x289e88, _0x1770bb) {
        var _0x54ce3f = this['_s'], _0x2eb80 = this['_y'], _0x426e80 = [], _0xb19b13 = 0x0;
        if (_0x1770bb)
            for (; _0xb19b13 < _0x289e88; _0xb19b13++)
                _0x426e80[_0xb19b13] = _0x54ce3f[_0x2eb80 + _0xb19b13]['split']('\x20');
        else
            for (; _0xb19b13 < _0x289e88; _0xb19b13++)
                _0x426e80[_0xb19b13] = _0x54ce3f[_0x2eb80 + _0xb19b13]['split']('\x20')['map'](_0x2e451a => +_0x2e451a);
        this['_y'] += _0x289e88;
        return _0x426e80;
    }
};
var o = new gets(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
console['log'](main());
function main() {
    var _0x103e69 = o['a']();
    var _0x34d881 = o['l']();
    var _0x4cba87 = [];
    if (_0x103e69 <= 0x2)
        return Math['max'](..._0x34d881);
    for (var _0x33799b = 0x0; _0x33799b < _0x103e69 - 0x1; _0x33799b++)
        _0x34d881[_0x103e69 + _0x33799b] = Math['max'](_0x34d881[_0x33799b], _0x34d881[_0x33799b + 0x1]);
    return _0x2d0622(_0x34d881);
    function _0x2d0622(_0x15b111) {
        _0x15b111['sort']((_0x5e2077, _0x287858) => _0x5e2077 - _0x287858);
        return _0x15b111[_0x15b111['length'] >> 0x1];
    }
}