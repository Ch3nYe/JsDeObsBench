let content = '';
process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
process['stdin']['on']('data', _0x2e7a11 => {
    content += _0x2e7a11;
});
process['stdin']['on']('end', () => {
    const _0x501f9c = [];
    const _0x1730b9 = content['trim']()['split']('\x20')['map'](_0x54b5e2 => {
        const _0x4a1f74 = parseInt(_0x54b5e2, 0xa);
        return isNaN(_0x4a1f74) ? _0x54b5e2 : _0x4a1f74;
    });
    const _0x121136 = '+-/*'['split']('');
    for (const _0x55a22a of _0x1730b9) {
        if (_0x121136['includes'](_0x55a22a)) {
            const _0x592097 = _0x501f9c['pop']();
            const _0x3dd96e = _0x501f9c['pop']();
            _0x501f9c['push'](expr(_0x55a22a, _0x3dd96e, _0x592097));
        } else {
            _0x501f9c['push'](_0x55a22a);
        }
    }
    console['log'](_0x501f9c['pop']());
});
const expr = (_0x548b6c, _0x446d75, _0x4a49fb) => {
    switch (_0x548b6c) {
    case '*':
        return _0x446d75 * _0x4a49fb;
    case '/':
        return _0x446d75 / _0x4a49fb;
    case '+':
        return _0x446d75 + _0x4a49fb;
    case '-':
        return _0x446d75 - _0x4a49fb;
    }
};