const a0_0x621719 = a0_0x16c9;
(function (stringArrayFunction, comparisonValue) {
    const _0x52ee1 = a0_0x16c9;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x52ee1(0x89)) / 0x1 + -parseInt(_0x52ee1(0x82)) / 0x2 * (-parseInt(_0x52ee1(0x81)) / 0x3) + parseInt(_0x52ee1(0x90)) / 0x4 + -parseInt(_0x52ee1(0x8d)) / 0x5 + parseInt(_0x52ee1(0x85)) / 0x6 * (parseInt(_0x52ee1(0x92)) / 0x7) + parseInt(_0x52ee1(0x8c)) / 0x8 + -parseInt(_0x52ee1(0x87)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x34a2, 0x83554));
process[a0_0x621719(0x80)][a0_0x621719(0x83)]();
process[a0_0x621719(0x80)][a0_0x621719(0x8a)](a0_0x621719(0x8f));
function a0_0x34a2() {
    const _0x578839 = [
        '28dWKZVK',
        'log',
        'stdin',
        '27EiTUxw',
        '45282DkDMpr',
        'resume',
        'line',
        '1314714RWCfBN',
        'split',
        '6604704lqTITx',
        'push',
        '547560jjBoLt',
        'setEncoding',
        'filter',
        '151168viUrxW',
        '2217810JGeXkE',
        'close',
        'utf8',
        '274628yxPxhw',
        'length'
    ];
    a0_0x34a2 = function () {
        return _0x578839;
    };
    return a0_0x34a2();
}
function a0_0x16c9(BkEkZR, key) {
    const stringArray = a0_0x34a2();
    a0_0x16c9 = function (index, key) {
        index = index - 0x7f;
        let value = stringArray[index];
        return value;
    };
    return a0_0x16c9(BkEkZR, key);
}
const lines = [];
const reader = require('readline')['createInterface']({
    'input': process['stdin'],
    'output': process['stdout']
});
reader['on'](a0_0x621719(0x84), line => {
    const _0x513faf = a0_0x621719;
    lines[_0x513faf(0x88)](line);
});
reader['on'](a0_0x621719(0x8e), () => {
    const _0x43c6e2 = a0_0x621719;
    const inputLength = Number(lines[0x0]);
    const inputString = lines[0x1];
    const inputArray = inputString[_0x43c6e2(0x86)]('');
    const rArray = inputArray['filter'](element => element === 'R');
    const gArray = inputArray['filter'](element => element === 'G');
    const bArray = inputArray[_0x43c6e2(0x8b)](element => element === 'B');
    let sum = 0x0;
    for (let i = 0x1; i < Number(inputLength) + 0x1; i++) {
        for (let j = i + 0x1; j < Number(inputLength) + 0x1; j++) {
            const k = j + j - i;
            if (k <= inputLength && inputArray[i - 0x1] !== inputArray[j - 0x1] && inputArray[j - 0x1] !== inputArray[k - 0x1] && inputArray[i - 0x1] !== inputArray[k - 0x1]) {
                sum = sum + 0x1;
            }
        }
    }
    console[_0x43c6e2(0x7f)](rArray[_0x43c6e2(0x91)] * gArray[_0x43c6e2(0x91)] * bArray[_0x43c6e2(0x91)] - sum);
});