const a0_0x2ba48e = (function () {
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
    a0_0x2ba48e(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0x2a8c36('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x2a8c36();
        }
    })();
}());
const main = input => {
    input = input['trim']()['split']('\x0a');
    const [n, k] = input[0x0]['split']('\x20')['map'](Number);
    const directions = input[0x1]['split']('\x20')['map'](v => Number(v) - 0x1);
    const scoreList = input[0x2]['split']('\x20')['map'](Number);
    const ans = [new Array(n)['fill'](0x0)];
    for (let i = 0x0; i < k; i++)
        ans['push']([]);
    for (let i = 0x0; i < k; i++) {
        for (let x = 0x0; x < n; x++) {
            const score = ans[i][x];
            ans[i + 0x1][directions[x]] = score + scoreList[directions[x]];
        }
    }
    let max = -Infinity;
    for (let i = 0x1; i < ans['length']; i++)
        max = Math['max'](max, Math['max'](...ans[i]));
    return console['log'](max);
};
process['env']['MYTEST'] ? test() : main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function a0_0x2a8c36(ret) {
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