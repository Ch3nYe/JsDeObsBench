'use strict';
function Main(input) {
    const UhzEfM = {
        'ZajRt': function (x, y) {
            return x < y;
        },
        'freiU': function (x, y) {
            return x <= y;
        },
        'yuSGv': function (x, y) {
            return x - y;
        },
        'PTEBN': function (x, y) {
            return x - y;
        }
    };
    let lines = input['split']('\x0a');
    let nmq = lines['shift']()['split'](/\s/)['map'](v => v - 0x0);
    let N = nmq[0x0], M = nmq[0x1], Q = nmq[0x2];
    let T = new Array(N + 0x1)['fill'](0x0)['map'](() => new Array(N + 0x1)['fill'](0x0));
    for (let m = 0x0; UhzEfM['ZajRt'](m, M); m++) {
        let lr = lines['shift']()['split'](/\s/)['map'](v => v - 0x0);
        T[lr[0x0]][lr[0x1]] += 0x1;
    }
    for (let p = 0x1; UhzEfM['freiU'](p, N); p++) {
        for (let q = 0x1; q <= N; q++) {
            T[p][q] += T[p - 0x1][q];
            T[p][q] += T[p][UhzEfM['yuSGv'](q, 0x1)];
            T[p][q] -= T[p - 0x1][UhzEfM['PTEBN'](q, 0x1)];
        }
    }
    for (let n = 0x0; UhzEfM['ZajRt'](n, Q); n++) {
        let pq = lines['shift']()['split'](/\s/)['map'](v => v - 0x0);
        let p = pq[0x0], q = pq[0x1];
        console['log'](UhzEfM['yuSGv'](T[q][q], T[UhzEfM['PTEBN'](p, 0x1)][q]));
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));