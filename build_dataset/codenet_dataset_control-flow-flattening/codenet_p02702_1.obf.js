const Main = () => {
    const AUSoJf = {
        'nFJVm': '/dev/stdin',
        'xpJKq': 'utf8',
        'CtSuZ': function (x, y) {
            return x < y;
        },
        'Tqhkp': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'fznOn': function (x, y) {
            return x % y;
        }
    };
    let line = require('fs')['readFileSync'](AUSoJf['nFJVm'], AUSoJf['xpJKq']);
    const mod = {};
    let count = 0x0;
    for (let i = line['length']; AUSoJf['CtSuZ'](0x0, i); i--) {
        const n = AUSoJf['Tqhkp'](parseInt, line, 0xa);
        const m = AUSoJf['fznOn'](n, 0x7e3);
        if (mod[m] || m === 0x0) {
            count++;
        }
        mod[m] = !![];
        line = line['slice'](0x1);
    }
    console['log'](count);
};
Main();