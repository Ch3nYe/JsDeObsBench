(function main() {
    const rPJfWF = {
        'YhtWX': '/dev/stdin',
        'jPMFe': 'utf8',
        'yNhTO': function (callee, param1) {
            return callee(param1);
        },
        'LLcji': function (x, y) {
            return x <= y;
        },
        'iCXne': function (x, y) {
            return x < y;
        },
        'aPQXU': function (x, y) {
            return x <= y;
        },
        'TtbPZ': function (x, y) {
            return x - y;
        },
        'LiSbE': function (x, y) {
            return x - y;
        },
        'oJPlK': function (x, y) {
            return x >= y;
        }
    };
    const lines = require('fs')['readFileSync'](rPJfWF['YhtWX'], rPJfWF['jPMFe'])['trim']()['split']('\x0a');
    const n = rPJfWF['yNhTO'](Number, lines['shift']());
    const arr = lines['shift']()['split']('\x20')['map'](Number);
    const k = 0x2710;
    let cnt_arr = [];
    for (let i = 0x0; rPJfWF['LLcji'](i, k); i++)
        cnt_arr[i] = 0x0;
    for (let i = 0x0; rPJfWF['iCXne'](i, n); i++)
        cnt_arr[arr[i]]++;
    for (let i = 0x1; rPJfWF['aPQXU'](i, k); i++)
        cnt_arr[i] += cnt_arr[rPJfWF['TtbPZ'](i, 0x1)];
    let out_arr = [];
    for (let i = rPJfWF['LiSbE'](n, 0x1); rPJfWF['oJPlK'](i, 0x0); i--)
        out_arr[--cnt_arr[arr[i]]] = arr[i];
    console['log'](out_arr['join']('\x20'));
}());