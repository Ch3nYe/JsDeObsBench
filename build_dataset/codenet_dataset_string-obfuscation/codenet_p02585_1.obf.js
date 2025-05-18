const a0_0x594368 = a0_0x1c33;
function a0_0x1c33(muQMHz, key) {
    const stringArray = a0_0x28a6();
    a0_0x1c33 = function (index, key) {
        index = index - 0xde;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1c33(muQMHz, key);
}
(function (stringArrayFunction, comparisonValue) {
    const _0x1b086c = a0_0x1c33;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x1b086c(0xeb)) / 0x1 * (parseInt(_0x1b086c(0xe9)) / 0x2) + -parseInt(_0x1b086c(0xf0)) / 0x3 + parseInt(_0x1b086c(0xe4)) / 0x4 + parseInt(_0x1b086c(0xe6)) / 0x5 * (parseInt(_0x1b086c(0xe3)) / 0x6) + -parseInt(_0x1b086c(0xe8)) / 0x7 + parseInt(_0x1b086c(0xde)) / 0x8 + -parseInt(_0x1b086c(0xe2)) / 0x9 * (parseInt(_0x1b086c(0xf1)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x28a6, 0xbebf4));
const main = input => {
    const _0x250d8b = a0_0x1c33;
    input = input[_0x250d8b(0xed)]()[_0x250d8b(0xec)]('\x0a');
    const [n, k] = input[0x0]['split']('\x20')[_0x250d8b(0xea)](Number);
    const directions = input[0x1][_0x250d8b(0xec)]('\x20')[_0x250d8b(0xea)](v => Number(v) - 0x1);
    const scoreList = input[0x2][_0x250d8b(0xec)]('\x20')['map'](Number);
    const ans = [new Array(n)[_0x250d8b(0xe0)](0x0)];
    for (let i = 0x0; i < k; i++)
        ans[_0x250d8b(0xe1)]([]);
    for (let i = 0x0; i < k; i++) {
        for (let x = 0x0; x < n; x++) {
            const score = ans[i][x];
            ans[i + 0x1][directions[x]] = score + scoreList[directions[x]];
        }
    }
    let max = -Infinity;
    for (let i = 0x1; i < ans['length']; i++)
        max = Math[_0x250d8b(0xdf)](max, Math[_0x250d8b(0xdf)](...ans[i]));
    return console[_0x250d8b(0xe7)](max);
};
process['env'][a0_0x594368(0xef)] ? test() : main(require('fs')['readFileSync'](a0_0x594368(0xe5), a0_0x594368(0xee)));
function a0_0x28a6() {
    const _0x2822ab = [
        '5330312tNUpss',
        '/dev/stdin',
        '405bgnEQE',
        'log',
        '4745174YZJkKQ',
        '94538GepQem',
        'map',
        '26WzwMuj',
        'split',
        'trim',
        'utf8',
        'MYTEST',
        '1129164ENujWv',
        '160NOztmg',
        '221480MOFOaF',
        'max',
        'fill',
        'push',
        '427275KFWpex',
        '438HnVGGD'
    ];
    a0_0x28a6 = function () {
        return _0x2822ab;
    };
    return a0_0x28a6();
}