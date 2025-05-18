'use strict;';
main(require('fs')['readFileSync']('/dev/stdin', 'UTF-8')['trim']()['split']('\x0a'));
function main(_0x36a737) {
    _0x36a737 = _0x36a737[0x0]['split']('');
    let _0x4b0d20 = 0x2;
    let _0x5b8de6 = !![];
    while (_0x4b0d20 > 0x0) {
        if (_0x36a737[_0x4b0d20] !== _0x36a737[0x0]) {
            _0x5b8de6 = ![];
            break;
        }
        _0x4b0d20--;
    }
    console['log'](_0x5b8de6 ? 'No' : 'Yes');
}