const a0_0x44bd87 = a0_0x3a82;
let content = '';
process[a0_0x44bd87(0x0)][a0_0x44bd87(0x1)]();
process['stdin']['setEncoding'](a0_0x44bd87(0x2));
function a0_0x3a6e() {
    const _0xae34d1 = [
        'stdin',
        'resume',
        'utf8',
        'data',
        'end',
        'trim',
        'split',
        'slice',
        'map',
        'reduce',
        'log'
    ];
    a0_0x3a6e = function () {
        return _0xae34d1;
    };
    return a0_0x3a6e();
}
process['stdin']['on'](a0_0x44bd87(0x3), buf => {
    content += buf;
});
function a0_0x3a82(HRHYZj, key) {
    const stringArray = a0_0x3a6e();
    a0_0x3a82 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x3a82(HRHYZj, key);
}
process[a0_0x44bd87(0x0)]['on'](a0_0x44bd87(0x4), () => {
    const _0x5e903f = a0_0x3a82;
    const lines = content[_0x5e903f(0x5)]()[_0x5e903f(0x6)]('\x0a')[_0x5e903f(0x7)](0x0, -0x1);
    const result = lines[_0x5e903f(0x8)](num => num[_0x5e903f(0x6)]('')['map'](n => parseInt(n, 0xa))[_0x5e903f(0x9)]((prev, cur) => prev + cur));
    console[_0x5e903f(0xa)](result['join']('\x0a'));
});