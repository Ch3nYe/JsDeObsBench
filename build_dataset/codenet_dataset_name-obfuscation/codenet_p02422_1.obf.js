'use strict';
main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['replace'](/\r?\n$/, '')['split'](/\r?\n/));
function main(_0x1608c9) {
    var _0x2f498f = _0x1608c9['shift']();
    _0x1608c9['shift']();
    var _0x50dcaa;
    while (_0x50dcaa = _0x1608c9['shift']()) {
        _0x50dcaa = _0x50dcaa['split']('\x20');
        var _0x1446e5 = +_0x50dcaa[0x1], _0x3ac8b0 = +_0x50dcaa[0x2];
        switch (_0x50dcaa[0x0]) {
        case 'print':
            console['log'](_0x2f498f['slice'](_0x1446e5, _0x3ac8b0 + 0x1));
            break;
        case 'replace':
            _0x2f498f = _0x2f498f['slice'](0x0, _0x1446e5) + _0x50dcaa[0x3] + _0x2f498f['slice'](_0x3ac8b0 + 0x1);
            break;
        case 'reverse':
            _0x2f498f = _0x2f498f['slice'](0x0, _0x1446e5) + _0x2f498f['slice'](_0x1446e5, _0x3ac8b0 + 0x1)['split']('')['reverse']()['join']('') + _0x2f498f['slice'](_0x3ac8b0 + 0x1);
            break;
        }
    }
}