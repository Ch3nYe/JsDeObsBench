(function main() {
    const rkMQIP = {
        'WUjAJ': function (x, y) {
            return x == y;
        },
        'qwYDs': function (x, y) {
            return x + y;
        },
        'Zwncc': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'poOSQ': function (x, y) {
            return x - y;
        },
        'wjFwY': function (callee, param1) {
            return callee(param1);
        },
        'puyPI': '/dev/stdin',
        'hxWOX': 'utf8'
    };
    const lines = rkMQIP['wjFwY'](require, 'fs')['readFileSync'](rkMQIP['puyPI'], rkMQIP['hxWOX'])['trim']()['split']('\x0a');
    const n1 = rkMQIP['wjFwY'](Number, lines['shift']());
    const arr1 = lines['shift']()['split']('\x20')['map'](Number);
    const n2 = rkMQIP['wjFwY'](Number, lines['shift']());
    const arr2 = lines['shift']()['split']('\x20')['map'](Number);
    const solve = (i, m) => {
        if (rkMQIP['WUjAJ'](m, 0x0))
            return !![];
        if (i >= n1)
            return ![];
        return solve(rkMQIP['qwYDs'](i, 0x1), m) || rkMQIP['Zwncc'](solve, rkMQIP['qwYDs'](i, 0x1), rkMQIP['poOSQ'](m, arr1[i]));
    };
    arr2['map'](m => solve(0x0, m) ? 'yes' : 'no')['forEach'](res => console['log'](res));
}());