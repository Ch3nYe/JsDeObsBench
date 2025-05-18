var GET = (function () {
    function _0x3f5b6d(_0x1f70af) {
        return new _0x497083(_0x1f70af);
    }
    function _0x497083(_0x4f105a) {
        this['_s'] = _0x4f105a['trim']()['split']('\x0a');
        this['_y'] = 0x0;
    }
    _0x497083['prototype']['a'] = function (_0x277f0b) {
        var _0xbdc0b6 = this['_s'], _0x54c159 = this['_y'], _0x3fcd2f;
        if (typeof _0xbdc0b6[_0x54c159] === 'string')
            _0xbdc0b6[_0x54c159] = _0xbdc0b6[_0x54c159]['split']('\x20')['reverse']();
        _0x3fcd2f = _0xbdc0b6[_0x54c159]['pop']();
        if (!_0xbdc0b6[_0x54c159]['length'])
            this['_y']++;
        return _0x277f0b ? _0x3fcd2f : +_0x3fcd2f;
    };
    _0x497083['prototype']['l'] = function (_0x3cface) {
        var _0x38d712 = this['_s'][this['_y']++]['split']('\x20');
        return _0x3cface ? _0x38d712 : _0x38d712['map'](_0x5060f7 => +_0x5060f7);
    };
    _0x497083['prototype']['m'] = function (_0x4010c6, _0x1c3dfd) {
        var _0x1ddffa = this['_s']['slice'](this['_y'], this['_y'] += _0x4010c6)['map'](_0x1cb69a => _0x1cb69a['split']('\x20'));
        return _0x1c3dfd ? _0x1ddffa : _0x1ddffa['map'](_0x2ac717 => _0x2ac717['map'](_0x21899d => +_0x21899d));
    };
    _0x497083['prototype']['r'] = function (_0x286c9d, _0x4984f1) {
        var _0x1cad0a = this['_s']['slice'](this['_y'], this['_y'] += _0x286c9d);
        return _0x4984f1 ? _0x1cad0a : _0x1cad0a['map'](_0x3b2c8d => +_0x3b2c8d);
    };
    return _0x3f5b6d;
}());
var o = GET(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
console['log'](main());
function main() {
    var _0x37a9cc = o['a']();
    var _0x176c57 = [];
    for (var _0x19cde9 = 0x1; _0x19cde9 <= _0x37a9cc; _0x19cde9++) {
        for (var _0x14f0eb = _0x19cde9 + 0x1; _0x14f0eb <= _0x37a9cc; _0x14f0eb++) {
            if (_0x37a9cc % 0x2 && _0x19cde9 + _0x14f0eb === _0x37a9cc)
                continue;
            if (_0x37a9cc % 0x2 === 0x0 && _0x19cde9 + _0x14f0eb === _0x37a9cc + 0x1)
                continue;
            _0x176c57['push'](_0x19cde9 + '\x20' + _0x14f0eb);
        }
    }
    console['log'](_0x176c57['length']);
    return _0x176c57['join']('\x0a');
}