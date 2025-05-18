const a0_0x4cfa3c = a0_0x5a80;
(function (stringArrayFunction, comparisonValue) {
    const _0x5bddbe = a0_0x5a80;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x5bddbe(0xd1)) / 0x1 * (-parseInt(_0x5bddbe(0xe4)) / 0x2) + parseInt(_0x5bddbe(0xe0)) / 0x3 + -parseInt(_0x5bddbe(0xd8)) / 0x4 + parseInt(_0x5bddbe(0xdd)) / 0x5 * (-parseInt(_0x5bddbe(0xd3)) / 0x6) + parseInt(_0x5bddbe(0xd2)) / 0x7 * (parseInt(_0x5bddbe(0xda)) / 0x8) + parseInt(_0x5bddbe(0xce)) / 0x9 * (-parseInt(_0x5bddbe(0xd7)) / 0xa) + -parseInt(_0x5bddbe(0xd0)) / 0xb * (-parseInt(_0x5bddbe(0xd5)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1c45, 0xd5465));
let content = '';
process[a0_0x4cfa3c(0xe3)][a0_0x4cfa3c(0xe1)]();
process[a0_0x4cfa3c(0xe3)]['setEncoding']('utf8');
process[a0_0x4cfa3c(0xe3)]['on'](a0_0x4cfa3c(0xd6), buf => {
    content += buf;
});
process[a0_0x4cfa3c(0xe3)]['on'](a0_0x4cfa3c(0xdb), () => {
    const _0x341ff0 = a0_0x4cfa3c;
    const stack = [];
    const tokens = content['trim']()['split']('\x20')[_0x341ff0(0xdc)](line => {
        const num = parseInt(line, 0xa);
        return isNaN(num) ? line : num;
    });
    const opTokens = _0x341ff0(0xcf)[_0x341ff0(0xd4)]('');
    for (const token of tokens) {
        if (opTokens[_0x341ff0(0xe2)](token)) {
            const b = stack[_0x341ff0(0xde)]();
            const a = stack[_0x341ff0(0xde)]();
            stack[_0x341ff0(0xdf)](expr(token, a, b));
        } else {
            stack[_0x341ff0(0xdf)](token);
        }
    }
    console[_0x341ff0(0xd9)](stack['pop']());
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
function a0_0x5a80(UHtWcB, key) {
    const stringArray = a0_0x1c45();
    a0_0x5a80 = function (index, key) {
        index = index - 0xce;
        let value = stringArray[index];
        return value;
    };
    return a0_0x5a80(UHtWcB, key);
}
function a0_0x1c45() {
    const _0x3100b4 = [
        'stdin',
        '1292zGSzKc',
        '18PSdbBW',
        '+-/*',
        '108746ethAWH',
        '159WZgrbj',
        '553MjUbcE',
        '402khwyea',
        'split',
        '2832cTBPFC',
        'data',
        '3740210cmZbIr',
        '3952712XXzPrq',
        'log',
        '69656bKCDfP',
        'end',
        'map',
        '88270dRrMPW',
        'pop',
        'push',
        '2623128gIFPbQ',
        'resume',
        'includes'
    ];
    a0_0x1c45 = function () {
        return _0x3100b4;
    };
    return a0_0x1c45();
}