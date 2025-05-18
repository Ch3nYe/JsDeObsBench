process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
var lines = [];
var reader = require('readline')['createInterface']({
    'input': process['stdin'],
    'output': process['stdout']
});
reader['on']('line', _0x453c11 => {
    lines['push'](_0x453c11);
});
reader['on']('close', () => {
    const _0x1b3fec = lines[0x1]['split']('\x20')['map'](_0x55bb53 => _0x55bb53 - 0x0);
    const _0x4d9dd6 = lines[0x1]['split']('\x20')['map'](_0x504c7b => _0x504c7b - 0x0)['sort']((_0x2da859, _0x46bab7) => _0x2da859 - _0x46bab7);
    let _0x1a1ba6 = _0x1b3fec['filter']((_0x1ef880, _0x8a6a5b) => _0x1ef880 != _0x4d9dd6[_0x8a6a5b])['length'];
    console['log'](_0x1a1ba6 <= 0x2 ? 'YES' : 'NO');
});
min = (..._0x4c7a32) => {
    return _0x4c7a32['reduce']((_0x2fdfd7, _0x5c0989) => _0x2fdfd7 < _0x5c0989 ? _0x2fdfd7 : _0x5c0989, _0x4c7a32[0x0]);
};