function Main(_0x477d3b) {
    _0x477d3b = _0x477d3b['split']('\x0a');
    tmp0 = _0x477d3b[0x0]['split']('\x20');
    N = Number(tmp0[0x0]);
    M = Number(tmp0[0x1]);
    C = Number(tmp0[0x2]);
    B = _0x477d3b[0x1]['split']('\x20');
    var _0x326ac1 = 0x0;
    for (var _0x57cd27 = 0x0; _0x57cd27 < N; _0x57cd27++) {
        A = _0x477d3b[0x2 + _0x57cd27]['split']('\x20');
        var _0x2d160e = 0x0;
        for (var _0x4e91b7 = 0x0; _0x4e91b7 < M; _0x4e91b7++) {
            _0x2d160e += Number(A[_0x4e91b7]) * Number(B[_0x4e91b7]);
        }
        if (_0x2d160e + C > 0x0) {
            _0x326ac1++;
        }
    }
    console['log'](_0x326ac1);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));