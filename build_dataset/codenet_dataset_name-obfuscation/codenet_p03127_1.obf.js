var GET = (function () {
    function _0x4abcf4(_0x3b9840) {
        return new _0xd7ffe6(_0x3b9840);
    }
    function _0xd7ffe6(_0x2dbb09) {
        this['_s'] = _0x2dbb09['trim']()['split']('\x0a');
        this['_y'] = 0x0;
    }
    _0xd7ffe6['prototype']['a'] = function (_0x276e77) {
        var _0x456509 = this['_s'], _0xf83573 = this['_y'], _0x1eb5cd;
        if (typeof _0x456509[_0xf83573] === 'string')
            _0x456509[_0xf83573] = _0x456509[_0xf83573]['split']('\x20')['reverse']();
        _0x1eb5cd = _0x456509[_0xf83573]['pop']();
        if (!_0x456509[_0xf83573]['length'])
            this['_y']++;
        return _0x276e77 ? _0x1eb5cd : +_0x1eb5cd;
    };
    _0xd7ffe6['prototype']['l'] = function (_0x1ffcaf) {
        var _0x4c2c7f = this['_s'][this['_y']++]['split']('\x20');
        return _0x1ffcaf ? _0x4c2c7f : _0x4c2c7f['map'](_0xfd5b3a => +_0xfd5b3a);
    };
    _0xd7ffe6['prototype']['m'] = function (_0x571f1a, _0x3968f7) {
        var _0x135e22 = this['_s']['slice'](this['_y'], this['_y'] += _0x571f1a)['map'](_0x452f64 => _0x452f64['split']('\x20'));
        return _0x3968f7 ? _0x135e22 : _0x135e22['map'](_0x2816a6 => _0x2816a6['map'](_0x2faa24 => +_0x2faa24));
    };
    _0xd7ffe6['prototype']['r'] = function (_0x1e9d04, _0x50e97b) {
        var _0x51b51b = this['_s']['slice'](this['_y'], this['_y'] += _0x1e9d04);
        return _0x50e97b ? _0x51b51b : _0x51b51b['map'](_0xebdd95 => +_0xebdd95);
    };
    return _0x4abcf4;
}());
var o = GET(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function gcd(_0x58e64f, _0xe0a5f9) {
    return _0xe0a5f9 ? gcd(_0xe0a5f9, _0x58e64f % _0xe0a5f9) : _0x58e64f;
}
console['log'](main());
function main() {
    var _0x4d7548 = o['a']();
    var _0x388526 = o['l']();
    var _0x590a7e = _0x388526[0x0];
    for (var _0x4e01d8 = 0x1; _0x4e01d8 < _0x4d7548; _0x4e01d8++) {
        _0x590a7e = gcd(_0x590a7e, _0x388526[_0x4e01d8]);
    }
    return _0x590a7e;
}