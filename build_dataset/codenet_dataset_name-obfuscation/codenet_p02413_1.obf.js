'use strict';
(function (_0x1a7920) {
    function _0x3c835e(_0x48166c, _0x4739fe) {
        return _0x48166c + _0x4739fe;
    }
    function _0x50b71e(_0x3cfa7d) {
        var _0xd80000 = _0x3cfa7d['shift']();
        _0x3cfa7d['map'](function (_0x2f2a35) {
            return _0x2f2a35['push'](_0x2f2a35['reduce'](_0x3c835e));
        });
        var _0xb9fe36 = [];
        for (var _0x795f6 = 0x0; _0x795f6 < _0xd80000[0x1] + 0x1; _0x795f6++) {
            var _0x4721a = 0x0;
            for (var _0x1280b5 = 0x0; _0x1280b5 < _0xd80000[0x0]; _0x1280b5++) {
                _0x4721a += _0x3cfa7d[_0x1280b5][_0x795f6];
            }
            _0xb9fe36['push'](_0x4721a);
        }
        _0x3cfa7d['push'](_0xb9fe36);
        return _0x3cfa7d['join']('\x0a')['replace'](/,/g, '\x20');
    }
    var _0x1bb677 = _0x1a7920['toString']()['trim']()['split']('\x0a');
    var _0x2bd3cc = _0x1bb677['map'](function (_0x34c4b8) {
        return _0x34c4b8['split']('\x20')['map'](Number);
    });
    console['log'](_0x50b71e(_0x2bd3cc));
}(require('fs')['readFileSync']('/dev/stdin', 'utf8')));