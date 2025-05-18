let content = '';
process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
process['stdin']['on']('data', buf => {
    content += buf;
});
process['stdin']['on']('end', () => {
    const onEpqr = {
        'cmZaP': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'MiliU': function (callee, param1) {
            return callee(param1);
        },
        'EfGvg': '+-/*',
        'TaWOa': function (callee, param1, param2, param3) {
            return callee(param1, param2, param3);
        }
    };
    const stack = [];
    const tokens = content['trim']()['split']('\x20')['map'](line => {
        const num = onEpqr['cmZaP'](parseInt, line, 0xa);
        return onEpqr['MiliU'](isNaN, num) ? line : num;
    });
    const opTokens = onEpqr['EfGvg']['split']('');
    for (const token of tokens) {
        if (opTokens['includes'](token)) {
            const b = stack['pop']();
            const a = stack['pop']();
            stack['push'](onEpqr['TaWOa'](expr, token, a, b));
        } else {
            stack['push'](token);
        }
    }
    console['log'](stack['pop']());
});
const expr = (op, a, b) => {
    const DLDlrS = {
        'KHSlq': function (x, y) {
            return x * y;
        },
        'NgZyZ': function (x, y) {
            return x + y;
        },
        'MiAYK': function (x, y) {
            return x - y;
        }
    };
    switch (op) {
    case '*':
        return DLDlrS['KHSlq'](a, b);
    case '/':
        return a / b;
    case '+':
        return DLDlrS['NgZyZ'](a, b);
    case '-':
        return DLDlrS['MiAYK'](a, b);
    }
};