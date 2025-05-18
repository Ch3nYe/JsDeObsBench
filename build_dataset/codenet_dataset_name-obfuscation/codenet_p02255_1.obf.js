function main(_0x3ebfca) {
    const _0x36f466 = _0x3ebfca['split']('\x0a')[0x0];
    const _0x5881be = _0x3ebfca['split']('\x0a')[0x1]['split']('\x20')['map'](Number);
    console['log'](_0x5881be['join']('\x20'));
    for (let _0x27a992 = 0x1; _0x27a992 < _0x36f466; _0x27a992++) {
        value = _0x5881be[_0x27a992];
        let _0x145208 = _0x27a992 - 0x1;
        while (_0x145208 >= 0x0 && value < _0x5881be[_0x145208]) {
            _0x5881be[_0x145208 + 0x1] = _0x5881be[_0x145208];
            _0x145208--;
        }
        _0x5881be[_0x145208 + 0x1] = value;
        console['log'](_0x5881be['join']('\x20'));
    }
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));