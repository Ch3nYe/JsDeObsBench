function main(_0x2f0717) {
    const _0x51ee2b = _0x2f0717['split']('');
    let _0x3cf246;
    let _0x5e1141;
    for (let _0x3c3753 = 0x0; _0x3c3753 < _0x51ee2b['length']; _0x3c3753++) {
        if (_0x51ee2b[_0x3c3753] === 'A' && !_0x3cf246) {
            _0x3cf246 = _0x3c3753;
        }
        if (_0x51ee2b[_0x3c3753] === 'Z') {
            _0x5e1141 = _0x3c3753;
        }
    }
    console['log'](_0x5e1141 - _0x3cf246 + 0x1);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));