function main(_0x25e5da) {
    const _0x42b579 = _0x25e5da['split']('\x0a')[0x0]['split']('');
    const _0x3ae6d7 = parseInt(_0x25e5da['split']('\x0a')[0x0]['split']('\x20')[0x1]);
    for (var _0x2802a9 = 0x0; _0x2802a9 < _0x42b579['length']; _0x2802a9++) {
        if (_0x42b579[_0x2802a9] != '1') {
            console['log'](_0x42b579[_0x2802a9]);
            return;
        }
    }
    console['log'](0x1);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));