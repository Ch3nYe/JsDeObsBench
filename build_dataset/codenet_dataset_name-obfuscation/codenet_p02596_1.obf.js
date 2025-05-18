process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
var lines = [];
var reader = require('readline')['createInterface']({
    'input': process['stdin'],
    'output': process['stdout']
});
reader['on']('line', _0x40c440 => {
    lines['push'](_0x40c440);
});
reader['on']('close', () => {
    const _0x4bf0d0 = lines[0x0] - 0x0;
    let _0x448ecf = 0x0;
    for (let _0x5b6fd2 = 0x1; _0x5b6fd2 <= 0xf4240; _0x5b6fd2++) {
        _0x448ecf *= 0xa;
        _0x448ecf += 0x7;
        _0x448ecf %= _0x4bf0d0;
        if (_0x448ecf === 0x0) {
            console['log'](_0x5b6fd2);
            return;
        }
    }
    console['log'](-0x1);
});
function check(_0x3c0a98) {
    return !![];
}