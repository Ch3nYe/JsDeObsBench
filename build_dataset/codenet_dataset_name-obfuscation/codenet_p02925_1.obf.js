'use strict';
function main(_0x17122c) {
    const _0x3dc891 = _0x17122c['split']('\x0a');
    const _0x492938 = Number(_0x3dc891['shift']());
    const _0x210308 = _0x3dc891['map'](_0x370b6a => _0x370b6a['split']('\x20')['map'](_0x15e35e => parseInt(_0x15e35e, 0xa)));
    console['log'](solve(_0x210308));
}
function solve(_0x59425f) {
    const _0x13808d = _0x59425f['length'];
    function _0x335f97() {
        let _0x390908 = ![];
        for (let _0x207a53 = 0x0; _0x207a53 < _0x13808d; ++_0x207a53) {
            const _0x26f3f2 = _0x59425f[_0x207a53][_0x75bd88[_0x207a53]] - 0x1;
            if (isNaN(_0x26f3f2))
                continue;
            if (_0x59425f[_0x26f3f2][_0x75bd88[_0x26f3f2]] - 0x1 === _0x207a53) {
                _0x390908 = !![];
                ++_0x75bd88[_0x207a53];
                ++_0x75bd88[_0x26f3f2];
            }
        }
        return _0x390908;
    }
    function _0x38de08() {
        return _0x75bd88['some'](_0x125eb0 => _0x125eb0 < _0x13808d - 0x1);
    }
    const _0x75bd88 = [];
    for (let _0x2f10a5 = 0x0; _0x2f10a5 < _0x13808d; ++_0x2f10a5) {
        _0x75bd88[_0x2f10a5] = 0x0;
    }
    let _0x3f5a89 = 0x1;
    while (_0x38de08()) {
        const _0x18cd33 = _0x335f97();
        if (_0x18cd33 === ![])
            return -0x1;
        ++_0x3f5a89;
    }
    return _0x3f5a89;
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']());