const config = {
    'input': '/dev/stdin',
    'newline': '\x0a'
};
const line = require('fs')['readFileSync'](config['input'], 'utf-8')['split'](config['newline']);
const list = line[0x1]['split']('\x20')['map'](_0x58c6bc => parseInt(_0x58c6bc));
const partition = _0x57f5b3 => {
    const _0x46eb67 = _0x57f5b3[_0x57f5b3['length'] - 0x1];
    const _0x5abc53 = [..._0x57f5b3];
    let _0x4c6166 = -0x1;
    for (let _0x2b1f5c = 0x0; _0x2b1f5c < _0x57f5b3['length'] - 0x1; _0x2b1f5c++) {
        if (_0x5abc53[_0x2b1f5c] <= _0x46eb67) {
            _0x4c6166++;
            const _0x35ccd4 = _0x5abc53[_0x4c6166];
            _0x5abc53[_0x4c6166] = _0x5abc53[_0x2b1f5c];
            _0x5abc53[_0x2b1f5c] = _0x35ccd4;
        }
    }
    const _0x11d254 = _0x5abc53[_0x4c6166 + 0x1];
    _0x5abc53[_0x4c6166 + 0x1] = _0x5abc53[_0x57f5b3['length'] - 0x1];
    _0x5abc53[_0x57f5b3['length'] - 0x1] = _0x11d254;
    return [
        _0x4c6166 + 0x1,
        _0x5abc53
    ];
};
const res = partition(list);
console['log'](res[0x1]['map']((_0x206587, _0x46160f) => _0x46160f === res[0x0] ? '[' + _0x206587 + ']' : _0x206587['toString']())['join']('\x20'));