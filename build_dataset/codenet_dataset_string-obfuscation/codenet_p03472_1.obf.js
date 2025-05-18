'use strict';
const a0_0x16964e = a0_0x4c0f;
(function (stringArrayFunction, comparisonValue) {
    const _0x4ec56d = a0_0x4c0f;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x4ec56d(0x1d0)) / 0x1 + parseInt(_0x4ec56d(0x1dc)) / 0x2 * (parseInt(_0x4ec56d(0x1d9)) / 0x3) + -parseInt(_0x4ec56d(0x1ce)) / 0x4 * (-parseInt(_0x4ec56d(0x1d2)) / 0x5) + -parseInt(_0x4ec56d(0x1d1)) / 0x6 * (parseInt(_0x4ec56d(0x1d7)) / 0x7) + parseInt(_0x4ec56d(0x1cb)) / 0x8 * (-parseInt(_0x4ec56d(0x1cd)) / 0x9) + -parseInt(_0x4ec56d(0x1da)) / 0xa + parseInt(_0x4ec56d(0x1d6)) / 0xb * (parseInt(_0x4ec56d(0x1c8)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3189, 0x4b2d4));
function a0_0x4c0f(TtBBmq, key) {
    const stringArray = a0_0x3189();
    a0_0x4c0f = function (index, key) {
        index = index - 0x1c8;
        let value = stringArray[index];
        return value;
    };
    return a0_0x4c0f(TtBBmq, key);
}
const main = arg => {
    const _0x91bbfa = a0_0x4c0f;
    arg = arg['trim']()[_0x91bbfa(0x1cc)]('\x0a');
    const N = parseInt(arg[0x0][_0x91bbfa(0x1cc)]('\x20')[0x0]);
    let H = parseInt(arg[0x0][_0x91bbfa(0x1cc)]('\x20')[0x1]);
    let ab = arg[_0x91bbfa(0x1cf)](0x1, N + 0x1)[_0x91bbfa(0x1d5)](n => n[_0x91bbfa(0x1cc)]('\x20')[_0x91bbfa(0x1d5)](l => parseInt(l)));
    ab[_0x91bbfa(0x1d3)]((a, b) => b[0x0] - a[0x0]);
    const aMax = ab[0x0][0x0];
    ab = ab['sort']((a, b) => b[0x1] - a[0x1])[_0x91bbfa(0x1d8)](n => n[0x1] > aMax);
    let damage = 0x0;
    let throwAttack = 0x0;
    for (let i in ab) {
        H -= ab[i][0x1];
        throwAttack++;
        if (H <= 0x0) {
            console[_0x91bbfa(0x1ca)](throwAttack);
            return;
        }
    }
    const directAttack = Math[_0x91bbfa(0x1c9)](H / aMax);
    console[_0x91bbfa(0x1ca)](throwAttack + directAttack);
};
function a0_0x3189() {
    const _0x19071e = [
        'map',
        '8441279HPorFL',
        '359009rdsuNp',
        'filter',
        '1414533ldRqwI',
        '4021980VwKeSF',
        'readFileSync',
        '2agDxAi',
        '12CyNHpv',
        'ceil',
        'log',
        '384bwhwEP',
        'split',
        '115371HtLaLa',
        '8ZavojO',
        'slice',
        '205416YNtzxM',
        '36fwvqwL',
        '1499180xkLjrK',
        'sort',
        '/dev/stdin'
    ];
    a0_0x3189 = function () {
        return _0x19071e;
    };
    return a0_0x3189();
}
main(require('fs')[a0_0x16964e(0x1db)](a0_0x16964e(0x1d4), 'utf8'));