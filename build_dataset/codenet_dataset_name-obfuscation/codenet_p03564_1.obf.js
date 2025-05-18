process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
function Main(_0x4d5bfa) {
    var _0x569575 = _0x4d5bfa['split']('\x0a');
    var _0x480909 = _0x569575[0x0]['split']('\x20');
    var _0x4a9521 = _0x569575[0x1]['split']('\x20');
    var _0x5f2415 = Number(_0x480909[0x0]);
    var _0x4acb59 = Number(_0x4a9521[0x0]);
    var _0x312b44 = 0x1;
    for (var _0x2fc1b1 = 0x1; _0x2fc1b1 <= _0x5f2415; _0x2fc1b1++) {
        if (_0x312b44 < _0x4acb59)
            _0x312b44 *= 0x2;
        else
            _0x312b44 += _0x4acb59;
    }
    console['log'](_0x312b44);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));