const a0_0x112dac = a0_0x2b98;
process[a0_0x112dac(0x0)][a0_0x112dac(0x1)]();
function a0_0x2b98(lLbGzf, key) {
    const stringArray = a0_0x150f();
    a0_0x2b98 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x2b98(lLbGzf, key);
}
process[a0_0x112dac(0x0)][a0_0x112dac(0x2)]('utf8');
function a0_0x150f() {
    const _0x2d24f4 = [
        'stdin',
        'resume',
        'setEncoding',
        'split',
        'push',
        'MAX_SAFE_INTEGER',
        'uIYIn',
        'floor',
        'log',
        'join'
    ];
    a0_0x150f = function () {
        return _0x2d24f4;
    };
    return a0_0x150f();
}
let input = '';
process[a0_0x112dac(0x0)]['on']('data', function (chunk) {
    input += chunk;
});
process[a0_0x112dac(0x0)]['on']('end', function () {
    const _0x799ee = a0_0x2b98;
    main(input[_0x799ee(0x3)]('\x0a'));
});
let count = 0x0;
function merge(A, left, mid, right) {
    const _0x57e3cb = a0_0x2b98;
    let n1 = mid - left;
    let n2 = right - mid;
    let L = [];
    let R = [];
    for (let i = 0x0; i < n1; i++)
        L['push'](A[left + i]);
    for (let i = 0x0; i < n2; i++)
        R[_0x57e3cb(0x4)](A[mid + i]);
    L[_0x57e3cb(0x4)](Number[_0x57e3cb(0x5)]);
    R[_0x57e3cb(0x4)](Number[_0x57e3cb(0x5)]);
    let i = 0x0, j = 0x0;
    for (let k = left; k < right; k++) {
        if (_0x57e3cb(0x6) === _0x57e3cb(0x6)) {
            if (L[i] < R[j])
                A[k] = L[i++];
            else
                A[k] = R[j++];
            count++;
        } else {
            if (left + 0x1 >= right)
                return;
            let mid = Math['floor']((left + right) / 0x2);
            mergeSort(A, left, mid);
            mergeSort(A, mid, right);
            merge(A, left, mid, right);
        }
    }
}
function mergeSort(A, left, right, count) {
    const _0x2925c3 = a0_0x2b98;
    if (left + 0x1 >= right)
        return;
    let mid = Math[_0x2925c3(0x7)]((left + right) / 0x2);
    mergeSort(A, left, mid);
    mergeSort(A, mid, right);
    merge(A, left, mid, right);
}
function main(lines) {
    const _0x4f4cfe = a0_0x2b98;
    let n = Number(lines[0x0]);
    let A = lines[0x1]['split']('\x20')['map'](Number);
    mergeSort(A, 0x0, n);
    console[_0x4f4cfe(0x8)](A[_0x4f4cfe(0x9)]('\x20'));
    console[_0x4f4cfe(0x8)](count);
}