'use strict';
function main(_0x3b0cb6) {
    let _0x2c3741 = 'No';
    if (_0x3b0cb6[0x2] === _0x3b0cb6[0x3] && _0x3b0cb6[0x4] === _0x3b0cb6[0x5]) {
        _0x2c3741 = 'Yes';
    }
    console['log'](_0x2c3741);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));