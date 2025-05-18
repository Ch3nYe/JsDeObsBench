const a0_0x5b4c38 = (function () {
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
    a0_0x5b4c38(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0x2606b3('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x2606b3();
        }
    })();
}());
const processData = lines => {
    let [n, m] = lines[0x0]['split']('\x20')['map'](x => +x);
    if (n % 0x2 === 0x1) {
        let end = n - 0x1;
        let start = 0x1;
        while (m) {
            console['log'](start++ + '\x20' + end--);
            m--;
        }
    } else {
        let end = n / 0x2 + 0x1;
        let start = n / 0x2;
        while (m) {
            console['log'](start-- + '\x20' + end++);
            m--;
        }
    }
};
let i = '';
process['stdin']['on']('data', c => i += c);
process['stdin']['on']('end', () => {
    const {EOL: EOL} = require('os');
    const lines = i['split'](EOL);
    processData(lines);
});
function a0_0x2606b3(ret) {
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