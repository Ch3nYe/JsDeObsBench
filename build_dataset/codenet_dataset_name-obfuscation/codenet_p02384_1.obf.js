ptrn = [
    [
        0x0,
        0x1,
        0x2
    ],
    [
        0x0,
        0x2,
        0x4
    ],
    [
        0x0,
        0x4,
        0x3
    ],
    [
        0x0,
        0x3,
        0x1
    ],
    [
        0x1,
        0x5,
        0x2
    ],
    [
        0x1,
        0x2,
        0x0
    ],
    [
        0x1,
        0x0,
        0x3
    ],
    [
        0x1,
        0x3,
        0x5
    ],
    [
        0x2,
        0x1,
        0x5
    ],
    [
        0x2,
        0x5,
        0x4
    ],
    [
        0x2,
        0x4,
        0x0
    ],
    [
        0x2,
        0x0,
        0x1
    ]
];
function dice(_0x48412e) {
    this['n'] = _0x48412e;
    this['check'] = function (_0x56184b, _0x1c14f9) {
        _0x56184b = this['n']['indexOf'](_0x56184b);
        _0x1c14f9 = this['n']['indexOf'](_0x1c14f9);
        var _0x401912 = !![];
        if (_0x56184b > 0x2) {
            _0x56184b = 0x5 - _0x56184b;
            _0x401912 = ![];
        }
        for (let _0x2b94d2 = 0x4 * _0x56184b; _0x2b94d2 < 0xc; _0x2b94d2++) {
            if (_0x401912 && ptrn[_0x2b94d2][0x1] === _0x1c14f9) {
                console['log'](this['n'][ptrn[_0x2b94d2][0x2]]);
                break;
            } else if (!_0x401912 && ptrn[_0x2b94d2][0x2] === _0x1c14f9) {
                console['log'](this['n'][ptrn[_0x2b94d2][0x1]]);
                break;
            }
        }
    };
}
function Main(_0x4354be) {
    _0x4354be = _0x4354be['split']('\x0a');
    var _0x539a0f = new dice(_0x4354be[0x0]['split']('\x20'));
    _0x4354be['slice'](0x2, 0x2 + Number(_0x4354be[0x1]))['forEach'](function (_0x2852e5) {
        t = _0x2852e5['split']('\x20');
        _0x539a0f['check'](t[0x0], t[0x1]);
    });
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));