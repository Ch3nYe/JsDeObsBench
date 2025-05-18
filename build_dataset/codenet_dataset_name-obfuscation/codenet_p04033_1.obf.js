const main = _0x53af5a => {
    const _0x22c0ea = _0x53af5a['split'](/\n|\s/)['map'](_0x2f92a9 => parseInt(_0x2f92a9, 0xa));
    const _0x42f3d4 = _0x22c0ea[0x0];
    const _0x5e3feb = _0x22c0ea[0x1];
    if (_0x42f3d4 <= 0x0 && 0x0 <= _0x5e3feb) {
        return 'Zero';
    }
    if ((_0x5e3feb - _0x42f3d4) % 0x2 || _0x42f3d4 > 0x0) {
        return 'Positive';
    } else {
        return 'Negative';
    }
};
console['log'](main(require('fs')['readFileSync']('/dev/stdin', 'utf8')));