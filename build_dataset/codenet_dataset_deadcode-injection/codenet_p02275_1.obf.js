function a0_0x385e() {
    const _0x4c6c57 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'shift',
        'map',
        'log'
    ];
    a0_0x385e = function () {
        return _0x4c6c57;
    };
    return a0_0x385e();
}
function a0_0x4e7d(jJrONh, key) {
    const stringArray = a0_0x385e();
    a0_0x4e7d = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x4e7d(jJrONh, key);
}
(function main() {
    const _0x4d9335 = a0_0x4e7d;
    const lines = require('fs')[_0x4d9335(0x0)](_0x4d9335(0x1), _0x4d9335(0x2))[_0x4d9335(0x3)]()[_0x4d9335(0x4)]('\x0a');
    const n = Number(lines['shift']());
    const arr = lines[_0x4d9335(0x5)]()[_0x4d9335(0x4)]('\x20')[_0x4d9335(0x6)](Number);
    const k = 0x2710;
    let cnt_arr = [];
    for (let i = 0x0; i <= k; i++)
        cnt_arr[i] = 0x0;
    for (let i = 0x0; i < n; i++)
        cnt_arr[arr[i]]++;
    for (let i = 0x1; i <= k; i++)
        cnt_arr[i] += cnt_arr[i - 0x1];
    let out_arr = [];
    for (let i = n - 0x1; i >= 0x0; i--)
        out_arr[--cnt_arr[arr[i]]] = arr[i];
    console[_0x4d9335(0x7)](out_arr['join']('\x20'));
}());