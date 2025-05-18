var GET = (function () {
    function _0x50b4f5(_0x399c91) {
        return new _0x4099f8(_0x399c91);
    }
    function _0x4099f8(_0x43a317) {
        this['_s'] = _0x43a317['trim']()['split']('\x0a');
        this['_y'] = 0x0;
    }
    _0x4099f8['prototype']['a'] = function (_0x26ccca) {
        var _0x3e8604 = this['_s'], _0x1bb8f7 = this['_y'], _0x367961;
        if (typeof _0x3e8604[_0x1bb8f7] === 'string')
            _0x3e8604[_0x1bb8f7] = _0x3e8604[_0x1bb8f7]['split']('\x20')['reverse']();
        _0x367961 = _0x3e8604[_0x1bb8f7]['pop']();
        if (!_0x3e8604[_0x1bb8f7]['length'])
            this['_y']++;
        return _0x26ccca ? _0x367961 : +_0x367961;
    };
    _0x4099f8['prototype']['l'] = function (_0x506c9b) {
        var _0x3da4fb = this['_s'][this['_y']++]['split']('\x20');
        return _0x506c9b ? _0x3da4fb : _0x3da4fb['map'](_0xa4f499 => +_0xa4f499);
    };
    _0x4099f8['prototype']['m'] = function (_0x331eee, _0x354fe8) {
        var _0x30403f = this['_s']['slice'](this['_y'], this['_y'] += _0x331eee)['map'](_0x542a25 => _0x542a25['split']('\x20'));
        return _0x354fe8 ? _0x30403f : _0x30403f['map'](_0x2b0c81 => _0x2b0c81['map'](_0x10ce78 => +_0x10ce78));
    };
    _0x4099f8['prototype']['r'] = function (_0x14b76b, _0x2e0331) {
        var _0x3e3b29 = this['_s']['slice'](this['_y'], this['_y'] += _0x14b76b);
        return _0x2e0331 ? _0x3e3b29 : _0x3e3b29['map'](_0x527d2c => +_0x527d2c);
    };
    return _0x50b4f5;
}());
var o = GET(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
console['log'](main());
function main() {
    var _0xf53478 = o['a'](0x1);
    var _0x143f9e = _0xf53478['length'];
    var _0x4372be = _0x143f9e + 0x1 >> 0x1, _0xbe9954, _0x4d2db4 = _0x4372be;
    var _0x45545a = _0xf53478[_0x4372be - 0x1];
    if (_0x143f9e & 0x1)
        _0xbe9954 = _0x4372be - 0x2;
    else
        _0xbe9954 = _0x4372be - 0x1;
    for (; _0xbe9954 >= 0x0; _0xbe9954--, _0x4d2db4++) {
        if (_0xf53478[_0xbe9954] !== _0x45545a || _0xf53478[_0x4d2db4] !== _0x45545a)
            break;
        _0x4372be++;
    }
    return _0x4372be;
}