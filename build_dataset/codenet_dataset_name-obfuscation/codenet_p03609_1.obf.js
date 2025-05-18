function main(_0x1e3d10) {
    _0x1e3d10 = _0x1e3d10['trim']();
    const _0x3492cd = _0x1e3d10['split']('\x20')['map'](Number);
    if (_0x3492cd[0x0] <= _0x3492cd[0x1]) {
        console['log']('0');
    } else {
        console['log'](_0x3492cd[0x0] - _0x3492cd[0x1]);
    }
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));