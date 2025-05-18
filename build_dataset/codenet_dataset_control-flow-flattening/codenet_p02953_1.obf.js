function Main(args) {
    const ejCPIb = {
        'coMsi': function (x, y) {
            return x - y;
        },
        'CEGGh': function (x, y) {
            return x > y;
        },
        'LtNaI': function (x, y) {
            return x > y;
        },
        'lZgpX': 'Yes'
    };
    const firstRow = args['split']('\x0a')[0x0];
    const row = args['split']('\x0a')[0x1]['split']('\x20');
    for (var i = ejCPIb['coMsi'](row['length'], 0x1); i > 0x0; i--) {
        if (ejCPIb['CEGGh'](row[i - 0x1], row[i])) {
            row[ejCPIb['coMsi'](i, 0x1)] -= 0x1;
        }
        if (ejCPIb['LtNaI'](row[ejCPIb['coMsi'](i, 0x1)], row[i])) {
            return console['log']('No');
        }
    }
    console['log'](ejCPIb['lZgpX']);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));