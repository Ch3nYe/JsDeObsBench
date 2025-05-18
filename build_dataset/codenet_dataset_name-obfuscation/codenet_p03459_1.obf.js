var GET = (function () {
    function _0x267118(_0xd9df34) {
        return new _0x5a2c24(_0xd9df34);
    }
    function _0x5a2c24(_0x59b018) {
        this['_s'] = _0x59b018['trim']()['split']('\x0a');
        this['_y'] = 0x0;
    }
    _0x5a2c24['prototype']['a'] = function (_0x453ef9) {
        var _0x224199 = this['_s'], _0x14faba = this['_y'], _0xe44c;
        if (typeof _0x224199[_0x14faba] === 'string')
            _0x224199[_0x14faba] = _0x224199[_0x14faba]['split']('\x20')['reverse']();
        _0xe44c = _0x224199[_0x14faba]['pop']();
        if (!_0x224199[_0x14faba]['length'])
            this['_y']++;
        return _0x453ef9 ? _0xe44c : +_0xe44c;
    };
    _0x5a2c24['prototype']['l'] = function (_0x48664e) {
        var _0x2dc905 = this['_s'][this['_y']++]['split']('\x20');
        return _0x48664e ? _0x2dc905 : _0x2dc905['map'](_0x737ed7 => +_0x737ed7);
    };
    _0x5a2c24['prototype']['m'] = function (_0x38e3b9, _0x7b3a0c) {
        var _0x62782e = this['_s']['slice'](this['_y'], this['_y'] += _0x38e3b9)['map'](_0x5d20c9 => _0x5d20c9['split']('\x20'));
        return _0x7b3a0c ? _0x62782e : _0x62782e['map'](_0x5b62fa => _0x5b62fa['map'](_0x4fe413 => +_0x4fe413));
    };
    _0x5a2c24['prototype']['r'] = function (_0x2e892b, _0x4eb603) {
        var _0x364a52 = this['_s']['slice'](this['_y'], this['_y'] += _0x2e892b);
        return _0x4eb603 ? _0x364a52 : _0x364a52['map'](_0x1adcf3 => +_0x1adcf3);
    };
    return _0x267118;
}());
var o = GET(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
console['log'](main());
function main() {
    var _0xb8eefa = o['a']();
    var _0x5f0fe5 = o['m'](_0xb8eefa);
    var _0x4098e0 = 0x0, _0x438b29 = 0x0, _0x10f9ec = 0x0;
    for (var _0x27805a = 0x0; _0x27805a < _0xb8eefa; _0x27805a++) {
        var _0x35d4a0 = Math['abs'](_0x438b29 - _0x5f0fe5[_0x27805a][0x1]);
        _0x35d4a0 += Math['abs'](_0x10f9ec - _0x5f0fe5[_0x27805a][0x2]);
        var _0x54c1ac = _0x5f0fe5[_0x27805a][0x0] - _0x4098e0;
        if (_0x35d4a0 > _0x54c1ac || _0x35d4a0 % 0x2 !== _0x54c1ac % 0x2)
            return 'No';
        _0x438b29 = _0x5f0fe5[_0x27805a][0x1];
        _0x10f9ec = _0x5f0fe5[_0x27805a][0x2];
        _0x4098e0 = _0x5f0fe5[_0x27805a][0x0];
    }
    return 'Yes';
}