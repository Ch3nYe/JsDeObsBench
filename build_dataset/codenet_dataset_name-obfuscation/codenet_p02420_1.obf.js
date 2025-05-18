'use strict';
(function (_0x271efe) {
    var _0x8e9406 = _0x271efe['toString']();
    var _0x6a688c = /[A-Za-z]+\n([1-9][0-9]*\n)+/g;
    var _0x230882 = function (_0x36202f) {
        return _0x36202f['map'](function (_0x135b9d) {
            return _0x135b9d['slice'](-_0x135b9d[0x1])['map'](Number)['reduce'](function (_0x248d34, _0x44c2de) {
                return _0x248d34['slice'](_0x44c2de) + _0x248d34['slice'](0x0, _0x44c2de);
            }, _0x135b9d[0x0]);
        })['join']('\x0a');
    }(_0x8e9406['match'](_0x6a688c)['map'](function (_0x31d67c) {
        return _0x31d67c['trim']()['split']('\x0a');
    }));
    console['log'](_0x230882);
}(require('fs')['readFileSync']('/dev/stdin', 'utf8')));