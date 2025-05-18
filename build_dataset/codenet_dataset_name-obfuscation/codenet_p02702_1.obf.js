const Main = () => {
    let _0x55e6fa = require('fs')['readFileSync']('/dev/stdin', 'utf8');
    const _0x53f116 = {};
    let _0xa3dc60 = 0x0;
    for (let _0x33b68d = _0x55e6fa['length']; 0x0 < _0x33b68d; _0x33b68d--) {
        const _0x21abd2 = parseInt(_0x55e6fa, 0xa);
        const _0x3e8f5e = _0x21abd2 % 0x7e3;
        if (_0x53f116[_0x3e8f5e] || _0x3e8f5e === 0x0) {
            _0xa3dc60++;
        }
        _0x53f116[_0x3e8f5e] = !![];
        _0x55e6fa = _0x55e6fa['slice'](0x1);
    }
    console['log'](_0xa3dc60);
};
Main();