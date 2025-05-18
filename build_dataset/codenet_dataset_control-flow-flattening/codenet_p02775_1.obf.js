function Main(input) {
    var uSZzga = {
        'TykWr': function (x, y) {
            return x === y;
        },
        'wqHvR': function (x, y) {
            return x - y;
        },
        'PlQNN': function (x, y) {
            return x < y;
        },
        'KjGno': function (x, y) {
            return x + y;
        },
        'uKjvD': function (x, y) {
            return x + y;
        },
        'prNdr': function (x, y) {
            return x - y;
        }
    };
    input = input['split']('\x0a');
    if (uSZzga['TykWr'](input[uSZzga['wqHvR'](input['length'], 0x1)], '')) {
        input['pop']();
    }
    const N = input[0x0];
    var up = 0x1;
    var down = 0x0;
    var nup, ndown;
    for (var i = 0x0; uSZzga['PlQNN'](i, N['length']); i++) {
        nup = Math['min'](uSZzga['wqHvR'](0x9, N[i]) + up, uSZzga['KjGno'](uSZzga['uKjvD'](0x1, down), uSZzga['wqHvR'](N[i], 0x0)));
        ndown = Math['min'](uSZzga['prNdr'](0xa, N[i]) + up, down + uSZzga['wqHvR'](N[i], 0x0));
        up = nup;
        down = ndown;
    }
    console['log'](down);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));