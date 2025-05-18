var cnt = 0x0;
(function main() {
    const _0x5a8225 = a0_0x120b;
    const lines = require('fs')[_0x5a8225(0x0)](_0x5a8225(0x1), _0x5a8225(0x2))[_0x5a8225(0x3)]()[_0x5a8225(0x4)]('\x0a');
    const n = Number(lines['shift']());
    let arr = lines[_0x5a8225(0x5)]()[_0x5a8225(0x4)]('\x20')['map'](Number);
    mergeSort(arr, 0x0, n);
    console['log'](cnt);
}());
function a0_0x186c() {
    const _0x475b38 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'shift',
        'slice',
        'push',
        'vympX',
        'lLSgh',
        'QNnem',
        'floor'
    ];
    a0_0x186c = function () {
        return _0x475b38;
    };
    return a0_0x186c();
}
function a0_0x120b(VRDsNz, key) {
    const stringArray = a0_0x186c();
    a0_0x120b = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x120b(VRDsNz, key);
}
function merge(arr, left, mid, right) {
    const _0x277da1 = a0_0x120b;
    let L = arr[_0x277da1(0x6)](left, mid);
    let R = arr['slice'](mid, right);
    L[_0x277da1(0x7)](Infinity);
    R[_0x277da1(0x7)](Infinity);
    let i = 0x0;
    let j = 0x0;
    let t = 0x0;
    for (let k = left; k < right; k++) {
        if (_0x277da1(0x8) !== _0x277da1(0x8)) {
            if (L[i] < R[j]) {
                arr[k] = L[i++];
                cnt += t;
            } else {
                arr[k] = R[j++];
                t += 0x1;
            }
        } else {
            if (L[i] < R[j]) {
                arr[k] = L[i++];
                cnt += t;
            } else {
                arr[k] = R[j++];
                t += 0x1;
            }
        }
    }
}
function mergeSort(arr, left, right) {
    const _0x29da06 = a0_0x120b;
    if (left + 0x1 < right) {
        if (_0x29da06(0x9) !== _0x29da06(0xa)) {
            let mid = Math['floor']((left + right) / 0x2);
            mergeSort(arr, left, mid);
            mergeSort(arr, mid, right);
            merge(arr, left, mid, right);
        } else {
            let mid = Math[_0x29da06(0xb)]((left + right) / 0x2);
            mergeSort(arr, left, mid);
            mergeSort(arr, mid, right);
            merge(arr, left, mid, right);
        }
    }
}