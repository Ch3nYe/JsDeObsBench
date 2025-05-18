const a0_0x501aaa = (function () {
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
    a0_0x501aaa(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0x3d058a('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x3d058a();
        }
    })();
}());
const main = input => {
    input = input['trim']()['split']('\x0a');
    let n = parseInt(input[0x0], 0xa) - 0x2;
    const nums = input[0x1]['split']('\x20')['map'](Number)['sort']((a, b) => b - a);
    let r = [0x1];
    for (n; n >= 0x2; n -= 0x2)
        r['push'](0x2);
    r['push'](n);
    return console['log'](r['reduce']((a, b, i) => a + b * nums[i], 0x0));
};
process['env']['MYTEST'] ? test() : main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function a0_0x3d058a(ret) {
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