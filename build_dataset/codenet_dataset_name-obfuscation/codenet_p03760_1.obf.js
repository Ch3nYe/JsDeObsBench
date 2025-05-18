'use strict';
function main(_0x52cdc4) {
    _0x52cdc4 = _0x52cdc4['split']('\x0a');
    const _0x5cf02c = _0x52cdc4[0x0]['split']('');
    const _0x1c96b9 = _0x52cdc4[0x1]['split']('');
    let _0x3c9afe = '';
    for (let _0xe2bfa5 = 0x0; _0xe2bfa5 < _0x5cf02c['length'] + _0x1c96b9['length']; _0xe2bfa5++) {
        if (_0x5cf02c[_0xe2bfa5])
            _0x3c9afe += _0x5cf02c[_0xe2bfa5];
        if (_0x1c96b9[_0xe2bfa5])
            _0x3c9afe += _0x1c96b9[_0xe2bfa5];
    }
    console['log'](_0x3c9afe);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));