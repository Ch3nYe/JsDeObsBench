const a0_0x2c2cb1 = a0_0x3fec;
const rl = require(a0_0x2c2cb1(0x0))['createInterface']({ 'input': process[a0_0x2c2cb1(0x1)] });
function a0_0x3fec(VSSMod, key) {
    const stringArray = a0_0x3cfd();
    a0_0x3fec = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x3fec(VSSMod, key);
}
rl['on'](a0_0x2c2cb1(0x2), line => {
    const _0x3dc15b = a0_0x3fec;
    const param = line[_0x3dc15b(0x3)]('\x20');
    solve(Number(param[0x0]), Number(param[0x1]));
    rl[_0x3dc15b(0x4)]();
});
function a0_0x3cfd() {
    const _0x1992f5 = [
        'readline',
        'stdin',
        'line',
        'split',
        'close',
        'log'
    ];
    a0_0x3cfd = function () {
        return _0x1992f5;
    };
    return a0_0x3cfd();
}
function solve(x, y) {
    const _0x4f928a = a0_0x3fec;
    console[_0x4f928a(0x5)](x + y / 0x2);
}