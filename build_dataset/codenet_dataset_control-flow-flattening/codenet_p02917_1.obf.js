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
    var zwXWYz = {
        'jYpLv': function (x, y) {
            return x < y;
        },
        'pHoDn': function (x, y) {
            return x - y;
        },
        'QYWzP': function (x, y) {
            return x + y;
        },
        'atGLz': function (x, y) {
            return x + y;
        }
    };
    const list = lines[0x1]['split']('\x20')['map'](v => v - 0x0);
    let ans = 0x0;
    for (let i = 0x0; zwXWYz['jYpLv'](i, zwXWYz['pHoDn'](list['length'], 0x1)); i++) {
        ans += Math['min'](list[i], list[zwXWYz['QYWzP'](i, 0x1)]);
    }
    ans += zwXWYz['atGLz'](list[zwXWYz['pHoDn'](list['length'], 0x1)], list[0x0]);
    console['log'](ans);
});