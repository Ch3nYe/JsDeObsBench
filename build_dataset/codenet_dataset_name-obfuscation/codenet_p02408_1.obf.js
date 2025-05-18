'use strict';
(function (_0x4d7742) {
    var _0x121690 = _0x4d7742['toString']()['split']('\x0a');
    var _0x2ab06e = function (_0x46e1d5) {
        return new _0x12c113()['filter'](function (_0xd02385) {
            return this['indexOf'](_0xd02385) === -0x1;
        }, _0x46e1d5)['join']('\x0a');
        function _0x12c113() {
            var _0x46bbfd = [];
            [
                'S',
                'H',
                'C',
                'D'
            ]['forEach'](function (_0x52ba9c) {
                for (var _0x1521d7 = 0x0; _0x1521d7 < 0xd; _0x1521d7++)
                    _0x46bbfd['push']([
                        _0x52ba9c,
                        _0x1521d7 + 0x1
                    ]['join']('\x20'));
            });
            return _0x46bbfd;
        }
    }(_0x121690['slice'](0x0, _0x121690['shift']()));
    if (_0x2ab06e['length'] !== 0x0)
        console['log'](_0x2ab06e);
}(require('fs')['readFileSync']('/dev/stdin', 'utf8')));