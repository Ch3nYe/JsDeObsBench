config = {
    'input': '/dev/stdin',
    'newline': '\x0a'
};
line = require('fs')['readFileSync'](config['input'], 'ascii')['trim']()['split'](config['newline']);
n = Number(line['shift']());
adj = {};
for (i in line) {
    ary = line[i]['split']('\x20');
    j = ary['shift']();
    ary['shift']();
    adj[j] = ary;
}
for (i = 0x1; i <= n; i++) {
    ary = [];
    for (j = 0x1; j <= n; j++) {
        if (adj[i]['indexOf'](String(j)) !== -0x1)
            ary['push'](0x1);
        else
            ary['push'](0x0);
    }
    console['log'](ary['join']('\x20'));
}