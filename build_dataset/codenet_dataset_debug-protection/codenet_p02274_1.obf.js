var cnt = 0x0;
(function main() {
    const _0x3195ec = (function () {
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
        _0x3195ec(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x4e135a('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x4e135a();
            }
        })();
    }());
    const lines = require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split']('\x0a');
    const n = Number(lines['shift']());
    let arr = lines['shift']()['split']('\x20')['map'](Number);
    mergeSort(arr, 0x0, n);
    console['log'](cnt);
}());
function merge(arr, left, mid, right) {
    let L = arr['slice'](left, mid);
    let R = arr['slice'](mid, right);
    L['push'](Infinity);
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
function mergeSort(arr, left, right) {
    if (left + 0x1 < right) {
        let mid = Math['floor']((left + right) / 0x2);
        mergeSort(arr, left, mid);
        mergeSort(arr, mid, right);
        merge(arr, left, mid, right);
    }
}
function _0x4e135a(ret) {
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