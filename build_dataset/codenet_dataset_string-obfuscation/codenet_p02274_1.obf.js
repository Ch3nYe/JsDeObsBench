function a0_0x253a(rAXcjP, key) {
    const stringArray = a0_0x2175();
    a0_0x253a = function (index, key) {
        index = index - 0xce;
        let value = stringArray[index];
        return value;
    };
    return a0_0x253a(rAXcjP, key);
}
(function (stringArrayFunction, comparisonValue) {
    const _0x59f980 = a0_0x253a;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x59f980(0xd5)) / 0x1 + parseInt(_0x59f980(0xd8)) / 0x2 * (parseInt(_0x59f980(0xd0)) / 0x3) + parseInt(_0x59f980(0xd7)) / 0x4 + -parseInt(_0x59f980(0xdb)) / 0x5 + -parseInt(_0x59f980(0xcf)) / 0x6 + -parseInt(_0x59f980(0xe0)) / 0x7 * (parseInt(_0x59f980(0xde)) / 0x8) + parseInt(_0x59f980(0xd3)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2175, 0x7c723));
var cnt = 0x0;
(function main() {
    const _0x1bfc25 = a0_0x253a;
    const lines = require('fs')[_0x1bfc25(0xd1)](_0x1bfc25(0xce), 'utf8')[_0x1bfc25(0xda)]()[_0x1bfc25(0xdd)]('\x0a');
    const n = Number(lines[_0x1bfc25(0xd2)]());
    let arr = lines[_0x1bfc25(0xd2)]()[_0x1bfc25(0xdd)]('\x20')[_0x1bfc25(0xd9)](Number);
    mergeSort(arr, 0x0, n);
    console[_0x1bfc25(0xd4)](cnt);
}());
function merge(arr, left, mid, right) {
    const _0x3f4f47 = a0_0x253a;
    let L = arr[_0x3f4f47(0xd6)](left, mid);
    let R = arr[_0x3f4f47(0xd6)](mid, right);
    L[_0x3f4f47(0xdf)](Infinity);
    R['push'](Infinity);
    let i = 0x0;
    let j = 0x0;
    let t = 0x0;
    for (let k = left; k < right; k++) {
        if (L[i] < R[j]) {
            arr[k] = L[i++];
            cnt += t;
        } else {
            arr[k] = R[j++];
            t += 0x1;
        }
    }
}
function a0_0x2175() {
    const _0xc66264 = [
        '144dUCEvD',
        'push',
        '224602VbSkKf',
        '/dev/stdin',
        '2233440sNFLxQ',
        '75ZkktzR',
        'readFileSync',
        'shift',
        '4226679UqlHRU',
        'log',
        '366240fUmZhJ',
        'slice',
        '1769940xKmvkV',
        '49690CZtIHD',
        'map',
        'trim',
        '2199810rMYvks',
        'floor',
        'split'
    ];
    a0_0x2175 = function () {
        return _0xc66264;
    };
    return a0_0x2175();
}
function mergeSort(arr, left, right) {
    const _0x14b5e3 = a0_0x253a;
    if (left + 0x1 < right) {
        let mid = Math[_0x14b5e3(0xdc)]((left + right) / 0x2);
        mergeSort(arr, left, mid);
        mergeSort(arr, mid, right);
        merge(arr, left, mid, right);
    }
}