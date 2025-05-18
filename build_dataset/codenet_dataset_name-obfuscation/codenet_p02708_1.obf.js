const main = _0x550ec2 => {
    const _0x4c085b = 0xa ** 0x9 + 0x7;
    const [_0xacfbcc, _0x36656b] = _0x550ec2['trim']()['split']('\x20')['map'](Number);
    let _0x4d3bae = 0x0;
    for (let _0x5bcdff = _0x36656b; _0x5bcdff <= _0xacfbcc + 0x1; _0x5bcdff++) {
        const _0xb115b7 = (_0x5bcdff - 0x1) * _0x5bcdff / 0x2;
        const _0x450f00 = _0xacfbcc - _0x5bcdff + 0x1;
        const _0xdb9cae = (_0x450f00 + _0xacfbcc) * _0x5bcdff / 0x2;
        _0x4d3bae += _0xdb9cae - _0xb115b7 + 0x1;
    }
    return console['log']((_0x4d3bae % _0x4c085b + _0x4c085b) % _0x4c085b);
};
process['env']['MYTEST'] ? process['env']['MYTEST'] === 'test' ? test() : main(require('fs')['readFileSync']('dev/stdin', 'utf8')) : main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));