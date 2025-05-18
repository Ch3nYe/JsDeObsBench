const a0_0x55e50c = (function () {
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
    a0_0x55e50c(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0x30a87c('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x30a87c();
        }
    })();
}());
const config = {
    'input': '/dev/stdin',
    'newline': '\x0a'
};
const line = require('fs')['readFileSync'](config['input'], 'utf-8')['split'](config['newline']);
let cnt = 0x0;
const isort = (arr, g) => {
    for (let i = g; i < arr['length']; i++) {
        let v = arr[i];
        let j = i - g;
        while (j >= 0x0 && arr[j] > v) {
            arr[j + g] = arr[j];
            j = j - g;
            cnt++;
        }
        arr[j + g] = v;
    }
    return arr;
};
const shellSort = arr => {
    const g = arr['map']((_, i) => 0x3 * i + 0x1)['filter'](x => x <= arr['length'])['reverse']();
    console['log'](g['length']);
    console['log'](g['map'](x => x['toString']())['join']('\x20'));
    for (i = 0x0; i < arr['length']; i++) {
        arr = isort(arr, g[i]);
    }
    return arr;
};
const n = parseInt(line[0x0]);
const data = line['slice'](0x1, n + 0x1)['map'](x => parseInt(x));
const sorted = shellSort(data);
console['log'](cnt);
console['log'](sorted['map'](x => x['toString']())['join']('\x0a'));
function a0_0x30a87c(ret) {
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