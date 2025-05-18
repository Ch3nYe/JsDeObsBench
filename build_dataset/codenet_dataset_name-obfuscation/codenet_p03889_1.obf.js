function Main(_0x558d83) {
    const _0x48c346 = _0x558d83['split']('');
    if (_0x48c346['length'] % 0x2 !== 0x0) {
        console['log']('No');
        return;
    }
    const _0x16cf77 = _0x48c346['slice'](0x0, _0x48c346['length'] / 0x2);
    const _0x45bf56 = _0x48c346['slice'](_0x48c346['length'] / 0x2, _0x48c346['length']);
    if (_0x16cf77['join']('') === _0x45bf56['reverse']()['map'](_0xf5a1fa)['join']('')) {
        console['log']('Yes');
    } else {
        console['log']('No');
    }
    function _0xf5a1fa(_0x46b80b) {
        switch (_0x46b80b) {
        case 'b':
            return 'd';
        case 'd':
            return 'b';
        case 'p':
            return 'q';
        case 'q':
            return 'p';
        }
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));