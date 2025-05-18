function main(input) {
    const _0x10612a = (function () {
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
        _0x10612a(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x162e4c('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x162e4c();
            }
        })();
    }());
    let tmp = input['split']('\x0a');
    let vacations = [];
    for (let i = 0x1; i < tmp['length']; i++) {
        let vacation = tmp[i]['split']('\x20')['map'](element => parseInt(element, 0xa));
        vacations['push'](vacation);
    }
    let dp = [
        0x0,
        0x0,
        0x0
    ];
    for (let day = 0x0; day < vacations['length']; day++) {
        let vacation = vacations[day];
        let new_dp = [
            0x0,
            0x0,
            0x0
        ];
        for (let i = 0x0; i < 0x3; i++) {
            for (let j = 0x0; j < 0x3; j++) {
                if (i !== j) {
                    new_dp[j] = Math['max'](new_dp[j], dp[i] + vacation[j]);
                }
            }
        }
        dp = new_dp;
    }
    console['log'](Math['max'](dp[0x0], dp[0x1], dp[0x2]));
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x162e4c(ret) {
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