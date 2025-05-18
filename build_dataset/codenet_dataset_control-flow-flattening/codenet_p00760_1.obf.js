const input = require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']();
const lines = input['trim']()['split']('\x0a');
const nextDay = (y, m, d) => {
    const OcJkBn = {
        'hCIRw': function (x, y) {
            return x + y;
        },
        'ehaNs': function (x, y) {
            return x % y;
        },
        'LNBZF': function (x, y) {
            return x > y;
        },
        'uMGjm': function (x, y) {
            return x === y;
        },
        'ezflT': function (x, y) {
            return x > y;
        },
        'foLxp': function (x, y) {
            return x % y;
        }
    };
    d = OcJkBn['hCIRw'](d, 0x1);
    if (OcJkBn['ehaNs'](y, 0x3) === 0x0) {
        if (OcJkBn['LNBZF'](d, 0x14)) {
            d = 0x1;
            m += 0x1;
            if (OcJkBn['uMGjm'](m, 0xb)) {
                m = 0x1;
                y++;
            }
        }
    } else {
        if (OcJkBn['ezflT'](d, 0x14)) {
            d = 0x1;
            m += 0x1;
            if (OcJkBn['uMGjm'](m, 0xb)) {
                m = 0x1;
                y++;
            }
        } else if (OcJkBn['LNBZF'](d, 0x13) && OcJkBn['uMGjm'](OcJkBn['foLxp'](m, 0x2), 0x0)) {
            d = 0x1;
            m += 0x1;
            if (OcJkBn['uMGjm'](m, 0xb)) {
                m = 0x1;
                y++;
            }
        }
    }
    return [
        y,
        m,
        d
    ];
};
lines['shift']();
lines['forEach'](line => {
    const SjxyjZ = {
        'VvmJM': function (x, y) {
            return x !== y;
        },
        'lCqgN': function (x, y) {
            return x !== y;
        }
    };
    let [y, m, d] = line['trim']()['split']('\x20')['map'](Number);
    let count = 0x1;
    while (SjxyjZ['VvmJM'](y, 0x3e8) || SjxyjZ['lCqgN'](m, 0x1) || d !== 0x1) {
        [y, m, d] = nextDay(y, m, d);
        count++;
    }
    console['log'](count - 0x1);
});