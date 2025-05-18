function Main(s) {
    const LdXRIZ = {
        'KztpZ': function (x, y) {
            return x ^ y;
        },
        'xccFy': function (x, y) {
            return x & y;
        },
        'qsSmG': function (x, y) {
            return x === y;
        },
        'pkqCh': 'First',
        'haUOp': 'Second'
    };
    s = s['trim']();
    const l = s['length'];
    if (LdXRIZ['KztpZ'](LdXRIZ['xccFy'](l, 0x1), LdXRIZ['qsSmG'](s[0x0], s[l - 0x1])))
        console['log'](LdXRIZ['pkqCh']);
    else
        console['log'](LdXRIZ['haUOp']);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));