function main(_0x32a223) {
    'use strict';
    const _0x3b5c01 = _0x32a223['split']('\x0a');
    const _0x561ba2 = _0x3b5c01[0x0]['split']('\x20')['map'](_0x5a3481 => +_0x5a3481);
    const _0x484735 = _0x561ba2[0x0];
    const _0x25a120 = _0x561ba2[0x1];
    let _0x324de5 = _0x3b5c01['slice'](0x1)['filter'](_0x31a981 => _0x31a981)['map'](_0x3b082e => +_0x3b082e);
    let _0xf34e5b = [];
    const _0x1d8755 = (_0x2de598, _0x2c270f, _0x43c793) => {
        if (_0x2c270f['length'] === 0x0) {
            _0xf34e5b['push'](_0x43c793);
            return;
        }
        const _0x4cb6f2 = _0x2c270f[0x0] >= _0x2de598 ? _0x2c270f[0x0] - _0x2de598 : _0x484735 - _0x2de598 + _0x2c270f[0x0];
        const _0xb9f6e5 = _0x2c270f[_0x2c270f['length'] - 0x1] <= _0x2de598 ? _0x2de598 - _0x2c270f[_0x2c270f['length'] - 0x1] : _0x2de598 + (_0x484735 - _0x2c270f[_0x2c270f['length'] - 0x1]);
        const _0x17411b = _0x2c270f['concat']();
        const _0x24e503 = _0x17411b['shift']();
        const _0x173386 = _0x2c270f['concat']();
        const _0x532e2e = _0x173386['pop']();
        _0x1d8755(_0x24e503, _0x17411b, _0x43c793 + _0x4cb6f2);
        _0x1d8755(_0x532e2e, _0x173386, _0x43c793 + _0xb9f6e5);
    };
    _0x1d8755(0x0, _0x324de5, 0x0);
    console['log'](Math['max']['apply'](null, _0xf34e5b));
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));