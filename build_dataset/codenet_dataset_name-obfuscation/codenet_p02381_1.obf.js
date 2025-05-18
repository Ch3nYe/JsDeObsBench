'use strict';
(function (_0x14b32c) {
    var _0x5606e2 = _0x14b32c['toString']();
    var _0xe1035b = /\w+\n[\w\s]*?\n/g;
    var _0x184d25 = function (_0x55f0a0) {
        return _0x55f0a0['map'](_0x19d2f5)['join']('\x0a');
        function _0x19d2f5(_0x56ee75) {
            var _0x467f7b = _0x56ee75['length'];
            var _0x2f3ae3 = _0x56ee75['reduce'](_0x55cac7) / _0x467f7b;
            return Math['sqrt'](_0x56ee75['map'](function (_0x22a00d) {
                return Math['pow'](_0x22a00d - _0x2f3ae3, 0x2);
            })['reduce'](_0x55cac7) / _0x467f7b)['toFixed'](0x8);
        }
        function _0x55cac7(_0x46e59e, _0x45ab39) {
            return _0x46e59e + _0x45ab39;
        }
    }(_0x5606e2['match'](_0xe1035b)['map'](function (_0x19ad74) {
        return _0x19ad74['split']('\x0a')[0x1]['split']('\x20')['slice'](0x0, _0x19ad74['split']('\x0a')[0x0])['map'](Number);
    }));
    console['log'](_0x184d25);
}(require('fs')['readFileSync']('/dev/stdin', 'utf8')));