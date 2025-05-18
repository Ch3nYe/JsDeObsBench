function a0_0x4ac1(GATWIs, key) {
    const stringArray = a0_0x4ad1();
    a0_0x4ac1 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x4ac1(GATWIs, key);
}
const a0_0x3eaf89 = a0_0x4ac1;
function a0_0x4ad1() {
    const _0x1b57c2 = [
        'trim',
        'split',
        'TLE',
        'log',
        'env',
        'MYTEST'
    ];
    a0_0x4ad1 = function () {
        return _0x1b57c2;
    };
    return a0_0x4ad1();
}
const main = input => {
    const _0xba5233 = a0_0x4ac1;
    const [n, ...rows] = input[_0xba5233(0x0)]()[_0xba5233(0x1)]('\x0a');
    const k = [
        'AC',
        'WA',
        _0xba5233(0x2),
        'RE'
    ];
    const ans = {};
    for (let v of k)
        ans[v] = 0x0;
    for (let r of rows)
        ans[r] += 0x1;
    for (let v of k)
        console[_0xba5233(0x3)](v + '\x20x\x20' + ans[v]);
};
process[a0_0x3eaf89(0x4)][a0_0x3eaf89(0x5)] ? test() : main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));