'use strict';
const a0_0xe3fb83 = a0_0x14df;
(function (stringArrayFunction, comparisonValue) {
    const _0xfc1a70 = a0_0x14df;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0xfc1a70(0x1a1)) / 0x1 + -parseInt(_0xfc1a70(0x1a3)) / 0x2 + parseInt(_0xfc1a70(0x1a7)) / 0x3 + -parseInt(_0xfc1a70(0x1a6)) / 0x4 * (-parseInt(_0xfc1a70(0x19e)) / 0x5) + -parseInt(_0xfc1a70(0x1a0)) / 0x6 + parseInt(_0xfc1a70(0x1a2)) / 0x7 * (-parseInt(_0xfc1a70(0x1a4)) / 0x8) + parseInt(_0xfc1a70(0x19d)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4d31, 0x936c7));
function a0_0x4d31() {
    const _0x32030c = [
        'log',
        '431132oJwBGg',
        '3407601oGvSmf',
        'split',
        'utf-8',
        '10048833LXIcEv',
        '15IygPeC',
        'sort',
        '6523404vxsikd',
        '358781XzaSlS',
        '4949WXNiyW',
        '1802530QzHRFV',
        '3872oyJHBj'
    ];
    a0_0x4d31 = function () {
        return _0x32030c;
    };
    return a0_0x4d31();
}
function a0_0x14df(FPqIQV, key) {
    const stringArray = a0_0x4d31();
    a0_0x14df = function (index, key) {
        index = index - 0x19d;
        let value = stringArray[index];
        return value;
    };
    return a0_0x14df(FPqIQV, key);
}
function main(input) {
    const _0x213f69 = a0_0x14df;
    input = input['trim']()['split']('\x0a');
    const N = Number(input[0x0]);
    const line2_arr = input[0x1][_0x213f69(0x1a8)]('\x20');
    let ans = 0x0;
    for (let i = 0x0; i < N; i++) {
        if (Number(line2_arr[i]) == 0x0)
            continue;
        for (let j = i + 0x1; j < N; j++) {
            ans = ans + Number(line2_arr[i]) * Number(line2_arr[j]);
        }
    }
    console[_0x213f69(0x1a5)](ans % 0x3b9aca07);
}
function numberSort(array) {
    const _0x337402 = a0_0x14df;
    array[_0x337402(0x19f)](f);
    return array;
}
var f = function (a, b) {
    return a - b;
};
main(require('fs')['readFileSync']('/dev/stdin', a0_0xe3fb83(0x1a9)));