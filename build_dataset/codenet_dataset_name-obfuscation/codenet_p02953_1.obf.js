function Main(_0x85609b) {
    const _0x17f65b = _0x85609b['split']('\x0a')[0x0];
    const _0x148e95 = _0x85609b['split']('\x0a')[0x1]['split']('\x20');
    for (var _0x205fc7 = _0x148e95['length'] - 0x1; _0x205fc7 > 0x0; _0x205fc7--) {
        if (_0x148e95[_0x205fc7 - 0x1] > _0x148e95[_0x205fc7]) {
            _0x148e95[_0x205fc7 - 0x1] -= 0x1;
        }
        if (_0x148e95[_0x205fc7 - 0x1] > _0x148e95[_0x205fc7]) {
            return console['log']('No');
        }
    }
    console['log']('Yes');
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));