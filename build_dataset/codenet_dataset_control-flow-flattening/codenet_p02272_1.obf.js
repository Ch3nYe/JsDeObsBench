process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
let input = '';
process['stdin']['on']('data', function (chunk) {
    input += chunk;
});
process['stdin']['on']('end', function () {
    const PdHBix = {
        'SgkUf': function (callee, param1) {
            return callee(param1);
        }
    };
    PdHBix['SgkUf'](main, input['split']('\x0a'));
});
let count = 0x0;
function merge(A, left, mid, right) {
    const Vanbid = {
        'juQGB': function (x, y) {
            return x - y;
        },
        'mxdKV': function (x, y) {
            return x + y;
        },
        'VGKue': function (x, y) {
            return x < y;
        }
    };
    let n1 = Vanbid['juQGB'](mid, left);
    let n2 = right - mid;
    let L = [];
    let R = [];
    for (let i = 0x0; i < n1; i++)
        L['push'](A[Vanbid['mxdKV'](left, i)]);
    for (let i = 0x0; i < n2; i++)
        R['push'](A[Vanbid['mxdKV'](mid, i)]);
    L['push'](Number['MAX_SAFE_INTEGER']);
    R['push'](Number['MAX_SAFE_INTEGER']);
    let i = 0x0, j = 0x0;
    for (let k = left; Vanbid['VGKue'](k, right); k++) {
        if (Vanbid['VGKue'](L[i], R[j]))
            A[k] = L[i++];
        else
            A[k] = R[j++];
        count++;
    }
}
function mergeSort(A, left, right, count) {
    const XzqLjT = {
        'WbWxD': function (x, y) {
            return x >= y;
        },
        'ADaqN': function (x, y) {
            return x + y;
        },
        'WGglw': function (callee, param1, param2, param3) {
            return callee(param1, param2, param3);
        },
        'dmXGJ': function (callee, param1, param2, param3, param4) {
            return callee(param1, param2, param3, param4);
        }
    };
    if (XzqLjT['WbWxD'](XzqLjT['ADaqN'](left, 0x1), right))
        return;
    let mid = Math['floor']((left + right) / 0x2);
    XzqLjT['WGglw'](mergeSort, A, left, mid);
    XzqLjT['WGglw'](mergeSort, A, mid, right);
    XzqLjT['dmXGJ'](merge, A, left, mid, right);
}
function main(lines) {
    const twsWTz = {
        'lnWNr': function (callee, param1) {
            return callee(param1);
        }
    };
    let n = twsWTz['lnWNr'](Number, lines[0x0]);
    let A = lines[0x1]['split']('\x20')['map'](Number);
    mergeSort(A, 0x0, n);
    console['log'](A['join']('\x20'));
    console['log'](count);
}