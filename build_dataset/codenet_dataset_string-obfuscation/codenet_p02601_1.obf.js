'use strict';
(function (stringArrayFunction, comparisonValue) {
    const _0x5ef8b3 = a0_0x596e;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x5ef8b3(0x11f)) / 0x1 * (parseInt(_0x5ef8b3(0x128)) / 0x2) + -parseInt(_0x5ef8b3(0x125)) / 0x3 * (parseInt(_0x5ef8b3(0x120)) / 0x4) + parseInt(_0x5ef8b3(0x121)) / 0x5 + -parseInt(_0x5ef8b3(0x11e)) / 0x6 + -parseInt(_0x5ef8b3(0x123)) / 0x7 * (parseInt(_0x5ef8b3(0x127)) / 0x8) + -parseInt(_0x5ef8b3(0x12d)) / 0x9 * (-parseInt(_0x5ef8b3(0x122)) / 0xa) + parseInt(_0x5ef8b3(0x12a)) / 0xb * (parseInt(_0x5ef8b3(0x12c)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x53a0, 0x3672f));
function main(input) {
    const _0x382671 = a0_0x596e;
    input = input[_0x382671(0x124)]()[_0x382671(0x126)]('\x0a');
    const line_one = input[0x0][_0x382671(0x126)]('\x20');
    const K = parseInt(input[0x1]);
    let line_one_arr = [];
    for (let i in line_one) {
        line_one_arr[_0x382671(0x129)](parseInt(line_one[i]));
    }
    for (let i = 0x0; i < K; i++) {
        if (line_one_arr[0x0] >= line_one_arr[0x1]) {
            line_one_arr[0x1] = line_one_arr[0x1] * 0x2;
            continue;
        }
        if (line_one_arr[0x1] >= line_one_arr[0x2]) {
            line_one_arr[0x2] = line_one_arr[0x2] * 0x2;
        }
    }
    if (line_one_arr[0x0] < line_one_arr[0x1] && line_one_arr[0x1] < line_one_arr[0x2]) {
        console[_0x382671(0x12b)]('Yes');
    } else {
        console[_0x382671(0x12b)]('No');
    }
}
function a0_0x596e(azpSZr, key) {
    const stringArray = a0_0x53a0();
    a0_0x596e = function (index, key) {
        index = index - 0x11e;
        let value = stringArray[index];
        return value;
    };
    return a0_0x596e(azpSZr, key);
}
function numberSort(array) {
    array['sort'](f);
    return array;
}
var f = function (a, b) {
    return a - b;
};
function a0_0x53a0() {
    const _0x59741d = [
        '56Gvszwv',
        '16TiBZmz',
        'push',
        '759UhAkQL',
        'log',
        '2472VgtZny',
        '9RKgjNN',
        '1476264HAHzlo',
        '37441tkVvkw',
        '4KBXOvd',
        '1906045gRzFmz',
        '1899610XfcTAT',
        '320642XECWQd',
        'trim',
        '285609ZFzRjd',
        'split'
    ];
    a0_0x53a0 = function () {
        return _0x59741d;
    };
    return a0_0x53a0();
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf-8'));