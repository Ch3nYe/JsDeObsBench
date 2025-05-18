console['log']((_0x5dc9d4 => {
    const [[_0x64cc6a], _0x427a6d, [_0x37c1c1], _0x4e59fb] = _0x5dc9d4['trim']()['split']('\x0a')['map'](_0x33e101 => _0x33e101['split']('\x20')['map'](_0x20536c => _0x20536c | 0x0));
    _0x427a6d['sort']((_0x3945e7, _0x5eab24) => _0x3945e7 - _0x5eab24);
    _0x4e59fb['sort']((_0x34578b, _0x5d995d) => _0x34578b - _0x5d995d);
    let _0x236161 = -0x1;
    _0x4b1c3e:
        for (let _0x48980a = 0x0; _0x48980a < _0x37c1c1; _0x48980a++) {
            while (++_0x236161 < _0x64cc6a) {
                if (_0x427a6d[_0x236161] > _0x4e59fb[_0x48980a])
                    return 'NO';
                if (_0x427a6d[_0x236161] === _0x4e59fb[_0x48980a])
                    continue _0x4b1c3e;
            }
            return 'NO';
        }
    return 'YES';
})(require('fs')['readFileSync']('/dev/stdin', 'utf8')));