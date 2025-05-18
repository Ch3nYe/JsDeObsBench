const a0_0x5d8746 = (function () {
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
    a0_0x5d8746(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0x56cb2d('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x56cb2d();
        }
    })();
}());
const main = input => {
    const lines = input['split']('\x0a');
    const [h, w] = lines[0x0]['split']('\x20')['map'](Number);
    const data = Array(h)['fill'](![])['map']((_, i) => lines[i + 0x1]['split']('')['slice'](0x0, w)['map'](c => c === '#'));
    const ans = data['every']((row, i) => row['every']((cell, j) => !cell || (data[i - 0x1] || [])[j] || (data[i + 0x1] || [])[j] || data[i][j - 0x1] || data[i][j + 0x1]));
    console['log'](ans ? 'Yes' : 'No');
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function a0_0x56cb2d(ret) {
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