const BKRT = '\x0a';
const SPAC = '\x20';
const NOSP = '';
function Main(_0x20a5c2) {
    _0x20a5c2 = []['concat'](..._0x20a5c2['split'](BKRT)['map'](_0x29414f => _0x29414f['split'](SPAC)));
    const _0xf96d6e = () => _0x20a5c2['shift']();
    const _0x34da85 = () => ~~_0x20a5c2['shift']();
    var _0x1833ba = _0x34da85();
    var _0x5b79c4 = _0x34da85();
    var _0x1f7d47 = _0x34da85();
    var _0x41418b = 0x0;
    var _0x6356c1 = 0x0;
    for (var _0x14c918 = 0x0; _0x14c918 < _0x5b79c4; _0x14c918++) {
        var _0x5cab31 = _0x34da85();
        if (_0x5cab31 < _0x1f7d47) {
            _0x6356c1++;
        } else {
            _0x41418b++;
        }
    }
    return ~~Math['min'](_0x6356c1, _0x41418b);
}
((_0x5b3445, _0x2ad17e, _0x52ac03) => 'undefined' != typeof require ? console['log'](Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'))) : [
    _0x5b3445 = _0x5b3445['split']('\x0a')['slice'](0x1, -0x1)['join']('\x0a'),
    _0x2ad17e = (function () {
        try {
            return Main(_0x5b3445);
        } catch (_0x793609) {
            return _0x793609['stack'] || _0x793609['message'];
        }
    }()),
    _0x52ac03 = typeof _0x2ad17e,
    'string' == _0x52ac03 || (_0x2ad17e = JSON['stringify'](_0x2ad17e)),
    $('<form>')['append']([
        [
            0xa,
            _0x5b3445
        ],
        0x0,
        [
            0x1,
            _0x52ac03
        ],
        0x0,
        [
            0xa,
            _0x2ad17e
        ]
    ]['map'](_0x5e1bfd => $(_0x5e1bfd ? '<textarea>' : '<br>', _0x5e1bfd && {
        'rows': _0x5e1bfd[0x0],
        'cols': 0x28,
        'text': _0x5e1bfd[0x1]
    })))['appendTo']('body')
])('\x0a5\x203\x203\x0a1\x202\x204\x0a');