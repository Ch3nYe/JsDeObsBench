function Main(_0x519834) {
    var _0xe2ea68 = 0x0;
    for (var _0x21355d = 0x0; _0x21355d < _0x519834['length']; _0x21355d++) {
        if (parseInt(_0x519834[_0x21355d]) != _0x21355d % 0x2)
            _0xe2ea68++;
    }
    console['log'](parseInt(Math['min'](_0xe2ea68, _0x519834['length'] - _0xe2ea68)));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));