function Main(input) {
    const _0x5f2d24 = (function () {
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
        _0x5f2d24(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x1a8f27('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x1a8f27();
            }
        })();
    }());
    const setting = input['trim']()['split']('\x0a');
    const process_sum = setting[0x0] - 0x0;
    const up = setting[0x1]['split']('\x20');
    const down = setting[0x2]['split']('\x20');
    let answer = 0x0;
    for (let process_up = 0x0; process_up < process_sum; process_up++) {
        let process_down = process_sum - process_up - 0x1;
        let candies = 0x0;
        for (let i = 0x0; i <= process_up; i++) {
            candies += parseInt(up[i]);
        }
        for (let i = 0x0; i <= process_down; i++) {
            candies += parseInt(down[process_up + i]);
        }
        if (answer < candies) {
            answer = candies;
        }
    }
    console['log'](answer);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x1a8f27(ret) {
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