function main(input) {
    const _0x135206 = (function () {
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
        _0x135206(this, function () {
            const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
            const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
            const result = _0x3e88cc('init');
            if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
                result('0');
            } else {
                _0x3e88cc();
            }
        })();
    }());
    'use strict';
    const lines = input['split']('\x0a');
    const firstLine = lines[0x0]['split']('\x20')['map'](value => +value);
    const L = firstLine[0x0];
    const N = firstLine[0x1];
    let xn = lines['slice'](0x1)['filter'](value => value)['map'](value => +value);
    let costs = [];
    const search = (x, xn, sum) => {
        if (xn['length'] === 0x0) {
            costs['push'](sum);
            return;
        }
        const leftDistance = xn[0x0] >= x ? xn[0x0] - x : L - x + xn[0x0];
        const rightDistance = xn[xn['length'] - 0x1] <= x ? x - xn[xn['length'] - 0x1] : x + (L - xn[xn['length'] - 0x1]);
        const left = xn['concat']();
        const leftX = left['shift']();
        const right = xn['concat']();
        const rightX = right['pop']();
        search(leftX, left, sum + leftDistance);
        search(rightX, right, sum + rightDistance);
    };
    search(0x0, xn, 0x0);
    console['log'](Math['max']['apply'](null, costs));
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function _0x3e88cc(ret) {
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