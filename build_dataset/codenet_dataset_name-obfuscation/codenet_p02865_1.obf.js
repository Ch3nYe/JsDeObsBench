process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
var lines = [];
var reader = require('readline')['createInterface']({
    'input': process['stdin'],
    'output': process['stdout']
});
reader['on']('line', _0x3fb782 => {
    lines['push'](_0x3fb782);
});
reader['on']('close', () => {
    const _0x180784 = +lines[0x0];
    console['log'](_0x180784 % 0x2 ? (_0x180784 - 0x1) / 0x2 : _0x180784 / 0x2 - 0x1);
});