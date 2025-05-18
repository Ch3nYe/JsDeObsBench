const main = _0xc07c08 => {
    const [_0x56ad8c, ..._0x2931d3] = _0xc07c08['trim']()['split']('\x0a');
    const _0x2db99c = [
        'AC',
        'WA',
        'TLE',
        'RE'
    ];
    const _0x34a6c4 = {};
    for (let _0x30a150 of _0x2db99c)
        _0x34a6c4[_0x30a150] = 0x0;
    for (let _0x4430bd of _0x2931d3)
        _0x34a6c4[_0x4430bd] += 0x1;
    for (let _0x2bc672 of _0x2db99c)
        console['log'](_0x2bc672 + '\x20x\x20' + _0x34a6c4[_0x2bc672]);
};
process['env']['MYTEST'] ? test() : main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));