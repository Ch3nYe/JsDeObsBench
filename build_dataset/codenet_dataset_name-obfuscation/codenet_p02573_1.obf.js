const processData = _0x3948f1 => {
    const [_0xd4f4a6, _0x51818d] = _0x3948f1[0x0]['split']('\x20')['map'](_0x321415 => +_0x321415);
    let _0x24796f = {};
    for (let _0x57859f = 0x0; _0x57859f < _0x51818d; _0x57859f++) {
        const _0x923f26 = _0x3948f1[_0x57859f + 0x1]['split']('\x20')['map'](_0x581e31 => +_0x581e31);
        let _0x2ebd20 = _0x24796f[_0x923f26[0x0]] || _0x24796f[_0x923f26[0x1]] || {};
        _0x24796f[_0x923f26[0x0]] = _0x2ebd20;
        _0x24796f[_0x923f26[0x1]] = _0x2ebd20;
        _0x2ebd20[_0x923f26[0x0]] = !![];
        _0x2ebd20[_0x923f26[0x1]] = !![];
    }
    let _0x18678c = 0x1;
    for (let _0x13776d in _0x24796f) {
        let _0x7b5171 = 0x0;
        for (let _0x5e5a24 in _0x24796f[_0x13776d]) {
            _0x7b5171++;
        }
        _0x18678c = Math['max'](_0x18678c, _0x7b5171);
    }
    console['log'](_0x18678c);
};
let i = '';
process['stdin']['on']('data', _0x20584a => i += _0x20584a);
process['stdin']['on']('end', () => {
    const {EOL: _0x2deb20} = require('os');
    const _0x1e1ab1 = i['split'](_0x2deb20);
    processData(_0x1e1ab1);
});