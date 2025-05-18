config = {
    'input': '/dev/stdin',
    'newline': '\x0a'
};
line = require('fs')['readFileSync'](config['input'], 'ascii')['trim']()['split'](config['newline'])['map'](function (line) {
    return line['split']('\x20')['map'](Number);
});
n = line[0x0][0x0];
m = line[0x0][0x1];
q = line[m + 0x1][0x0];
adj = new Array(n);
for (i = 0x0; i < n; i++)
    adj[i] = null;
conn = line['slice'](0x1, m + 0x1);
conn['sort'](function (a, b) {
    var jmNHJZ = {
        'DfbRE': function (x, y) {
            return x === y;
        },
        'irZYd': function (x, y) {
            return x - y;
        },
        'mylhX': function (x, y) {
            return x - y;
        }
    };
    if (jmNHJZ['DfbRE'](a[0x0], b[0x0]))
        return jmNHJZ['irZYd'](a[0x1], b[0x1]);
    return jmNHJZ['mylhX'](a[0x0], b[0x0]);
});
for (i in conn) {
    var XDxuau = '5|1|2|3|4|6|0'['split']('|');
    var TKRjNt = 0x0;
    while (!![]) {
        switch (XDxuau[TKRjNt++]) {
        case '0':
            if (id1 !== min)
                adj[id1] = min;
            continue;
        case '1':
            min1 = id1 = conn[i][0x1];
            continue;
        case '2':
            while (adj[min0] !== null)
                min0 = adj[min0];
            continue;
        case '3':
            while (adj[min1] !== null)
                min1 = adj[min1];
            continue;
        case '4':
            min = Math['min'](min0, min1);
            continue;
        case '5':
            min0 = id0 = conn[i][0x0];
            continue;
        case '6':
            if (id0 !== min)
                adj[id0] = min;
            continue;
        }
        break;
    }
}
q = line['slice'](m + 0x2, m + 0x2 + q);
for (i in q) {
    var kaibdn = '3|4|0|2|1'['split']('|');
    var PICrtT = 0x0;
    while (!![]) {
        switch (kaibdn[PICrtT++]) {
        case '0':
            while (adj[min0] !== null)
                min0 = adj[min0];
            continue;
        case '1':
            console['log'](min0 === min1 ? 'yes' : 'no');
            continue;
        case '2':
            while (adj[min1] !== null)
                min1 = adj[min1];
            continue;
        case '3':
            min0 = q[i][0x0];
            continue;
        case '4':
            min1 = q[i][0x1];
            continue;
        }
        break;
    }
}