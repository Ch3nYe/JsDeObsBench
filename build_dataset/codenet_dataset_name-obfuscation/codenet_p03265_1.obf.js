process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
var lines = [];
var reader = require('readline')['createInterface']({
    'input': process['stdin'],
    'output': process['stdout']
});
reader['on']('line', _0x1a701e => {
    lines['push'](_0x1a701e);
});
reader['on']('close', () => {
    var _0x56ad3a = lines[0x0]['split']('\x20');
    var _0x1486df = Number(_0x56ad3a[0x0]);
    var _0x89632c = Number(_0x56ad3a[0x1]);
    var _0x46c413 = Number(_0x56ad3a[0x2]);
    var _0x9cae1f = Number(_0x56ad3a[0x3]);
    var _0x5855ff = [];
    _0x5855ff['push'](_0x46c413 + (_0x89632c - _0x9cae1f));
    _0x5855ff['push'](_0x46c413 + _0x9cae1f - _0x1486df);
    _0x5855ff['push'](_0x1486df + _0x89632c - _0x9cae1f);
    _0x5855ff['push'](_0x46c413 + _0x89632c - _0x1486df);
    console['log'](_0x5855ff['join']('\x20'));
});