(function (_0x50d314) {
    input = _0x50d314['split']('\x0a');
    var _0x115321 = parseInt(input[0x0], 0xa);
    var _0x361161 = input[0x1]['split']('\x20');
    var _0x4cc3b0 = 0x1;
    var _0x2213cf = ![];
    var _0x51ff3e = ![];
    for (var _0x5c14aa = 0x0; _0x5c14aa < _0x115321 - 0x1; _0x5c14aa++) {
        if (_0x361161[_0x5c14aa] < _0x361161[_0x5c14aa + 0x1]) {
            _0x2213cf = !![];
        }
        if (_0x361161[_0x5c14aa] > _0x361161[_0x5c14aa + 0x1]) {
            _0x51ff3e = !![];
        }
        if (_0x2213cf && _0x51ff3e) {
            _0x2213cf = _0x51ff3e = ![];
            _0x4cc3b0++;
        }
    }
    console['log']('%d', _0x4cc3b0);
}(require('fs')['readFileSync']('/dev/stdin', 'utf8')));