const config = {
    'input': '/dev/stdin',
    'newline': '\x0a'
};
const line = require('fs')['readFileSync'](config['input'], 'utf-8')['split'](config['newline']);
let cnt = 0x0;
const isort = (_0x4b70f2, _0x3b3fb9) => {
    for (let _0x26ec19 = _0x3b3fb9; _0x26ec19 < _0x4b70f2['length']; _0x26ec19++) {
        let _0x425320 = _0x4b70f2[_0x26ec19];
        let _0x2ff415 = _0x26ec19 - _0x3b3fb9;
        while (_0x2ff415 >= 0x0 && _0x4b70f2[_0x2ff415] > _0x425320) {
            _0x4b70f2[_0x2ff415 + _0x3b3fb9] = _0x4b70f2[_0x2ff415];
            _0x2ff415 = _0x2ff415 - _0x3b3fb9;
            cnt++;
        }
        _0x4b70f2[_0x2ff415 + _0x3b3fb9] = _0x425320;
    }
    return _0x4b70f2;
};
const shellSort = _0x55d34d => {
    const _0x54a86b = _0x55d34d['map']((_0x653b33, _0x96e1f0) => 0x3 * _0x96e1f0 + 0x1)['filter'](_0x4549dc => _0x4549dc <= _0x55d34d['length'])['reverse']();
    console['log'](_0x54a86b['length']);
    console['log'](_0x54a86b['map'](_0x1f63b9 => _0x1f63b9['toString']())['join']('\x20'));
    for (i = 0x0; i < _0x55d34d['length']; i++) {
        _0x55d34d = isort(_0x55d34d, _0x54a86b[i]);
    }
    return _0x55d34d;
};
const n = parseInt(line[0x0]);
const data = line['slice'](0x1, n + 0x1)['map'](_0x1c02d1 => parseInt(_0x1c02d1));
const sorted = shellSort(data);
console['log'](cnt);
console['log'](sorted['map'](_0x4a47a3 => _0x4a47a3['toString']())['join']('\x0a'));