'use strict';
function main(_0x30cd45) {
    _0x30cd45 = _0x30cd45['split'](/\n/)['map'](_0x3c4ee7 => ~~_0x3c4ee7);
    let _0x2621a9 = new Set();
    for (let _0x58ef22 = 0x1; _0x58ef22 < _0x30cd45['length']; _0x58ef22++) {
        if (_0x2621a9['has'](_0x30cd45[_0x58ef22])) {
            _0x2621a9['delete'](_0x30cd45[_0x58ef22]);
        } else {
            _0x2621a9['add'](_0x30cd45[_0x58ef22]);
        }
    }
    console['log'](_0x2621a9['size']);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));