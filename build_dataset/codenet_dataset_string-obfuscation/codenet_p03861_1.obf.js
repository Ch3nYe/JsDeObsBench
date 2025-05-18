const a0_0x35fae4 = a0_0x510a;
(function (stringArrayFunction, comparisonValue) {
    const _0xf4099c = a0_0x510a;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0xf4099c(0x1a9)) / 0x1 * (parseInt(_0xf4099c(0x1a1)) / 0x2) + parseInt(_0xf4099c(0x1a6)) / 0x3 + parseInt(_0xf4099c(0x19e)) / 0x4 + -parseInt(_0xf4099c(0x199)) / 0x5 * (parseInt(_0xf4099c(0x1a3)) / 0x6) + -parseInt(_0xf4099c(0x19c)) / 0x7 * (-parseInt(_0xf4099c(0x1a0)) / 0x8) + parseInt(_0xf4099c(0x1a4)) / 0x9 + parseInt(_0xf4099c(0x19a)) / 0xa * (-parseInt(_0xf4099c(0x1a5)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5e84, 0x87e2e));
const padLeft = (w, l, c) => ([...Array(l)][a0_0x35fae4(0x19f)](_ => c)[a0_0x35fae4(0x19d)]('') + w)[a0_0x35fae4(0x1ab)](l * -0x1);
const split = (w, n) => (ws => ws[a0_0x35fae4(0x1aa)]((acc, _, i) => i % n ? acc : [
    ...acc,
    ws['slice'](i, i + n)['join']('')
], []))([...w]);
const arrange = n => (x => x[0x0] ? [
    x[0x0] - 0x1,
    x[0x1] + 0x2540be400
] : x)(split(padLeft(n, 0x14, '0'), 0xa)[a0_0x35fae4(0x19f)](x => +x));
const solve0 = (a, b, x) => Math[a0_0x35fae4(0x1a8)](b / x) - Math[a0_0x35fae4(0x1a8)](a / x);
const solve1 = (a, b, x) => Math[a0_0x35fae4(0x1a8)](b / x) - (a == 0x0 ? -0x1 : Math[a0_0x35fae4(0x1a8)]((a - 0x1) / x));
const nullOrStr = n => n ? String(n) : '';
const fn2 = (a2, b2, x) => '' + nullOrStr(solve0(+a2[0x0], b2[0x0], x)) + solve1(a2[0x1], b2[0x1], x);
const fn1 = (a, b, x) => fn2(arrange(a), arrange(b), x);
function a0_0x510a(ddfbSP, key) {
    const stringArray = a0_0x5e84();
    a0_0x510a = function (index, key) {
        index = index - 0x199;
        let value = stringArray[index];
        return value;
    };
    return a0_0x510a(ddfbSP, key);
}
const main = input => fn1(...input['split']('\x20'));
console[a0_0x35fae4(0x1a2)](main(require('fs')[a0_0x35fae4(0x19b)](a0_0x35fae4(0x1a7), 'utf8')));
function a0_0x5e84() {
    const _0x35d206 = [
        'readFileSync',
        '3997cfAZHa',
        'join',
        '784928ErLcNQ',
        'map',
        '4024DlDRPQ',
        '6IiWDmB',
        'log',
        '66TOzrJi',
        '3848517KHAMMs',
        '22VUJsUC',
        '208224TJSUYV',
        '/dev/stdin',
        'floor',
        '127421tGjdlD',
        'reduce',
        'slice',
        '288875arlxIa',
        '853070mAmITO'
    ];
    a0_0x5e84 = function () {
        return _0x35d206;
    };
    return a0_0x5e84();
}