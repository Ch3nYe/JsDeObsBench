var a0_0xf207b4 = (function () {
    var firstCall = !![];
    return function (context, fn) {
        var rfn = firstCall ? function () {
            if (fn) {
                var res = fn['apply'](context, arguments);
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
    a0_0xf207b4(this, function () {
        var regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        var regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        var result = a0_0x345723('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x345723();
        }
    })();
}());
const main = input => {
    const N = Number(input);
    console['log'](calc(N, '', 0x0));
};
var map = {};
var w = [
    'A',
    'C',
    'G',
    'T'
];
function calc(N, lst4, cnt) {
    var key = lst4 + '_' + cnt;
    if (map[key])
        return map[key];
    if (cnt == N) {
        return 0x1;
    }
    var ans = 0x0;
    for (var i = 0x0; i < 0x4; i++) {
        var next = lst4 + w[i];
        var next3 = next['slice'](-0x3);
        var next4 = next['slice'](-0x4);
        if (next3[0x0] + next3[0x1] + next3[0x2] != 'AGC' && next3[0x0] + next3[0x2] + next3[0x1] != 'AGC' && next3[0x1] + next3[0x0] + next3[0x2] != 'AGC' && next4[0x0] + next4[0x1] + next4[0x3] != 'AGC' && next4[0x0] + next4[0x2] + next4[0x3] != 'AGC') {
            ans += calc(N, next['slice'](-0x4), cnt + 0x1);
            ans %= 0x3b9aca07;
        }
    }
    map[key] = ans;
    return ans;
}
main(require('fs')['readFileSync']('/dev/stdin', 'UTF-8'));
function a0_0x345723(ret) {
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