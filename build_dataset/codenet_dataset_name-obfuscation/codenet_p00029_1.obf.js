process['stdin']['on']('data', function (_0x451d94, _0x456523, _0x5beed0) {
    _0x456523 = {}, n = 0x0, s = '';
    (_0x451d94 + '')['trim']()['split']('\x20')['some'](function (_0x5beab9) {
        n < (_0x456523[_0x5beab9 = _0x5beab9['toLowerCase']()] ? ++_0x456523[_0x5beab9] : _0x456523[_0x5beab9] = 0x1) && (n = _0x456523[_0x5beed0 = _0x5beab9]);
        s['length'] < _0x5beab9['length'] && (s = _0x5beab9);
    });
    console['log'](_0x5beed0 + '\x20' + s);
})['resume']();