const a0_0x52675a = (function () {
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
    a0_0x52675a(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0x398624('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x398624();
        }
    })();
}());
'use strict';
const main = input => {
    input = input['split']('\x0a');
    const N = Number(input[0x0]);
    const A1 = input[0x1]['split']('\x20');
    const A2 = A1['concat']();
    bubbleSort(A1, N);
    console['log'](A1['join']('\x20'));
    console['log']('Stable');
    selectionSort(A2, N);
    console['log'](A2['join']('\x20'));
    console['log'](A2['every']((v, i) => v === A1[i]) ? 'Stable' : 'Not\x20stable');
};
function bubbleSort(A, N) {
    for (let i = 0x0; i < N - 0x1; ++i) {
        for (let j = N - 0x1; j >= i + 0x1; --j) {
            if (Number(A[j - 0x1][0x1]) > Number(A[j][0x1])) {
                const tmp = A[j];
                A[j] = A[j - 0x1];
                A[j - 0x1] = tmp;
            }
        }
    }
}
function selectionSort(A, N) {
    for (let i = 0x0; i < N - 0x1; ++i) {
        let minj = i;
        for (let j = i; j < N; ++j) {
            if (Number(A[j][0x1]) < Number(A[minj][0x1])) {
                minj = j;
            }
        }
        if (i !== minj) {
            const tmp = A[i];
            A[i] = A[minj];
            A[minj] = tmp;
        }
    }
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function a0_0x398624(ret) {
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