(function main() {
    const _0x4ca024 = require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split']('\x0a');
    const _0x43b922 = Number(_0x4ca024['shift']());
    const _0x404a93 = _0x4ca024['shift']()['split']('\x20')['map'](Number);
    const _0x301bbc = Number(_0x4ca024['shift']());
    const _0x3d66cb = _0x4ca024['shift']()['split']('\x20')['map'](Number);
    const _0x458fc9 = (_0x12ee27, _0x31e017) => {
        if (_0x31e017 == 0x0)
            return !![];
        if (_0x12ee27 >= _0x43b922)
            return ![];
        return _0x458fc9(_0x12ee27 + 0x1, _0x31e017) || _0x458fc9(_0x12ee27 + 0x1, _0x31e017 - _0x404a93[_0x12ee27]);
    };
    _0x3d66cb['map'](_0x330b4b => _0x458fc9(0x0, _0x330b4b) ? 'yes' : 'no')['forEach'](_0x457bbb => console['log'](_0x457bbb));
}());