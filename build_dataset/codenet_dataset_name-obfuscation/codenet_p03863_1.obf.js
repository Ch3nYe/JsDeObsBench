function Main(_0x5aa4b8) {
    _0x5aa4b8 = _0x5aa4b8['trim']();
    const _0x4417fc = _0x5aa4b8['length'];
    if (_0x4417fc & 0x1 ^ _0x5aa4b8[0x0] === _0x5aa4b8[_0x4417fc - 0x1])
        console['log']('First');
    else
        console['log']('Second');
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));