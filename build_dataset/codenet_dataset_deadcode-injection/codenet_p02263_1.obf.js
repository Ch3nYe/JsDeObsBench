function a0_0x5174() {
    const _0x159451 = [
        'stdin',
        'resume',
        'setEncoding',
        'data',
        'end',
        'trim',
        'split',
        'map',
        'zuCtL',
        '+-/*',
        'includes',
        'JteYV',
        'pop',
        'push',
        'log'
    ];
    a0_0x5174 = function () {
        return _0x159451;
    };
    return a0_0x5174();
}
const a0_0xec7e08 = a0_0x5c70;
let content = '';
process[a0_0xec7e08(0x0)][a0_0xec7e08(0x1)]();
process[a0_0xec7e08(0x0)][a0_0xec7e08(0x2)]('utf8');
function a0_0x5c70(hKaXya, key) {
    const stringArray = a0_0x5174();
    a0_0x5c70 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x5c70(hKaXya, key);
}
process['stdin']['on'](a0_0xec7e08(0x3), buf => {
    content += buf;
});
process[a0_0xec7e08(0x0)]['on'](a0_0xec7e08(0x4), () => {
    const _0x1fe985 = a0_0x5c70;
    const stack = [];
    const tokens = content[_0x1fe985(0x5)]()[_0x1fe985(0x6)]('\x20')[_0x1fe985(0x7)](line => {
        const _0x40c60f = a0_0x5c70;
        if (_0x40c60f(0x8) === 'CZcrx') {
            const num = parseInt(line, 0xa);
            return isNaN(num) ? line : num;
        } else {
            const num = parseInt(line, 0xa);
            return isNaN(num) ? line : num;
        }
    });
    const opTokens = _0x1fe985(0x9)['split']('');
    for (const token of tokens) {
        if (opTokens[_0x1fe985(0xa)](token)) {
            if (_0x1fe985(0xb) === _0x1fe985(0xb)) {
                const b = stack[_0x1fe985(0xc)]();
                const a = stack[_0x1fe985(0xc)]();
                stack[_0x1fe985(0xd)](expr(token, a, b));
            } else {
                if (opTokens['includes'](token)) {
                    const b = stack['pop']();
                    const a = stack['pop']();
                    stack[_0x1fe985(0xd)](expr(token, a, b));
                } else {
                    stack[_0x1fe985(0xd)](token);
                }
            }
        } else {
            stack[_0x1fe985(0xd)](token);
        }
    }
    console[_0x1fe985(0xe)](stack[_0x1fe985(0xc)]());
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