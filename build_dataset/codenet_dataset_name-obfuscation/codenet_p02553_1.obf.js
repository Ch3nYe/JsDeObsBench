process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
var lines = [];
var t = [];
var reader = require('readline')['createInterface']({
    'input': process['stdin'],
    'output': process['stdout']
});
reader['on']('line', _0x18fc5d => {
    lines['push'](_0x18fc5d);
});
reader['on']('close', () => {
    var _0x105b13 = lines[0x0]['split']('\x20');
    var _0x3b662d = parseInt(_0x105b13[0x0]);
    var _0x7fed07 = parseInt(_0x105b13[0x1]);
    var _0x2c4290 = parseInt(_0x105b13[0x2]);
    var _0xa7619f = parseInt(_0x105b13[0x3]);
    var _0x36afa9 = _0x3b662d * _0x2c4290;
    var _0x1a937e = _0x3b662d * _0xa7619f;
    var _0x2e1e7a = _0x7fed07 * _0x2c4290;
    var _0x2dbc19 = _0x7fed07 * _0xa7619f;
    t['push'](_0x36afa9);
    t['push'](_0x1a937e);
    t['push'](_0x2e1e7a);
    t['push'](_0x2dbc19);
    console['log'](Math['max']['apply'](null, t));
});