function main(input) {
    const bMwxfz = {
        'CEUiM': function (x, y) {
            return x < y;
        },
        'MrmNe': function (callee, param1) {
            return callee(param1);
        },
        'zVHZT': function (x, y) {
            return x + y;
        },
        'DFAGy': function (x, y) {
            return x + y;
        },
        'QpxDs': function (callee, param1, param2, param3) {
            return callee(param1, param2, param3);
        },
        'hSBFD': function (callee, param1) {
            return callee(param1);
        },
        'yZdTz': function (callee, param1) {
            return callee(param1);
        }
    };
    const lines = input['trim']()['split']('\x0a');
    const [N, M, X] = bMwxfz['MrmNe'](splitN, lines[0x0]);
    const costs = [];
    const options = [...bMwxfz['hSBFD'](Array, N)['keys']()];
    bMwxfz['yZdTz'](select, options);
    function select(options, cost = 0x0, aList = []) {
        for (let i = 0x0; bMwxfz['CEUiM'](i, options['length']); i++) {
            const _options = [...options], [s] = _options['splice'](i, 0x1), [c, ...a] = bMwxfz['MrmNe'](splitN, lines[bMwxfz['zVHZT'](s, 0x1)]), _cost = bMwxfz['DFAGy'](cost, c), _aList = a['map']((v, i) => v + (aList[i] || 0x0));
            if (_aList['every'](v => v >= X)) {
                costs['push'](_cost);
                continue;
            }
            bMwxfz['QpxDs'](select, _options, _cost, _aList);
        }
    }
    console['log'](costs['length'] ? Math['min'](...costs) : -0x1);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function splitN(s) {
    return s['split']('\x20')['map'](Number);
}