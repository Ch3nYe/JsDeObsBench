'use strict';
function main(_0x4056e5) {
    let _0x4d89ea = _0x4056e5['split'](/\r?\n/g);
    let _0x50f635 = _0x4d89ea[0x0]['split']('\x20');
    const _0x32656c = parseInt(_0x50f635[0x0]), _0x461f7f = parseInt(_0x50f635[0x1]);
    let _0x1fe3ac = 0x1;
    while (_0x461f7f ** _0x1fe3ac < _0x32656c)
        _0x1fe3ac++;
    console['log'](_0x1fe3ac);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));