'use strict';
function Main(input) {
    const _0x570634 = (function () {
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
        _0x570634(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x483d6e('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x483d6e();
            }
        })();
    }());
    input = input['trim']()['split']('\x0a');
    const hw = input['shift']()['split']('\x20')['map'](str => Number(str));
    const H = hw[0x0], W = hw[0x1];
    const data = input['map'](ls => ls['split'](''));
    const hy = [
        -0x1,
        -0x1,
        -0x1,
        0x0,
        0x0,
        0x1,
        0x1,
        0x1
    ];
    const wx = [
        -0x1,
        0x0,
        0x1,
        -0x1,
        0x1,
        -0x1,
        0x0,
        0x1
    ];
    for (let i = 0x0; i < H; i++) {
        for (let j = 0x0; j < W; j++) {
            if (data[i][j] === '#')
                continue;
            let count = 0x0;
            for (let k = 0x0; k < 0x8; k++) {
                const y = i + hy[k], x = j + wx[k];
                if (y < 0x0 || H <= y)
                    continue;
                if (x < 0x0 || W <= x)
                    continue;
                if (data[y][x] === '#') {
                    count += 0x1;
                }
            }
            data[i][j] = count;
        }
    }
    const result = data['map'](ls => ls['join'](''))['join']('\x0a');
    console['log'](result);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x483d6e(ret) {
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