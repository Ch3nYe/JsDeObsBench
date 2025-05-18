var GET = (function () {
    function _0xf25146(_0x1537d0) {
        return new _0x4ffca1(_0x1537d0);
    }
    function _0x4ffca1(_0x5e6883) {
        this['_s'] = _0x5e6883['trim']()['split']('\x0a');
        this['_y'] = 0x0;
    }
    _0x4ffca1['prototype']['a'] = function (_0x299a19) {
        var _0x38a5fa = this['_s'], _0xb1d9a6 = this['_y'], _0x29ac5e;
        if (typeof _0x38a5fa[_0xb1d9a6] === 'string')
            _0x38a5fa[_0xb1d9a6] = _0x38a5fa[_0xb1d9a6]['split']('\x20')['reverse']();
        _0x29ac5e = _0x38a5fa[_0xb1d9a6]['pop']();
        if (!_0x38a5fa[_0xb1d9a6]['length'])
            this['_y']++;
        return _0x299a19 ? _0x29ac5e : +_0x29ac5e;
    };
    _0x4ffca1['prototype']['l'] = function (_0xf31d96) {
        var _0x566a9b = this['_s'][this['_y']++]['split']('\x20');
        return _0xf31d96 ? _0x566a9b : _0x566a9b['map'](_0x288ab7 => +_0x288ab7);
    };
    _0x4ffca1['prototype']['m'] = function (_0x1af426, _0x199efa) {
        var _0x1fd092 = this['_s']['slice'](this['_y'], this['_y'] += _0x1af426)['map'](_0x55d93d => _0x55d93d['split']('\x20'));
        return _0x199efa ? _0x1fd092 : _0x1fd092['map'](_0x5cec72 => _0x5cec72['map'](_0x1cc81e => +_0x1cc81e));
    };
    _0x4ffca1['prototype']['r'] = function (_0x38274c, _0xfa0695) {
        var _0x89eca9 = this['_s']['slice'](this['_y'], this['_y'] += _0x38274c);
        return _0xfa0695 ? _0x89eca9 : _0x89eca9['map'](_0x584fa5 => +_0x584fa5);
    };
    return _0xf25146;
}());
var o = GET(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function xArray(_0x35d263) {
    var _0x41c7cd = arguments, _0x581159 = _0x41c7cd['length'], _0xc98ba4 = 'Array(a[' + --_0x581159 + ']).fill(0).map(x=>{return\x20' + _0x35d263 + ';})';
    while (--_0x581159)
        _0xc98ba4 = 'Array(a[' + _0x581159 + ']).fill(0).map(x=>' + _0xc98ba4 + ')';
    return eval(_0xc98ba4);
}
console['log'](main());
function main() {
    var _0x2c4622 = o['a']();
    return _0x2c4622 * _0x2c4622 * _0x2c4622;
}