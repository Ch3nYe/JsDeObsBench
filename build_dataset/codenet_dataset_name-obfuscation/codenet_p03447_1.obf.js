const BKRT = '\x0a';
const SPAC = '\x20';
const NOSP = '';
function Main(_0x58fd0c) {
    _0x58fd0c = []['concat'](..._0x58fd0c['split'](BKRT)['map'](_0x1b2029 => _0x1b2029['split'](SPAC)));
    const _0x200a1c = () => _0x58fd0c['shift']();
    const _0x2e6104 = () => ~~_0x58fd0c['shift']();
    return ~~(_0x2e6104() - _0x2e6104()) % _0x2e6104();
}
((_0x37069e, _0x433682, _0x4be368) => 'undefined' != typeof require ? console['log'](Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'))) : [
    _0x37069e = _0x37069e['split']('\x0a')['slice'](0x1, -0x1)['join']('\x0a'),
    _0x433682 = (function () {
        try {
            return Main(_0x37069e);
        } catch (_0x34c0a0) {
            return _0x34c0a0['stack'] || _0x34c0a0['message'];
        }
    }()),
    _0x4be368 = typeof _0x433682,
    'string' == _0x4be368 || (_0x433682 = JSON['stringify'](_0x433682)),
    $('<form>')['append']([
        [
            0xa,
            _0x37069e
        ],
        0x0,
        [
            0x1,
            _0x4be368
        ],
        0x0,
        [
            0xa,
            _0x433682
        ]
    ]['map'](_0x5cd8d5 => $(_0x5cd8d5 ? '<textarea>' : '<br>', _0x5cd8d5 && {
        'rows': _0x5cd8d5[0x0],
        'cols': 0x28,
        'text': _0x5cd8d5[0x1]
    })))['appendTo']('body')
])('\x0a1234\x0a150\x0a100\x0a');