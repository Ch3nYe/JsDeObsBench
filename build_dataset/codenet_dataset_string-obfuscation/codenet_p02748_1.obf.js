'use strict';
const a0_0x5a280f = a0_0x5b3a;
function a0_0x5b3a(ADvfxa, key) {
    const stringArray = a0_0xcefc();
    a0_0x5b3a = function (index, key) {
        index = index - 0x153;
        let value = stringArray[index];
        return value;
    };
    return a0_0x5b3a(ADvfxa, key);
}
(function (stringArrayFunction, comparisonValue) {
    const _0x1ce1ef = a0_0x5b3a;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x1ce1ef(0x161)) / 0x1 + -parseInt(_0x1ce1ef(0x15f)) / 0x2 + parseInt(_0x1ce1ef(0x155)) / 0x3 + -parseInt(_0x1ce1ef(0x160)) / 0x4 * (parseInt(_0x1ce1ef(0x157)) / 0x5) + parseInt(_0x1ce1ef(0x159)) / 0x6 + -parseInt(_0x1ce1ef(0x15a)) / 0x7 + parseInt(_0x1ce1ef(0x15b)) / 0x8;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0xcefc, 0xadf47));
const main = arg => {
    const _0x2e139e = a0_0x5b3a;
    arg = arg[_0x2e139e(0x158)]()[_0x2e139e(0x154)]('\x0a');
    const A = parseInt(arg[0x0][_0x2e139e(0x154)]('\x20')[0x0]);
    const B = parseInt(arg[0x0][_0x2e139e(0x154)]('\x20')[0x0]);
    const M = parseInt(arg[0x0][_0x2e139e(0x154)]('\x20')[0x0]);
    const freezer = arg[0x1]['split']('\x20')[_0x2e139e(0x15c)](n => parseInt(n));
    const renzi = arg[0x2][_0x2e139e(0x154)]('\x20')['map'](n => parseInt(n));
    const xyc = arg[_0x2e139e(0x153)](0x3, M + 0x4);
    const minFreeze = Math[_0x2e139e(0x156)](...freezer);
    const minRenzi = Math[_0x2e139e(0x156)](...renzi);
    let temp = minFreeze + minRenzi;
    for (let i in xyc) {
        let x = parseInt(xyc[i][_0x2e139e(0x154)]('\x20')[0x0]);
        let y = parseInt(xyc[i][_0x2e139e(0x154)]('\x20')[0x1]);
        let c = parseInt(xyc[i][_0x2e139e(0x154)]('\x20')[0x2]);
        let cost = freezer[x - 0x1] + renzi[y - 0x1] - c;
        if (cost <= temp) {
            temp = cost;
        }
    }
    console[_0x2e139e(0x15d)](temp);
};
main(require('fs')['readFileSync'](a0_0x5a280f(0x15e), 'utf8'));
function a0_0xcefc() {
    const _0x10578a = [
        'log',
        '/dev/stdin',
        '2261618NZxzqM',
        '12akIzgr',
        '449452qyEkHr',
        'slice',
        'split',
        '1849050VGvONP',
        'min',
        '1629445VsQHrw',
        'trim',
        '1329024UeBtuW',
        '2330244UOsvRM',
        '14932648MtLzVo',
        'map'
    ];
    a0_0xcefc = function () {
        return _0x10578a;
    };
    return a0_0xcefc();
}