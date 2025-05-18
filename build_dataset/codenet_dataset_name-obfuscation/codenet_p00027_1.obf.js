(function (_0x50899b) {
    var _0x8e1aac = _0x50899b['replace'](/\n$/, '')['split']('\x0a');
    while (!![]) {
        var _0x19958c = _0x8e1aac['shift']()['split']('\x20')['map'](Number);
        var _0x1bedef = _0x19958c['shift']();
        var _0x4ced85 = _0x19958c['shift']();
        if (_0x1bedef === 0x0 && _0x4ced85 === 0x0) {
            return;
        }
        var _0x2361fe = new Date(0x7d4, _0x1bedef - 0x1, _0x4ced85);
        console['log'](getWeekDay(_0x2361fe['getDay']()));
    }
}(require('fs')['readFileSync']('/dev/stdin', 'utf8')));
function getWeekDay(_0x373009) {
    var _0x38ed39 = [
        'Sunday',
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday'
    ];
    return _0x38ed39[_0x373009];
}