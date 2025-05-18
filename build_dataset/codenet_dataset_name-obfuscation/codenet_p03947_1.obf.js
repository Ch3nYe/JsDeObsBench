function Main(_0x29f97d) {
    var _0x315b3c = function (_0x2aff49, _0x4cbdc0) {
        return _0x2aff49['split'](_0x4cbdc0)['length'] - 0x1;
    };
    lines = _0x29f97d['split']('\x0a');
    var _0x89725a = lines[0x0];
    var _0x17e133 = _0x315b3c(_0x89725a, 'BW');
    var _0x5ca89a = _0x315b3c(_0x89725a, 'WB');
    console['log'](_0x17e133 + _0x5ca89a);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));