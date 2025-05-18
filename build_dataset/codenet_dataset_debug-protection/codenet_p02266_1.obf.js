const a0_0x3aee40 = (function () {
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
    a0_0x3aee40(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0x348a5f('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x348a5f();
        }
    })();
}());
const calc = str => {
    const areas = [];
    const depthIndexes = [];
    let sum = 0x0;
    for (let i = 0x0; i < str['length']; i++) {
        const char = str[i];
        if (char === '\x5c') {
            depthIndexes['push'](i);
            continue;
        }
        if (char === '/' && depthIndexes['length'] > 0x0) {
            const j = depthIndexes['pop']();
            sum += i - j;
            let currentArea = i - j;
            while (areas['length'] > 0x0 && areas[areas['length'] - 0x1]['depth'] > j) {
                currentArea += areas[areas['length'] - 0x1]['area'];
                areas['pop']();
            }
            areas['push']({
                'depth': j,
                'area': currentArea
            });
        }
    }
    console['log'](sum);
    if (areas['length'] === 0x0) {
        console['log'](0x0);
        return;
    }
    console['log'](areas['length'] + '\x20' + areas['map'](obj => obj['area'])['join']('\x20'));
};
let inputStr = '';
process['stdin']['on']('data', input => {
    inputStr += String['raw']`${ input }`;
});
process['stdin']['on']('end', () => {
    calc(inputStr);
});
function a0_0x348a5f(ret) {
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