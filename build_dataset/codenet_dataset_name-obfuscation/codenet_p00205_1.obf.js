function main() {
    var _0x581f6a, _0x56e6d3, _0x537e8b, _0x43ab96 = 0x0, _0x572b99;
    for (;;) {
        if (input[_0x43ab96] == 0x0)
            break;
        _0x581f6a = [];
        for (_0x572b99 = 0x0; _0x572b99 < 0x5; _0x572b99++) {
            _0x581f6a['push'](Number(input[_0x43ab96++]));
        }
        _0x56e6d3 = _0x581f6a['reduce'](function (_0x42ed07, _0x4faa6c) {
            return _0x42ed07[_0x4faa6c] = !![], _0x42ed07;
        }, {});
        keys = Object['keys'](_0x56e6d3)['map'](Number)['sort'](function (_0x40099d, _0x531b2f) {
            return _0x40099d - _0x531b2f;
        });
        if (keys['length'] === 0x2) {
            if (keys[0x1] - keys[0x0] == 0x2) {
                _0x537e8b = keys[0x0];
                keys[0x0] = keys[0x1];
                keys[0x1] = _0x537e8b;
            }
            _0x581f6a['forEach'](function (_0x34b9df) {
                console['log'](keys['indexOf'](_0x34b9df) + 0x1);
            });
        } else {
            _0x581f6a['forEach'](function () {
                console['log'](0x3);
            });
        }
    }
}
var input = '';
process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
process['stdin']['on']('data', function (_0x4d8752) {
    input += _0x4d8752;
});
process['stdin']['on']('end', function () {
    input = input['split']('\x0a');
    main();
});