const input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
(input => {
    const gSpKrs = {
        'UQcWw': function (x, y) {
            return x === y;
        },
        'qNCHY': function (x, y) {
            return x - y;
        },
        'ZKZyz': function (x, y) {
            return x < y;
        },
        'zooAl': function (x, y) {
            return x + y;
        },
        'OCKqR': function (x, y) {
            return x !== y;
        },
        'vgkeZ': function (x, y) {
            return x >= y;
        }
    };
    const rows = input['split']('\x0a');
    const [N, M, Q] = rows[0x0]['split']('\x20')['map'](Number);
    const A = [];
    for (let i = 0x0; gSpKrs['ZKZyz'](i, Q); i++) {
        A[i] = rows[gSpKrs['zooAl'](i, 0x1)]['split']('\x20')['map'](Number);
    }
    const ss = [];
    const s = [];
    let d = 0x0;
    let v = 0x0;
    while (gSpKrs['OCKqR'](v, undefined)) {
        if (d === N) {
            ss['push']([...s]);
            s['pop']();
            v++;
            d--;
        } else if (gSpKrs['vgkeZ'](v, M)) {
            v = s['pop']();
            d--;
        } else {
            s['push'](gSpKrs['zooAl'](v, 0x1));
            d++;
        }
    }
    let res = 0x0;
    ss['forEach'](s => {
        const OLRsYs = {
            'AcjJV': function (x, y) {
                return gSpKrs['UQcWw'](x, y);
            },
            'YtbWY': function (x, y) {
                return gSpKrs['qNCHY'](x, y);
            },
            'LJiwS': function (x, y) {
                return x - y;
            }
        };
        let sum = 0x0;
        A['forEach'](a => {
            if (OLRsYs['AcjJV'](OLRsYs['YtbWY'](s[OLRsYs['LJiwS'](a[0x1], 0x1)], s[OLRsYs['LJiwS'](a[0x0], 0x1)]), a[0x2])) {
                sum += a[0x3];
            }
        });
        res = Math['max'](res, sum);
    });
    console['log'](res);
})(input);