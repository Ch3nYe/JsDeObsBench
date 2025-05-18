function Main(input) {
    const NOrzTA = {
        'auWxv': function (x, y) {
            return x < y;
        },
        'FsHgn': function (x, y) {
            return x * y;
        },
        'BgPbo': function (x, y) {
            return x + y;
        },
        'YgyNt': function (x, y) {
            return x * y;
        },
        'qjTGs': function (x, y) {
            return x ^ y;
        },
        'UejRV': function (x, y) {
            return x == y;
        }
    };
    let t = input['split']('\x0a')[0x0], n, a = new Array(n), s = new Array(n), x = 0x0;
    for (let i = 0x0; NOrzTA['auWxv'](i, t); i++) {
        n = input['split']('\x0a')[NOrzTA['FsHgn'](i, 0x3) + 0x1];
        a = input['split']('\x0a')[i * 0x3 + 0x2]['split']('\x20');
        s = input['split']('\x0a')[NOrzTA['BgPbo'](NOrzTA['YgyNt'](i, 0x3), 0x3)]['split']('');
        let tmp;
        for (let j = 0x0; NOrzTA['auWxv'](j, n); j++) {
            tmp = NOrzTA['qjTGs'](x, a[j]);
            if (s[j] == 0x0) {
                if (tmp == 0x0)
                    x = tmp;
            } else
                x = tmp;
        }
        if (NOrzTA['UejRV'](x, 0x0)) {
            console['log'](0x0);
        } else
            console['log'](0x1);
        x = 0x0;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));