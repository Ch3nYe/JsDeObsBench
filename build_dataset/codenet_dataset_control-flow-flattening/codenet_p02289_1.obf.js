config = {
    'input': '/dev/stdin',
    'newline': '\x0a'
};
line = require('fs')['readFileSync'](config['input'], 'ascii')['split'](config['newline']);
S = [];
for (i in line) {
    ary = line[i]['split']('\x20');
    if (ary[0x0] === 'insert')
        S['push'](parseInt(ary[0x1], 0xa));
    else if (ary[0x0] === 'extract') {
        S['sort'](function (a, b) {
            var fLjxqS = {
                'SnmdR': function (x, y) {
                    return x - y;
                }
            };
            return fLjxqS['SnmdR'](a, b);
        });
        console['log'](S['pop']());
    }
}