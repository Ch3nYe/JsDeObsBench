const a0_0x44eb6e = (function () {
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
    a0_0x44eb6e(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0x4aed88('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x4aed88();
        }
    })();
}());
const padLeft = (w, l, c) => ([...Array(l)]['map'](_ => c)['join']('') + w)['slice'](l * -0x1);
const split = (w, n) => (ws => ws['reduce']((acc, _, i) => i % n ? acc : [
    ...acc,
    ws['slice'](i, i + n)['join']('')
], []))([...w]);
const arrange = n => (x => x[0x0] ? [
    x[0x0] - 0x1,
    x[0x1] + 0x2540be400
] : x)(split(padLeft(n, 0x14, '0'), 0xa)['map'](x => +x));
const solve0 = (a, b, x) => Math['floor'](b / x) - Math['floor'](a / x);
const solve1 = (a, b, x) => Math['floor'](b / x) - (a == 0x0 ? -0x1 : Math['floor']((a - 0x1) / x));
const nullOrStr = n => n ? String(n) : '';
const fn2 = (a2, b2, x) => '' + nullOrStr(solve0(+a2[0x0], b2[0x0], x)) + solve1(a2[0x1], b2[0x1], x);
const fn1 = (a, b, x) => fn2(arrange(a), arrange(b), x);
const main = input => fn1(...input['split']('\x20'));
console['log'](main(require('fs')['readFileSync']('/dev/stdin', 'utf8')));
function a0_0x4aed88(ret) {
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