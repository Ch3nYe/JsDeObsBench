function Main(_0x5be8d9) {
    var _0xe6f912 = _0x5be8d9['split']('\x0a');
    var _0x26c79c = _0xe6f912['splice'](0x1, _0xe6f912['length']);
    var _0x68a9c = _0x26c79c['sort']((_0x455df6, _0x261db5) => _0x455df6 > _0x261db5 ? 0x1 : -0x1);
    console['log'](_0x68a9c['join'](''));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));