function Main(_0x16f56b) {
    var _0x3b053b;
    const _0xa4c895 = parseInt(_0x16f56b[0x0]);
    const _0x49378a = parseInt(_0x16f56b[0x1]);
    _0x3b053b = _0xa4c895 < _0x49378a ? 0x0 : 0xa;
    console['log'](_0x3b053b);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split'](/\n|\s/));