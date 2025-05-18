const a0_0x230863 = (function () {
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
    a0_0x230863(this, function () {
        const regExp1 = new RegExp('function\x20*\x5c(\x20*\x5c)');
        const regExp2 = new RegExp('\x5c+\x5c+\x20*(?:[a-zA-Z_$][0-9a-zA-Z_$]*)', 'i');
        const result = a0_0x18b665('init');
        if (!regExp1['test'](result + 'chain') || !regExp2['test'](result + 'input')) {
            result('0');
        } else {
            a0_0x18b665();
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
    const stack = [];
    const tokens = content['trim']()['split']('\x20')['map'](line => {
        const num = parseInt(line, 0xa);
        return isNaN(num) ? line : num;
    });
    const opTokens = '+-/*'['split']('');
    for (const token of tokens) {
        if (opTokens['includes'](token)) {
            const b = stack['pop']();
            const a = stack['pop']();
            stack['push'](expr(token, a, b));
        } else {
            stack['push'](token);
        }
    }
    console['log'](stack['pop']());
});
const expr = (op, a, b) => {
    switch (op) {
    case '*':
        return a * b;
    case '/':
        return a / b;
    case '+':
        return a + b;
    case '-':
        return a - b;
    }
};
function a0_0x18b665(ret) {
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