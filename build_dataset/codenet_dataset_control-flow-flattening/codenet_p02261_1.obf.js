'use strict';
const main = input => {
    const hUWUYU = {
        'PbYZs': function (callee, param1) {
            return callee(param1);
        },
        'BITFV': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'rATPP': 'Stable',
        'PQCGQ': function (callee, param1, param2) {
            return callee(param1, param2);
        }
    };
    input = input['split']('\x0a');
    const N = hUWUYU['PbYZs'](Number, input[0x0]);
    const A1 = input[0x1]['split']('\x20');
    const A2 = A1['concat']();
    hUWUYU['BITFV'](bubbleSort, A1, N);
    console['log'](A1['join']('\x20'));
    console['log'](hUWUYU['rATPP']);
    hUWUYU['PQCGQ'](selectionSort, A2, N);
    console['log'](A2['join']('\x20'));
    console['log'](A2['every']((v, i) => v === A1[i]) ? hUWUYU['rATPP'] : 'Not\x20stable');
};
function bubbleSort(A, N) {
    const xabOht = {
        'ODWsq': function (x, y) {
            return x - y;
        },
        'SxBys': function (x, y) {
            return x - y;
        },
        'XbUHd': function (x, y) {
            return x >= y;
        },
        'aHTod': function (callee, param1) {
            return callee(param1);
        },
        'mJASZ': function (x, y) {
            return x - y;
        },
        'FhMIU': function (x, y) {
            return x - y;
        },
        'kXifL': function (x, y) {
            return x - y;
        }
    };
    for (let i = 0x0; i < xabOht['ODWsq'](N, 0x1); ++i) {
        for (let j = xabOht['SxBys'](N, 0x1); xabOht['XbUHd'](j, i + 0x1); --j) {
            if (xabOht['aHTod'](Number, A[xabOht['mJASZ'](j, 0x1)][0x1]) > xabOht['aHTod'](Number, A[j][0x1])) {
                const tmp = A[j];
                A[j] = A[xabOht['FhMIU'](j, 0x1)];
                A[xabOht['kXifL'](j, 0x1)] = tmp;
            }
        }
    }
}
function selectionSort(A, N) {
    const TtLDdS = {
        'mYMVn': function (x, y) {
            return x < y;
        },
        'nOGDG': function (x, y) {
            return x - y;
        },
        'zSRbO': function (x, y) {
            return x < y;
        },
        'nbYJm': function (x, y) {
            return x < y;
        },
        'SrLzN': function (callee, param1) {
            return callee(param1);
        },
        'zQigz': function (x, y) {
            return x !== y;
        }
    };
    for (let i = 0x0; TtLDdS['mYMVn'](i, TtLDdS['nOGDG'](N, 0x1)); ++i) {
        let minj = i;
        for (let j = i; TtLDdS['zSRbO'](j, N); ++j) {
            if (TtLDdS['nbYJm'](TtLDdS['SrLzN'](Number, A[j][0x1]), Number(A[minj][0x1]))) {
                minj = j;
            }
        }
        if (TtLDdS['zQigz'](i, minj)) {
            const tmp = A[i];
            A[i] = A[minj];
            A[minj] = tmp;
        }
    }
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));