const main = input => {
    const wmkIhv = {
        'fxAFu': function (x, y) {
            return x < y;
        },
        'vWCbO': function (x, y) {
            return x > y;
        },
        'kDxTO': function (x, y) {
            return x + y;
        },
        'VGyZy': function (x, y) {
            return x * y;
        }
    };
    const data = input['split'](/\n/);
    const num = data[0x0];
    const hoge = data[0x1]['split'](/\s/)['map'](a => parseInt(a, 0xa))['sort']((a, b) => {
        if (wmkIhv['fxAFu'](a, b))
            return 0x1;
        if (wmkIhv['vWCbO'](a, b))
            return -0x1;
        return 0x0;
    });
    var res = 0x0;
    for (i = 0x0; wmkIhv['fxAFu'](i, num); i++) {
        res += hoge[wmkIhv['kDxTO'](wmkIhv['VGyZy'](i, 0x2), 0x1)];
    }
    console['log'](res);
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));