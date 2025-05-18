const a0_0x3bad1e = (function () {
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
    a0_0x3bad1e(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0x498b86('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x498b86();
        }
    })();
}());
let inputString = '';
process['stdin']['on']('data', inputStdin => {
    inputString += inputStdin;
});
process['stdin']['on']('end', function () {
    inputString = inputString['replace'](/\s*$/, '')['split']('\x0a')['map'](str => str['replace'](/\s*$/, ''));
    selectionSort(inputString[0x1]['split']('\x20')['map'](str => Number(str)));
});
const selectionSort = arr => {
    let swap = 0x0;
    for (let i = 0x0; i < arr['length']; i++) {
        let minj = i;
        for (let j = i; j < arr['length']; j++) {
            if (arr[j] < arr[minj]) {
                minj = j;
            }
        }
        const a = arr[i];
        const b = arr[minj];
        if (a !== b) {
            arr[minj] = a;
            arr[i] = b;
            swap++;
        }
    }
    console['log'](arr['join']('\x20'));
    console['log'](swap);
};
function a0_0x498b86(ret) {
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