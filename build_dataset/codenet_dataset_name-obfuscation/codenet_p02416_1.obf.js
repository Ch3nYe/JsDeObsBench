let content = '';
process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
process['stdin']['on']('data', _0x58cc92 => {
    content += _0x58cc92;
});
process['stdin']['on']('end', () => {
    const _0x4af3ca = content['trim']()['split']('\x0a')['slice'](0x0, -0x1);
    const _0x816b9f = _0x4af3ca['map'](_0x13a75f => _0x13a75f['split']('')['map'](_0x12993e => parseInt(_0x12993e, 0xa))['reduce']((_0x12d6a6, _0x508418) => _0x12d6a6 + _0x508418));
    console['log'](_0x816b9f['join']('\x0a'));
});