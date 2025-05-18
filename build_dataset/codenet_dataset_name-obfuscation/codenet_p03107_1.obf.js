'use strict';
function Main(_0x5c8b99) {
    _0x5c8b99 = _0x5c8b99['trim']();
    _0x5c8b99 = _0x5c8b99['replace'](/\s+/, '')['split']('');
    var _0x38951e = _0x5c8b99['length'];
    var _0x451d8e = 0x0;
    var _0x297cc4 = 0x0;
    while (_0x5c8b99['length']) {
        if (_0x5c8b99['pop']() === '0')
            _0x297cc4++;
        else
            _0x451d8e++;
    }
    console['log'](Math['min'](_0x297cc4, _0x451d8e) * 0x2);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));