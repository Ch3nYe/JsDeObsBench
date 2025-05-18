function main(input) {
    const FMXjCo = {
        'kekVT': function (x, y) {
            return x / y;
        },
        'aAgKG': function (x, y) {
            return x * y;
        },
        'VcBXt': function (x, y) {
            return x >= y;
        },
        'yNQex': function (x, y) {
            return x | y;
        },
        'zOTtg': function (x, y) {
            return x < y;
        },
        'cUmEW': function (x, y) {
            return x - y;
        },
        'hJiVv': function (x, y) {
            return x | y;
        },
        'hCqpC': function (x, y) {
            return x + y;
        }
    };
    const lines = input['split']('\x0a');
    const K = FMXjCo['yNQex'](0x0, lines[0x0]['split']('\x20')[0x1]);
    let arr = new Int32Array(lines[0x1]['split']('\x20'));
    let isOk = (t = 0x0, k = 0x0) => {
        const XTPtsq = {
            'MPUhn': function (x, y) {
                return FMXjCo['kekVT'](x, y);
            },
            'TbZhr': function (x, y) {
                return FMXjCo['aAgKG'](x, y);
            }
        };
        arr['forEach'](v => {
            let d = 0x0 | XTPtsq['MPUhn'](v, t);
            if (v === XTPtsq['TbZhr'](d, t)) {
                d--;
            }
            k -= d;
        });
        return FMXjCo['VcBXt'](k, 0x0);
    };
    let l = 0x0;
    let r = Math['max'](...arr);
    let mid = FMXjCo['yNQex'](0x0, FMXjCo['aAgKG'](r + l, 0.5));
    let res = r;
    while (FMXjCo['zOTtg'](l, r)) {
        if (isOk(mid, K)) {
            res = mid;
            r = FMXjCo['cUmEW'](mid, 0x1);
        } else {
            l = mid + 0x1;
        }
        mid = FMXjCo['hJiVv'](0x0, FMXjCo['aAgKG'](FMXjCo['hCqpC'](r, l), 0.5));
    }
    return res;
}
exports['main'] = main;
function Main(input) {
    const dlLIYD = {
        'qymGv': function (callee, param1) {
            return callee(param1);
        }
    };
    console['log'](dlLIYD['qymGv'](main, input['trim']()));
}
if (process['argv'][0x2] !== 'test') {
    Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
}