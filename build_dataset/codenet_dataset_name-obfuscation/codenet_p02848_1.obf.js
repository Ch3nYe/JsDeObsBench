function Main(_0x47bcfb) {
    const _0x4c777b = _0x47bcfb['split']('\x0a')['filter'](_0x1b3627 => _0x1b3627);
    const _0x1acec0 = Number(_0x4c777b[0x0]);
    const _0x4ec33a = _0x4c777b[0x1]['split']('');
    console['log'](_0x4ec33a['map'](function (_0x506848) {
        let _0xe8ddec = _0x506848['charCodeAt']() + _0x1acec0;
        if (_0xe8ddec > 0x5a) {
            _0xe8ddec -= 0x1a;
        }
        return String['fromCharCode'](_0xe8ddec);
    })['join'](''));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));