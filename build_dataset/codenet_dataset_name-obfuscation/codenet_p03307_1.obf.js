function Main(_0x35f906) {
    _0x35f906 = _0x35f906['split']('\x20');
    X = 0x2;
    N = _0x35f906['map'](_0x116488 => parseInt(_0x116488, 0xa));
    if (N % X == 0x0) {
        console['log'](N[0x0]);
    } else {
        var _0x4acec7 = N[0x0] * X;
        console['log'](_0x4acec7);
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));