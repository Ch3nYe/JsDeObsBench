process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
var lines = [];
var reader = require('readline')['createInterface']({
    'input': process['stdin'],
    'output': process['stdout']
});
reader['on']('line', _0x50bc1d => {
    lines['push'](_0x50bc1d);
});
reader['on']('close', () => {
    const _0xf30532 = lines[0x1]['split']('\x20')['map'](_0x14937c => _0x14937c - 0x0);
    let _0x1148a9 = 0x0;
    for (let _0x475eec = 0x0; _0x475eec < _0xf30532['length'] - 0x1; _0x475eec++) {
        _0x1148a9 += Math['min'](_0xf30532[_0x475eec], _0xf30532[_0x475eec + 0x1]);
    }
    _0x1148a9 += _0xf30532[_0xf30532['length'] - 0x1] + _0xf30532[0x0];
    console['log'](_0x1148a9);
});