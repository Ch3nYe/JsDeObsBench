config = {
    'stdin': '/dev/stdin',
    'newline': '\x0a'
};
require('fs')['readFileSync'](config['stdin'], 'ascii')['trim']()['split'](config['newline'])['forEach'](function (_0x43220d) {
    var _0x3684c4 = _0x43220d['split']('\x20');
    var _0x41fbd0 = _0x3684c4[0x0], _0x561ced = _0x3684c4[0x1];
    console['log']('%d\x20%d', gcd(_0x41fbd0, _0x561ced), lcm(_0x41fbd0, _0x561ced));
});
function gcd(_0x4d8e57, _0x445a78) {
    while (_0x4d8e57 !== _0x445a78) {
        if (_0x4d8e57 < _0x445a78) {
            var _0x434140 = _0x4d8e57;
            _0x4d8e57 = _0x445a78;
            _0x445a78 = _0x434140;
        }
        if (_0x4d8e57 % _0x445a78 === 0x0)
            return _0x445a78;
        _0x4d8e57 -= _0x445a78;
    }
    return _0x4d8e57;
}
function lcm(_0x215f00, _0x552cf2) {
    var _0x57813f = gcd(_0x215f00, _0x552cf2);
    return _0x57813f * (_0x215f00 / _0x57813f) * (_0x552cf2 / _0x57813f);
}