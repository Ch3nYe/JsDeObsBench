const a0_0xda91cf = (function () {
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
    a0_0xda91cf(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0xa737c2('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0xa737c2();
        }
    })();
}());
const main = input => {
    const args = input['split']('\x0a');
    const hwk = args['shift']()['split']('\x20')['map'](v => Number(v));
    const map = args['map'](v => v['split'](''));
    let sum = 0x0;
    for (let i = 0x0; i < 0x2 ** hwk[0x0]; i++) {
        for (let j = 0x0; j < 0x2 ** hwk[0x1]; j++) {
            const binaryH = i['toString'](0x2)['padStart'](hwk[0x0], '0')['split']('');
            const binaryW = j['toString'](0x2)['padStart'](hwk[0x1], '0')['split']('');
            const filledRow = map['map']((l, idx) => binaryH[idx] === '1' ? l['map'](_ => 'r') : l);
            const filledAll = filledRow['map'](v => v['map']((v, idx) => binaryW[idx] === '1' ? 'r' : v));
            const count = filledAll['flat']()['filter'](v => v === '#')['length'];
            if (count === hwk[0x2]) {
                sum++;
            }
        }
    }
    console['log'](sum);
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function a0_0xa737c2(ret) {
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