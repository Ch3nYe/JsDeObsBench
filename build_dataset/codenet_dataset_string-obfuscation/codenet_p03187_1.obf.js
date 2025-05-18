function a0_0x12d4(OnVRtv, key) {
    const stringArray = a0_0x4ca6();
    a0_0x12d4 = function (index, key) {
        index = index - 0xa9;
        let value = stringArray[index];
        return value;
    };
    return a0_0x12d4(OnVRtv, key);
}
function a0_0x4ca6() {
    const _0x371e47 = [
        '6NuHNsU',
        '12010784OVhZBB',
        '3303sCfxBU',
        '4512361JBhfXE',
        '27597573hxRPLH',
        'log',
        'push',
        'apply',
        'utf8',
        'max',
        'concat',
        '1854560tiduSo',
        '/dev/stdin',
        'split',
        'filter',
        'slice',
        '1908PnzRZA',
        'map',
        'shift',
        '32060RwaVdC',
        'length',
        '2118492ZWlSLA'
    ];
    a0_0x4ca6 = function () {
        return _0x371e47;
    };
    return a0_0x4ca6();
}
const a0_0x359f4f = a0_0x12d4;
(function (stringArrayFunction, comparisonValue) {
    const _0x14d156 = a0_0x12d4;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x14d156(0xac)) / 0x1 + -parseInt(_0x14d156(0xae)) / 0x2 + -parseInt(_0x14d156(0xb1)) / 0x3 * (parseInt(_0x14d156(0xa9)) / 0x4) + parseInt(_0x14d156(0xba)) / 0x5 * (parseInt(_0x14d156(0xaf)) / 0x6) + parseInt(_0x14d156(0xb2)) / 0x7 + -parseInt(_0x14d156(0xb0)) / 0x8 + parseInt(_0x14d156(0xb3)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4ca6, 0xeb605));
function main(input) {
    'use strict';
    const _0x183194 = a0_0x12d4;
    const lines = input[_0x183194(0xbc)]('\x0a');
    const firstLine = lines[0x0]['split']('\x20')['map'](value => +value);
    const L = firstLine[0x0];
    const N = firstLine[0x1];
    let xn = lines[_0x183194(0xbe)](0x1)[_0x183194(0xbd)](value => value)[_0x183194(0xaa)](value => +value);
    let costs = [];
    const search = (x, xn, sum) => {
        const _0xdbe670 = _0x183194;
        if (xn[_0xdbe670(0xad)] === 0x0) {
            costs[_0xdbe670(0xb5)](sum);
            return;
        }
        const leftDistance = xn[0x0] >= x ? xn[0x0] - x : L - x + xn[0x0];
        const rightDistance = xn[xn[_0xdbe670(0xad)] - 0x1] <= x ? x - xn[xn[_0xdbe670(0xad)] - 0x1] : x + (L - xn[xn[_0xdbe670(0xad)] - 0x1]);
        const left = xn[_0xdbe670(0xb9)]();
        const leftX = left[_0xdbe670(0xab)]();
        const right = xn['concat']();
        const rightX = right['pop']();
        search(leftX, left, sum + leftDistance);
        search(rightX, right, sum + rightDistance);
    };
    search(0x0, xn, 0x0);
    console[_0x183194(0xb4)](Math[_0x183194(0xb8)][_0x183194(0xb6)](null, costs));
}
main(require('fs')['readFileSync'](a0_0x359f4f(0xbb), a0_0x359f4f(0xb7)));