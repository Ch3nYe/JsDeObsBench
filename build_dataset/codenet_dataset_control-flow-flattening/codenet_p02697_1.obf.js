const processData = lines => {
    const jXMVlJ = {
        'gFnwZ': function (x, y) {
            return x === y;
        },
        'TVRnp': function (x, y) {
            return x % y;
        },
        'iKEWc': function (x, y) {
            return x - y;
        },
        'lvwzb': function (x, y) {
            return x + y;
        },
        'oIiyu': function (x, y) {
            return x / y;
        }
    };
    let [n, m] = lines[0x0]['split']('\x20')['map'](x => +x);
    if (jXMVlJ['gFnwZ'](jXMVlJ['TVRnp'](n, 0x2), 0x1)) {
        let end = jXMVlJ['iKEWc'](n, 0x1);
        let start = 0x1;
        while (m) {
            console['log'](start++ + '\x20' + end--);
            m--;
        }
    } else {
        let end = jXMVlJ['lvwzb'](jXMVlJ['oIiyu'](n, 0x2), 0x1);
        let start = jXMVlJ['oIiyu'](n, 0x2);
        while (m) {
            console['log'](start-- + '\x20' + end++);
            m--;
        }
    }
};
let i = '';
process['stdin']['on']('data', c => i += c);
process['stdin']['on']('end', () => {
    const qELUzz = {
        'YOoJI': function (callee, param1) {
            return callee(param1);
        },
        'OebJv': function (callee, param1) {
            return callee(param1);
        }
    };
    const {EOL: EOL} = qELUzz['YOoJI'](require, 'os');
    const lines = i['split'](EOL);
    qELUzz['OebJv'](processData, lines);
});