function main(_0x12c95e) {
    let _0x240683 = _0x12c95e['split']('\x20')['map'](_0x9188a4 => parseInt(_0x9188a4));
    if (_0x240683[0x0] > _0x240683[0x1]) {
        console['log']('a\x20>\x20b');
    } else if (_0x240683[0x0] < _0x240683[0x1]) {
        console['log']('a\x20<\x20b');
    } else {
        console['log']('a\x20==\x20b');
    }
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf-8'));