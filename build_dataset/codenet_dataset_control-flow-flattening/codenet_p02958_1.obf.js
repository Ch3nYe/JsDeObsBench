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
    var EJoDKd = {
        'pFHbz': function (x, y) {
            return x <= y;
        },
        'lCoxP': 'YES'
    };
    const a = lines[0x1]['split']('\x20')['map'](v => v - 0x0);
    const b = lines[0x1]['split']('\x20')['map'](v => v - 0x0)['sort']((a, b) => a - b);
    let ans = a['filter']((v, i) => v != b[i])['length'];
    console['log'](EJoDKd['pFHbz'](ans, 0x2) ? EJoDKd['lCoxP'] : 'NO');
});
min = (...a) => {
    return a['reduce']((a, b) => a < b ? a : b, a[0x0]);
};