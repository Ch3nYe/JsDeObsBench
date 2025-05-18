const a0_0x28a5f0 = (function () {
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
    a0_0x28a5f0(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0x3310b9('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x3310b9();
        }
    })();
}());
const main = input => {
    const data = input['split'](/\n/);
    const num = data[0x0];
    const hoge = data[0x1]['split'](/\s/)['map'](a => parseInt(a, 0xa))['sort']((a, b) => {
        if (a < b)
            return 0x1;
        if (a > b)
            return -0x1;
        return 0x0;
    });
    var res = 0x0;
    for (i = 0x0; i < num; i++) {
        res += hoge[i * 0x2 + 0x1];
    }
    console['log'](res);
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function a0_0x3310b9(ret) {
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