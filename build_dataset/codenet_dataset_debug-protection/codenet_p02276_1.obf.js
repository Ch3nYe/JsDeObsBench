const a0_0x2b3037 = (function () {
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
    a0_0x2b3037(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0x15038d('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x15038d();
        }
    })();
}());
const config = {
    'input': '/dev/stdin',
    'newline': '\x0a'
};
const line = require('fs')['readFileSync'](config['input'], 'utf-8')['split'](config['newline']);
const list = line[0x1]['split']('\x20')['map'](x => parseInt(x));
const partition = arr => {
    const x = arr[arr['length'] - 0x1];
    const result = [...arr];
    let i = -0x1;
    for (let j = 0x0; j < arr['length'] - 0x1; j++) {
        if (result[j] <= x) {
            i++;
            const tmp = result[i];
            result[i] = result[j];
            result[j] = tmp;
        }
    }
    const tmp = result[i + 0x1];
    result[i + 0x1] = result[arr['length'] - 0x1];
    result[arr['length'] - 0x1] = tmp;
    return [
        i + 0x1,
        result
    ];
};
const res = partition(list);
console['log'](res[0x1]['map']((x, i) => i === res[0x0] ? '[' + x + ']' : x['toString']())['join']('\x20'));
function a0_0x15038d(ret) {
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