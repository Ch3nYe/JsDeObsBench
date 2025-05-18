function myout(_0x3da163) {
    console['log'](_0x3da163);
}
function Main(_0x3e678d) {
    _0x3e678d = parseInt(_0x3e678d);
    var _0xa42640 = 0x3b9aca00;
    for (var _0x1e885c = 0x1; _0x1e885c <= 0xa; _0x1e885c++) {
        var _0x1b7d06 = (_0x3e678d * _0x1e885c)['toString']()['split']('')['map'](_0x17dde1 => Number(_0x17dde1));
        var _0x24e645 = 0x0;
        for (var _0x2bef2e = 0x0; _0x2bef2e < _0x1b7d06['length']; _0x2bef2e++) {
            _0x24e645 += _0x1b7d06[_0x2bef2e];
        }
        _0xa42640 = Math['min'](_0xa42640, _0x24e645);
    }
    myout(_0xa42640);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']());