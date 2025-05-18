var GET = (function () {
    function _0x1ea3c7(_0x1cedfb) {
        return new _0x4f8058(_0x1cedfb);
    }
    function _0x4f8058(_0x4c1fd4) {
        this['_s'] = _0x4c1fd4['trim']()['split']('\x0a');
        this['_y'] = 0x0;
    }
    _0x4f8058['prototype']['a'] = function (_0x311389) {
        var _0x38d0c4 = this['_s'], _0x5772ed = this['_y'], _0xd43256;
        if (typeof _0x38d0c4[_0x5772ed] === 'string')
            _0x38d0c4[_0x5772ed] = _0x38d0c4[_0x5772ed]['split']('\x20')['reverse']();
        _0xd43256 = _0x38d0c4[_0x5772ed]['pop']();
        if (!_0x38d0c4[_0x5772ed]['length'])
            this['_y']++;
        return _0x311389 ? _0xd43256 : +_0xd43256;
    };
    _0x4f8058['prototype']['l'] = function (_0x242661) {
        var _0x1a6da7 = this['_s'][this['_y']++]['split']('\x20');
        return _0x242661 ? _0x1a6da7 : _0x1a6da7['map'](_0x4087bb => +_0x4087bb);
    };
    _0x4f8058['prototype']['m'] = function (_0x35c882, _0x47a4ba) {
        var _0x44bbd8 = this['_s']['slice'](this['_y'], this['_y'] += _0x35c882)['map'](_0x397e9b => _0x397e9b['split']('\x20'));
        return _0x47a4ba ? _0x44bbd8 : _0x44bbd8['map'](_0x3db00d => _0x3db00d['map'](_0x55123f => +_0x55123f));
    };
    _0x4f8058['prototype']['r'] = function (_0x466036, _0x26f262) {
        var _0x225127 = this['_s']['slice'](this['_y'], this['_y'] += _0x466036);
        return _0x26f262 ? _0x225127 : _0x225127['map'](_0x2218e9 => +_0x2218e9);
    };
    return _0x1ea3c7;
}());
var o = GET(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
console['log'](main());
function main() {
    var _0x5ed12d = o['a'](0x1);
    var _0x4ae6bc = 0x3e7;
    for (var _0x4f851c = 0x2; _0x4f851c < _0x5ed12d['length']; _0x4f851c++) {
        var _0x19fdfd = _0x5ed12d[_0x4f851c - 0x2] + _0x5ed12d[_0x4f851c - 0x1] + _0x5ed12d[_0x4f851c];
        _0x19fdfd = Math['abs'](_0x19fdfd - 0x2f1);
        if (_0x4ae6bc > _0x19fdfd)
            _0x4ae6bc = _0x19fdfd;
    }
    return _0x4ae6bc;
}