let lines = [];
let reader = require('readline')['createInterface']({
    'input': process['stdin'],
    'output': process['stdout']
});
reader['on']('line', function (line) {
    lines['push'](line);
});
reader['on']('close', function () {
    const XSvwll = {
        'krikQ': function (x, y) {
            return x + y;
        },
        'DvMgS': function (x, y) {
            return x - y;
        },
        'kDwZL': function (x, y) {
            return x < y;
        }
    };
    const [n, m] = lines[0x0]['split']('\x20');
    const a = [];
    const b = [];
    for (let i = 0x0; i < m; i++) {
        [a[i], b[i]] = lines[XSvwll['krikQ'](i, 0x1)]['split']('\x20');
    }
    const connected = [];
    connected['push'](a[0x0]);
    connected['push'](b[0x0]);
    ans = XSvwll['DvMgS'](n, 0x2);
    for (let i = 0x1; XSvwll['kDwZL'](i, m); i++) {
        if (!connected['includes'](a[i]) && !connected['includes'](b[i])) {
            ans--;
        } else if (!connected['includes'](a[i])) {
            ans--;
            connected['push'](a[i]);
        } else if (!connected['includes'](b[i])) {
            ans--;
            connected['push'](b[i]);
        }
    }
    console['log'](ans);
});