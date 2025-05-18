const a0_0x4a4a10 = (function () {
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
    a0_0x4a4a10(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0x5c7996('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x5c7996();
        }
    })();
}());
'use strict';
const main = arg => {
    const input = arg['trim']()['split']('\x0a');
    let H = Number(input[0x0]['split']('\x20'));
    let W = Number(input[0x1]['split']('\x20'));
    let N = Number(input[0x2]['split']('\x20'));
    let paintedRow = 0x0;
    let paintedColumn = 0x0;
    let paintedCell = 0x0;
    while (0x1) {
        if (W >= H) {
            paintedCell += W - paintedColumn;
            paintedRow++;
        } else {
            paintedCell += H - paintedRow;
            paintedColumn++;
        }
        if (paintedCell >= N)
            break;
    }
    console['log'](paintedColumn + paintedRow);
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function a0_0x5c7996(ret) {
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