function Main(input) {
    const AthniD = {
        'OExLg': function (x, y) {
            return x - y;
        },
        'frbUw': function (x, y) {
            return x % y;
        },
        'iMisb': function (x, y) {
            return x + y;
        }
    };
    input = input['split']('\x0a')['map'](v => v['split']('\x20'));
    const [n, q] = input[0x0]['map'](v => +v);
    input['shift']();
    const mod = 0x3b800001;
    const str = new Array(n)['fill'](0x1);
    input['map'](value => {
        const [l, r, d] = [
            AthniD['OExLg'](value[0x0], 0x1),
            AthniD['OExLg'](value[0x1], 0x1),
            +value[0x2]
        ];
        for (let i = l; i <= r; i++) {
            str[i] = d;
        }
        let num = 0x0;
        for (let s = 0x0; s < n; s++) {
            num = AthniD['frbUw'](AthniD['iMisb'](num * 0xa, str[s]), mod);
        }
        console['log'](num);
    });
}
function toInt(v) {
    const qMkSHQ = {
        'DTElZ': function (callee, param1, param2) {
            return callee(param1, param2);
        }
    };
    return qMkSHQ['DTElZ'](parseInt, v, 0xa);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));