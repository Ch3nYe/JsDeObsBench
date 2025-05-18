function Main(_0xf1eba4) {
    const _0xdea382 = _0xf1eba4['length'];
    const _0x42d6e0 = _0xf1eba4['match'](/p/g)['length'];
    console['log'](Math['floor'](_0xdea382 / 0x2 - _0x42d6e0));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']());