Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function Main(_0x23a1e1) {
    input = _0x23a1e1['split']('\x0a');
    const _0x2c2e64 = parseInt(input[0x0]);
    var _0x2767a7;
    var _0x4e0111 = 0x0;
    for (var _0x4a896d = 0x1; _0x4a896d <= _0x2c2e64; _0x4a896d++) {
        _0x2767a7 = input[_0x4a896d]['split']('\x20');
        _0x4e0111 += parseInt(_0x2767a7[0x1]) - parseInt(_0x2767a7[0x0]) + 0x1;
    }
    console['log'](_0x4e0111);
}