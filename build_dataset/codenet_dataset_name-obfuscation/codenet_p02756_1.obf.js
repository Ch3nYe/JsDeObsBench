function Main(_0x202464) {
    'use strict';
    const _0x43a7e8 = _0x202464['split']('\x0a');
    const _0x246958 = _0x43a7e8['shift']()['split']();
    const _0x29bfd5 = parseInt(_0x43a7e8['shift']());
    const _0x128dfe = _0x43a7e8['map'](_0x5bb48b => _0x5bb48b['split']('\x20'));
    let _0x59dbbe = 0x0;
    for (let _0x1493aa = 0x0; _0x1493aa < _0x29bfd5; _0x1493aa++) {
        const _0x164eb8 = _0x128dfe[_0x1493aa];
        if (_0x164eb8['length'] == 0x1)
            _0x59dbbe = (_0x59dbbe + 0x1) % 0x2;
        else if (_0x164eb8['length'] == 0x3) {
            if (_0x59dbbe + parseInt(_0x164eb8[0x1]) % 0x2 == 0x0)
                _0x246958['push'](_0x164eb8[0x2]);
            else
                _0x246958['unshift'](_0x164eb8[0x2]);
        }
    }
    if (_0x59dbbe)
        console['log'](_0x246958['reverse']()['join']('') + '\x0a');
    else
        console['log'](_0x246958['join']('') + '\x0a');
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));