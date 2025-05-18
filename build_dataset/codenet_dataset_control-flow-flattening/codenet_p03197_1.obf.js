function Main(input) {
    var zoSsSg = {
        'whhxa': function (x, y) {
            return x == y;
        },
        'kDXxw': function (x, y) {
            return x % y;
        },
        'ndSeC': 'first',
        'nVKcT': 'second'
    };
    input = input['split']('\x0a')['map'](Number);
    input['shift']();
    var n = arrsum(input);
    if (zoSsSg['whhxa'](n, input['length'])) {
        n = 0x1;
    }
    if (zoSsSg['whhxa'](zoSsSg['kDXxw'](n, 0x2), 0x1)) {
        console['log'](zoSsSg['ndSeC']);
    } else {
        console['log'](zoSsSg['nVKcT']);
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']());
function arrsum(arr) {
    var tKlzYr = {
        'uSFqb': function (x, y) {
            return x < y;
        }
    };
    var sum = 0x0;
    for (var i = 0x0, len = arr['length']; tKlzYr['uSFqb'](i, len); ++i) {
        sum += arr[i];
    }
    ;
    return sum;
}