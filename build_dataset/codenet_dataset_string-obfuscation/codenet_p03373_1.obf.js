'use strict';
const a0_0x57c309 = a0_0x14bd;
(function (stringArrayFunction, comparisonValue) {
    const _0x2afd0e = a0_0x14bd;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x2afd0e(0x1f1)) / 0x1 * (-parseInt(_0x2afd0e(0x1e8)) / 0x2) + parseInt(_0x2afd0e(0x1e5)) / 0x3 + parseInt(_0x2afd0e(0x1e2)) / 0x4 + -parseInt(_0x2afd0e(0x1e3)) / 0x5 * (parseInt(_0x2afd0e(0x1f2)) / 0x6) + -parseInt(_0x2afd0e(0x1e9)) / 0x7 * (-parseInt(_0x2afd0e(0x1eb)) / 0x8) + parseInt(_0x2afd0e(0x1ed)) / 0x9 * (parseInt(_0x2afd0e(0x1ef)) / 0xa) + -parseInt(_0x2afd0e(0x1e4)) / 0xb * (parseInt(_0x2afd0e(0x1ee)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1e6a, 0x95e93));
function a0_0x1e6a() {
    const _0x6a4112 = [
        'log',
        'readFileSync',
        '4665852HgdbaL',
        '1665iDbUeo',
        '11972125jTjXxh',
        '2997135GBhBjS',
        'min',
        'map',
        '1140814ZjKPjw',
        '212079oSezzi',
        'max',
        '272WvGYMq',
        'utf8',
        '162522AZePul',
        '36fDtgLw',
        '560vygFrB',
        'split',
        '1flexEx',
        '16182clZxRa'
    ];
    a0_0x1e6a = function () {
        return _0x6a4112;
    };
    return a0_0x1e6a();
}
function a0_0x14bd(SyrpPn, key) {
    const stringArray = a0_0x1e6a();
    a0_0x14bd = function (index, key) {
        index = index - 0x1e0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x14bd(SyrpPn, key);
}
function main(s) {
    const _0x58b2c3 = a0_0x14bd;
    s = s[_0x58b2c3(0x1f0)]('\x0a')[0x0][_0x58b2c3(0x1f0)]('\x20')[_0x58b2c3(0x1e7)](n => Number(n));
    const A = s[0x0];
    const B = s[0x1];
    const C = s[0x2];
    const X = s[0x3];
    const Y = s[0x4];
    const min = Math[_0x58b2c3(0x1e6)](X, Y);
    const case1 = A * X + B * Y;
    const case2 = 0x2 * C * min + (X - min) * A + (Y - min) * B;
    const case3 = 0x2 * C * Math[_0x58b2c3(0x1ea)](X, Y);
    const answer = Math[_0x58b2c3(0x1e6)](...[
        case1,
        case2,
        case3
    ]);
    console[_0x58b2c3(0x1e0)](answer);
}
main(require('fs')[a0_0x57c309(0x1e1)]('/dev/stdin', a0_0x57c309(0x1ec)));