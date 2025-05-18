process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
var lines = [];
var reader = require('readline')['createInterface']({
    'input': process['stdin'],
    'output': process['stdout']
});
reader['on']('line', line => {
    lines['push'](line);
});
reader['on']('close', () => {
    var DCVqJr = {
        'Jbbkl': function (x, y) {
            return x - y;
        },
        'lgrqA': function (x, y) {
            return x <= y;
        },
        'iaaFD': function (x, y) {
            return x === y;
        }
    };
    const N = DCVqJr['Jbbkl'](lines[0x0], 0x0);
    let tmp = 0x0;
    for (let i = 0x1; DCVqJr['lgrqA'](i, 0xf4240); i++) {
        tmp *= 0xa;
        tmp += 0x7;
        tmp %= N;
        if (DCVqJr['iaaFD'](tmp, 0x0)) {
            console['log'](i);
            return;
        }
    }
    console['log'](-0x1);
});
function check(ans) {
    return !![];
}