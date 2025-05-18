let content = '';
process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
process['stdin']['on']('data', _0x5289d0 => {
    content += _0x5289d0;
});
process['stdin']['on']('end', () => {
    const _0xe0b64 = content['trim']()['split']('\x0a')['map'](_0x10c1a6 => _0x10c1a6['split']('\x20')['map'](_0x4ddbfe => parseInt(_0x4ddbfe, 0xa)));
    for (const _0x4d102d of _0xe0b64) {
        if (_0x4d102d[0x0] !== 0x0 || _0x4d102d[0x1] !== 0x0) {
            console['log'](drawReact(_0x4d102d));
        }
    }
});
const drawReact = ([_0x358488, _0x17155b]) => {
    const _0x4848e1 = '#'['repeat'](_0x17155b) + '\x0a';
    return _0x4848e1 + ('#' + '.'['repeat'](_0x17155b - 0x2) + '#\x0a')['repeat'](_0x358488 - 0x2) + _0x4848e1;
};