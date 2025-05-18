(function (_0x267ba6) {
    var _0x235f99 = _0x267ba6['split']('\x0a');
    var _0x4103f = [
        [
            'black',
            0x0,
            0x0,
            0x0
        ],
        [
            'blue',
            0x0,
            0x0,
            0xff
        ],
        [
            'lime',
            0x0,
            0xff,
            0x0
        ],
        [
            'aqua',
            0x0,
            0xff,
            0x0
        ],
        [
            'red',
            0xff,
            0x0,
            0x0
        ],
        [
            'fuchsia',
            0xff,
            0x0,
            0xff
        ],
        [
            'yellow',
            0xff,
            0xff,
            0x0
        ],
        [
            'white',
            0xff,
            0xff,
            0xff
        ]
    ];
    for (var _0x3db253 = 0x0; _0x3db253 < _0x235f99['length']; ++_0x3db253) {
        if (_0x235f99[_0x3db253][0x0] === '#') {
            var _0x304add;
            var _0xad2378 = 0x3 * 0x100 * 0x100 + 0x1;
            var _0x232e54 = parseInt(_0x235f99[_0x3db253]['substr'](0x1, 0x2), 0x10);
            var _0x4f1a57 = parseInt(_0x235f99[_0x3db253]['substr'](0x3, 0x2), 0x10);
            var _0x43905 = parseInt(_0x235f99[_0x3db253]['substr'](0x5, 0x2), 0x10);
            for (var _0x57c1e5 = 0x0; _0x57c1e5 < _0x4103f['length']; ++_0x57c1e5) {
                var _0x490802 = Math['pow'](_0x232e54 - _0x4103f[_0x57c1e5][0x1], 0x2) + Math['pow'](_0x4f1a57 - _0x4103f[_0x57c1e5][0x2], 0x2) + Math['pow'](_0x43905 - _0x4103f[_0x57c1e5][0x3], 0x2);
                if (_0x490802 < _0xad2378) {
                    _0xad2378 = _0x490802;
                    _0x304add = _0x4103f[_0x57c1e5][0x0];
                }
            }
            console['log'](_0x304add);
        }
    }
}(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()));