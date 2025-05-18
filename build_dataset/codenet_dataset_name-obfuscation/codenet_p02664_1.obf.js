function Main(_0x14dc4f) {
    let _0x5a91e5 = '';
    for (let _0x2ef107 = 0x0; _0x2ef107 < _0x14dc4f['length']; _0x2ef107++) {
        if (_0x14dc4f[_0x2ef107] === '?' && (_0x14dc4f[_0x2ef107 - 0x1] && _0x14dc4f[_0x2ef107 - 0x1] === 'P' || _0x14dc4f[_0x2ef107 + 0x1] && _0x14dc4f[_0x2ef107 + 0x1] === 'P')) {
            _0x5a91e5 = _0x5a91e5 + 'D';
        } else if (_0x14dc4f[_0x2ef107] == '?') {
            _0x5a91e5 = _0x5a91e5 + 'P';
        } else {
            _0x5a91e5 = _0x5a91e5 + _0x14dc4f[_0x2ef107];
        }
    }
    console['log'](_0x5a91e5);
}
let input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
Main(input);