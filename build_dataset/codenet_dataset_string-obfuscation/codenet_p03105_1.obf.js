function a0_0x2952(bVpHuJ, key) {
    const stringArray = a0_0x4e46();
    a0_0x2952 = function (index, key) {
        index = index - 0xd1;
        let value = stringArray[index];
        return value;
    };
    return a0_0x2952(bVpHuJ, key);
}
const a0_0xe7af3b = a0_0x2952;
(function (stringArrayFunction, comparisonValue) {
    const _0xee4550 = a0_0x2952;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0xee4550(0xd4)) / 0x1 + -parseInt(_0xee4550(0xda)) / 0x2 * (-parseInt(_0xee4550(0xd3)) / 0x3) + parseInt(_0xee4550(0xd9)) / 0x4 * (parseInt(_0xee4550(0xd2)) / 0x5) + -parseInt(_0xee4550(0xd8)) / 0x6 + -parseInt(_0xee4550(0xd1)) / 0x7 + -parseInt(_0xee4550(0xd5)) / 0x8 * (-parseInt(_0xee4550(0xdf)) / 0x9) + -parseInt(_0xee4550(0xdc)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4e46, 0x811eb));
function a0_0x4e46() {
    const _0x238556 = [
        '1085594ZPrAzn',
        'split',
        '7139100bYYRNe',
        'readFileSync',
        'log',
        '1648827IWkDlL',
        '254408rqYlBH',
        '2582200LFnwEV',
        '3IdARIG',
        '979111snCanK',
        '8YQdyzS',
        'map',
        '/dev/stdin',
        '5654532pSfMsM',
        '4wXGkYj'
    ];
    a0_0x4e46 = function () {
        return _0x238556;
    };
    return a0_0x4e46();
}
const main = input => {
    const _0x1d18e2 = a0_0x2952;
    const In = input[_0x1d18e2(0xdb)]('\x20')[_0x1d18e2(0xd6)](n => Number(n));
    const o1 = In[0x0] > In[0x1] ? 0x0 : In[0x1] / In[0x0];
    console[_0x1d18e2(0xde)](o1 >= In[0x2] ? In[0x2] : o1);
};
main(require('fs')[a0_0xe7af3b(0xdd)](a0_0xe7af3b(0xd7), 'utf8'));