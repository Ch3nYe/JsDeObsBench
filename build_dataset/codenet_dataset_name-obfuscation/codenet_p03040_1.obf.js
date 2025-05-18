'use strict';
function I(_0x3d1b50, _0x5bb584) {
    this['_s'] = _0x3d1b50['split']('\x0a'), this['_c'] = 0x0, this['_l'] = 0x0, this['_f'] = _0x5bb584 || Number;
}
I['prototype']['a'] = function (_0xa9c7c7) {
    var _0xb74260 = this['_s'][this['_l']];
    if (_0xb74260) {
        var _0x5b5a06 = _0xb74260['trim']()['split']('\x20'), _0x35a8d2 = _0x5b5a06[this['_c']];
        return this['_c']++, _0x5b5a06['length'] === this['_c'] && (this['_c'] = 0x0, this['_l']++), _0xa9c7c7 ? _0xa9c7c7(_0x35a8d2) : this['_f'](_0x35a8d2);
    }
}, I['prototype']['l'] = function (_0x27de9b) {
    var _0x20824f = this['_s'][this['_l']];
    if (_0x20824f)
        return this['_c'] = 0x0, this['_l']++, _0x20824f['split']('\x20')['map'](_0x27de9b || this['_f']);
}, module['exports'] = I;
function main(_0x49b9c8) {
    var _0x41717f = new I(_0x49b9c8);
    var _0x481788 = _0x41717f['a']();
    var _0xd227ef = 0x0;
    var _0xb5afa3 = [];
    for (var _0xf97787 = 0x0; _0xf97787 < _0x481788; _0xf97787++) {
        var _0x46ce42 = _0x41717f['a']();
        if (_0x46ce42 === 0x1) {
            var _0x53a866 = _0x41717f['a']();
            var _0x744c27 = _0x41717f['a']();
            _0xd227ef += _0x744c27;
            _0xb5afa3['push'](_0x53a866);
        } else {
            _0xb5afa3 = _0xb5afa3['sort']((_0x116166, _0x5d1c9a) => _0x116166 - _0x5d1c9a);
            var _0x1c1c00 = _0xb5afa3[Math['floor']((_0xb5afa3['length'] - 0x1) / 0x2)];
            var _0xd300fe = _0xb5afa3['map'](_0x3a34f2 => Math['abs'](_0x3a34f2 - _0x1c1c00))['reduce']((_0x68fa83, _0x517011) => _0x68fa83 + _0x517011) + _0xd227ef;
            console['log'](_0x1c1c00, _0xd300fe);
        }
    }
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));