var cnt = 0x0;
(function main() {
    const HRIJmq = {
        'brFVn': function (callee, param1) {
            return callee(param1);
        },
        'CAhVm': '/dev/stdin',
        'RlMKk': 'utf8',
        'yyUBa': function (callee, param1, param2, param3) {
            return callee(param1, param2, param3);
        }
    };
    const lines = HRIJmq['brFVn'](require, 'fs')['readFileSync'](HRIJmq['CAhVm'], HRIJmq['RlMKk'])['trim']()['split']('\x0a');
    const n = HRIJmq['brFVn'](Number, lines['shift']());
    let arr = lines['shift']()['split']('\x20')['map'](Number);
    HRIJmq['yyUBa'](mergeSort, arr, 0x0, n);
    console['log'](cnt);
}());
function merge(arr, left, mid, right) {
    const uIMQvx = {
        'Nktyr': function (x, y) {
            return x < y;
        }
    };
    let L = arr['slice'](left, mid);
    let R = arr['slice'](mid, right);
    L['push'](Infinity);
    R['push'](Infinity);
    let i = 0x0;
    let j = 0x0;
    let t = 0x0;
    for (let k = left; uIMQvx['Nktyr'](k, right); k++) {
        if (uIMQvx['Nktyr'](L[i], R[j])) {
            arr[k] = L[i++];
            cnt += t;
        } else {
            arr[k] = R[j++];
            t += 0x1;
        }
    }
}
function mergeSort(arr, left, right) {
    const fUXPaF = {
        'xYHqo': function (x, y) {
            return x < y;
        },
        'MdgxQ': function (x, y) {
            return x + y;
        },
        'ePLvd': function (callee, param1, param2, param3, param4) {
            return callee(param1, param2, param3, param4);
        }
    };
    if (fUXPaF['xYHqo'](left + 0x1, right)) {
        let mid = Math['floor'](fUXPaF['MdgxQ'](left, right) / 0x2);
        mergeSort(arr, left, mid);
        mergeSort(arr, mid, right);
        fUXPaF['ePLvd'](merge, arr, left, mid, right);
    }
}