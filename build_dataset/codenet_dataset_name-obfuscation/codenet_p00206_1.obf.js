function main() {
    var _0x55a3d0 = 0x0, _0x44cf15, _0x51c0a2, _0x57a659, _0x42e997;
    for (;;) {
        _0x57a659 = Number(input[_0x55a3d0++]);
        if (_0x57a659 === 0x0)
            break;
        _0x51c0a2 = !![];
        for (_0x44cf15 = 0x0; _0x44cf15 < 0xc; _0x44cf15++) {
            _0x42e997 = input[_0x55a3d0++]['split']('\x20')['map'](Number);
            _0x57a659 -= _0x42e997[0x0] - _0x42e997[0x1];
            if (_0x51c0a2 && _0x57a659 <= 0x0) {
                console['log'](_0x44cf15 + 0x1);
                _0x51c0a2 = ![];
            }
        }
        if (_0x51c0a2)
            console['log']('NA');
    }
}
var input = '';
process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
process['stdin']['on']('data', function (_0xfa1631) {
    input += _0xfa1631;
});
process['stdin']['on']('end', function () {
    input = input['split']('\x0a');
    main();
});