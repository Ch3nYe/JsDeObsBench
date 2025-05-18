'use strict';
function main(_0x5cd686, _0x94e398) {
    let _0x403f17 = {};
    for (let _0x78f94d of _0x94e398) {
        _0x403f17[_0x78f94d] = _0x403f17[_0x78f94d] || 0x0;
        _0x403f17[_0x78f94d]++;
    }
    let _0x321f04 = Object['keys'](_0x403f17);
    let _0x21cebf = _0x321f04['reduce']((_0x5beb65, _0x2c08b2) => {
        if (_0x403f17[_0x2c08b2] % 0x2 === 0x0) {
            return _0x5beb65 + 0x1;
        } else {
            return _0x5beb65;
        }
    }, 0x0);
    let _0x1e2c15;
    if (_0x21cebf % 0x2 === 0x0) {
        _0x1e2c15 = _0x321f04['length'];
    } else {
        _0x1e2c15 = _0x321f04['length'] - 0x1;
    }
    console['log'](_0x1e2c15);
}
function doMain() {
    let _0x3cbe21 = '';
    process['stdin']['resume']();
    process['stdin']['setEncoding']('utf8');
    process['stdin']['on']('data', _0x1e4431 => {
        _0x3cbe21 += _0x1e4431;
    });
    process['stdin']['on']('end', () => {
        _0x3cbe21 = _0x3cbe21['trim']()['split']('\x0a');
        let _0x3c4f20 = Number(_0x3cbe21[0x0]);
        let _0x4963d9 = _0x3cbe21[0x1]['split']('\x20')['map'](_0x6f7a40 => Number(_0x6f7a40));
        main(_0x3c4f20, _0x4963d9);
    });
}
doMain();