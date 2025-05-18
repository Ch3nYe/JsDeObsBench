function Main(_0x50be0b) {
    const _0x2e7663 = _0x50be0b['trim']()['split']('\x0a');
    const _0x455a64 = _0x2e7663[0x0]['split']('\x20')['map'](Number);
    const _0x15416a = _0x2e7663[0x1]['split']('\x20')['map'](Number);
    const _0x278153 = Number(_0x2e7663[0x2]);
    if (Math['abs'](_0x455a64[0x0] - _0x15416a[0x0]) < _0x278153 * (_0x455a64[0x1] - _0x15416a[0x1])) {
        console['log']('YES');
    } else {
        console['log']('NO');
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));