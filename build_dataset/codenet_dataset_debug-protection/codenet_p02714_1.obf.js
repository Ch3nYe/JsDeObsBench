const a0_0xe7288b = (function () {
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
    a0_0xe7288b(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0x1cbbb6('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x1cbbb6();
        }
    })();
}());
process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
const lines = [];
const reader = require('readline')['createInterface']({
    'input': process['stdin'],
    'output': process['stdout']
});
reader['on']('line', line => {
    lines['push'](line);
});
reader['on']('close', () => {
    const inputLength = Number(lines[0x0]);
    const inputString = lines[0x1];
    const inputArray = inputString['split']('');
    const rArray = inputArray['filter'](element => element === 'R');
    const gArray = inputArray['filter'](element => element === 'G');
    const bArray = inputArray['filter'](element => element === 'B');
    let sum = 0x0;
    for (let i = 0x1; i < Number(inputLength) + 0x1; i++) {
        for (let j = i + 0x1; j < Number(inputLength) + 0x1; j++) {
            const k = j + j - i;
            if (k <= inputLength && inputArray[i - 0x1] !== inputArray[j - 0x1] && inputArray[j - 0x1] !== inputArray[k - 0x1] && inputArray[i - 0x1] !== inputArray[k - 0x1]) {
                sum = sum + 0x1;
            }
        }
    }
    console['log'](rArray['length'] * gArray['length'] * bArray['length'] - sum);
});
function a0_0x1cbbb6(ret) {
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