process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
process['stdin']['on']('data', function (_0x3b36ca) {
    var _0x3ebcfa = _0x3b36ca['trim']()['split']('\x0a');
    var _0x5dd6cb = 0x1;
    while (!![]) {
        var _0xfebdc0 = _0x3ebcfa['shift']();
        if (_0xfebdc0 == 0x0)
            break;
        var _0x470bc1 = [];
        while (_0xfebdc0--)
            _0x470bc1['push'](_0x3ebcfa['shift']()['split']('\x20')['map'](Number));
        _0x470bc1['push'](_0x470bc1[0x0]);
        var _0x29d16e = 0x0;
        for (var _0xac7e7 = 0x0; _0xac7e7 < _0x470bc1['length'] - 0x1; _0xac7e7++) {
            _0x29d16e += _0x470bc1[_0xac7e7][0x0] * _0x470bc1[_0xac7e7 + 0x1][0x1] - _0x470bc1[_0xac7e7][0x1] * _0x470bc1[_0xac7e7 + 0x1][0x0];
        }
        console['log'](_0x5dd6cb + '\x20' + Math['abs'](_0x29d16e / 0x2)['toFixed'](0x1));
        _0x3ebcfa['shift']();
        _0x5dd6cb++;
    }
});