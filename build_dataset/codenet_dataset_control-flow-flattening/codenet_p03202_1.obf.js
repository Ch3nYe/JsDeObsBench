'use strict';
function main(input) {
    const OoxuEg = {
        'jVvsw': function (x, y) {
            return x < y;
        },
        'lisiC': function (x, y) {
            return x - y;
        },
        'dqWLz': function (x, y) {
            return x + y;
        },
        'BJIwN': function (x, y) {
            return x - y;
        },
        'tNeas': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'rtaPp': function (callee, param1) {
            return callee(param1);
        },
        'KhmMY': function (x, y) {
            return x + y;
        },
        'mccAu': function (x, y) {
            return x > y;
        },
        'EnJFC': function (x, y) {
            return x - y;
        },
        'lhxzH': function (x, y) {
            return x === y;
        },
        'KcZPu': function (x, y) {
            return x + y;
        }
    };
    const inputs = input['split']('\x0a')['filter'](x => x !== '');
    const n = inputs[0x0];
    const a = inputs[0x1]['split']('\x20')['map'](x => Number(x));
    let result = 0x1;
    while (OoxuEg['lhxzH'](OoxuEg['tNeas'](testN, result, a), ![])) {
        result = OoxuEg['KcZPu'](result, 0x1);
    }
    console['log'](result);
    function testN(n, a) {
        let current = '0'['repeat'](a[0x0]);
        for (let i = 0x1; OoxuEg['jVvsw'](i, a['length']); i++) {
            if (OoxuEg['jVvsw'](a[OoxuEg['lisiC'](i, 0x1)], a[i])) {
                current = OoxuEg['dqWLz'](current, '0'['repeat'](OoxuEg['BJIwN'](a[i], a[i - 0x1])));
            } else {
                current = OoxuEg['dqWLz'](OoxuEg['tNeas'](parseInt, current['substring'](0x0, a[i]), n), 0x1);
                if (OoxuEg['rtaPp'](isNaN, current)) {
                    return ![];
                }
                current = OoxuEg['KhmMY']('', current);
                if (OoxuEg['mccAu'](current['length'], a[i])) {
                    return ![];
                } else {
                    current = OoxuEg['KhmMY']('0'['repeat'](OoxuEg['EnJFC'](a[i], current['length'])), current);
                }
            }
        }
        return !![];
    }
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));