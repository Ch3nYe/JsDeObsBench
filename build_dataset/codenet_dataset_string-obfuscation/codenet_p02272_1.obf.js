const a0_0x362a83 = a0_0x386b;
(function (stringArrayFunction, comparisonValue) {
    const _0x292369 = a0_0x386b;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x292369(0x10d)) / 0x1 * (-parseInt(_0x292369(0x109)) / 0x2) + -parseInt(_0x292369(0x112)) / 0x3 + parseInt(_0x292369(0x104)) / 0x4 + parseInt(_0x292369(0x10a)) / 0x5 * (-parseInt(_0x292369(0x10e)) / 0x6) + -parseInt(_0x292369(0x108)) / 0x7 * (-parseInt(_0x292369(0x107)) / 0x8) + parseInt(_0x292369(0x102)) / 0x9 + parseInt(_0x292369(0x10b)) / 0xa * (-parseInt(_0x292369(0x100)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3988, 0x5f64c));
process[a0_0x362a83(0x10f)][a0_0x362a83(0x110)]();
process[a0_0x362a83(0x10f)]['setEncoding'](a0_0x362a83(0x105));
let input = '';
process['stdin']['on']('data', function (chunk) {
    input += chunk;
});
process['stdin']['on'](a0_0x362a83(0x10c), function () {
    const _0x43a513 = a0_0x362a83;
    main(input[_0x43a513(0x111)]('\x0a'));
});
function a0_0x3988() {
    const _0x25c7ba = [
        '2764647BQcHke',
        'log',
        '2901904jAnRhG',
        'utf8',
        'MAX_SAFE_INTEGER',
        '292088ikDHle',
        '28LSDxzX',
        '981870PqIQfz',
        '33720egEfrt',
        '20bbsMjd',
        'end',
        '1YGvJKI',
        '624TrwziF',
        'stdin',
        'resume',
        'split',
        '1624134iSjrKI',
        '198836EgumES',
        'push'
    ];
    a0_0x3988 = function () {
        return _0x25c7ba;
    };
    return a0_0x3988();
}
let count = 0x0;
function merge(A, left, mid, right) {
    const _0x1cffba = a0_0x362a83;
    let n1 = mid - left;
    let n2 = right - mid;
    let L = [];
    let R = [];
    for (let i = 0x0; i < n1; i++)
        L[_0x1cffba(0x101)](A[left + i]);
    for (let i = 0x0; i < n2; i++)
        R[_0x1cffba(0x101)](A[mid + i]);
    L[_0x1cffba(0x101)](Number[_0x1cffba(0x106)]);
    R[_0x1cffba(0x101)](Number[_0x1cffba(0x106)]);
    let i = 0x0, j = 0x0;
    for (let k = left; k < right; k++) {
        if (L[i] < R[j])
            A[k] = L[i++];
        else
            A[k] = R[j++];
        count++;
    }
}
function mergeSort(A, left, right, count) {
    if (left + 0x1 >= right)
        return;
    let mid = Math['floor']((left + right) / 0x2);
    mergeSort(A, left, mid);
    mergeSort(A, mid, right);
    merge(A, left, mid, right);
}
function a0_0x386b(QwYZEU, key) {
    const stringArray = a0_0x3988();
    a0_0x386b = function (index, key) {
        index = index - 0x100;
        let value = stringArray[index];
        return value;
    };
    return a0_0x386b(QwYZEU, key);
}
function main(lines) {
    const _0x2ac56e = a0_0x362a83;
    let n = Number(lines[0x0]);
    let A = lines[0x1][_0x2ac56e(0x111)]('\x20')['map'](Number);
    mergeSort(A, 0x0, n);
    console[_0x2ac56e(0x103)](A['join']('\x20'));
    console[_0x2ac56e(0x103)](count);
}