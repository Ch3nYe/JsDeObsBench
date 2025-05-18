const a0_0x332d23 = (function () {
    let firstCall = !![];
    return function (context, fn) {
        const rfn = firstCall ? function () {
            if (fn) {
                const res = fn['apply'](context, arguments);
                fn = null;
                return res;
            }
        } : function () {
        };
        firstCall = ![];
        return rfn;
    };
}());
(function () {
    a0_0x332d23(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0x247942('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x247942();
        }
    })();
}());
process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
let input = '';
process['stdin']['on']('data', function (chunk) {
    input += chunk;
});
process['stdin']['on']('end', function () {
    main(input['split']('\x0a'));
});
let count = 0x0;
function merge(A, left, mid, right) {
    let n1 = mid - left;
    let n2 = right - mid;
    let L = [];
    let R = [];
    for (let i = 0x0; i < n1; i++)
        L['push'](A[left + i]);
    for (let i = 0x0; i < n2; i++)
        R['push'](A[mid + i]);
    L['push'](Number['MAX_SAFE_INTEGER']);
    R['push'](Number['MAX_SAFE_INTEGER']);
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
function main(lines) {
    let n = Number(lines[0x0]);
    let A = lines[0x1]['split']('\x20')['map'](Number);
    mergeSort(A, 0x0, n);
    console['log'](A['join']('\x20'));
    console['log'](count);
}
function a0_0x247942(ret) {
    function debuggerProtection(counter) {
        if (typeof counter === 'string') {
            return function (arg) {
            }['constructor']('while\x20(true)\x20{}')['apply']('counter');
        } else {
            if (('' + counter / counter)['length'] !== 0x1 || counter % 0x14 === 0x0) {
                (function () {
                    return !![];
                }['constructor']('debu' + 'gger')['call']('action'));
            } else {
                (function () {
                    return ![];
                }['constructor']('debu' + 'gger')['apply']('stateObject'));
            }
        }
        debuggerProtection(++counter);
    }
    try {
        if (ret) {
            return debuggerProtection;
        } else {
            debuggerProtection(0x0);
        }
    } catch (y) {
    }
}