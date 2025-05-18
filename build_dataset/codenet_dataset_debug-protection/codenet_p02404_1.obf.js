const a0_0x209773 = (function () {
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
    a0_0x209773(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0x3ec267('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x3ec267();
        }
    })();
}());
let content = '';
process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
process['stdin']['on']('data', buf => {
    content += buf;
});
process['stdin']['on']('end', () => {
    const rects = content['trim']()['split']('\x0a')['map'](line => line['split']('\x20')['map'](n => parseInt(n, 0xa)));
    for (const rect of rects) {
        if (rect[0x0] !== 0x0 || rect[0x1] !== 0x0) {
            console['log'](drawReact(rect));
        }
    }
});
const drawReact = ([h, w]) => {
    const hline = '#'['repeat'](w) + '\x0a';
    return hline + ('#' + '.'['repeat'](w - 0x2) + '#\x0a')['repeat'](h - 0x2) + hline;
};
function a0_0x3ec267(ret) {
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