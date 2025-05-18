'use strict';
function main(_0x5a7fde) {
    let _0x336abf = parseInt(_0x5a7fde['split']('\x0a')[0x0]['split']('\x20')[0x0]);
    const _0x18e787 = parseInt(_0x5a7fde['split']('\x0a')[0x0]['split']('\x20')[0x1]);
    const _0x29565 = _0x5a7fde['split']('\x0a')[0x1]['split']('\x20');
    for (let _0x4af2e5 = 0x0; _0x4af2e5 < _0x29565['length']; _0x4af2e5++) {
        if (_0x18e787 > parseInt(_0x29565[_0x4af2e5])) {
            _0x336abf--;
        }
    }
    console['log'](_0x336abf);
}
main(require('fs')['readFileSync']('/dev/stdin', 'UTF-8'));