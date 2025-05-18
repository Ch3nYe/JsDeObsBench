function Main(input) {
    var IxYalz = {
        'kKhRN': function (x, y) {
            return x + y;
        },
        'pHvIT': function (x, y) {
            return x < y;
        },
        'CwwVI': function (x, y) {
            return x === y;
        }
    };
    input = input['split']('\x0a');
    var [n, q] = input[0x0]['split']('\x20')['map'](a => parseInt(a, 0xa));
    var colors = input[0x1]['split']('\x20');
    for (var i = 0x0; i < q; i++) {
        var [start, end] = input[IxYalz['kKhRN'](i, 0x2)]['split']('\x20')['map'](a => parseInt(a, 0xa));
        var cs = [];
        for (var j = start - 0x1; IxYalz['pHvIT'](j, end); j++) {
            var color = colors[j];
            if (IxYalz['CwwVI'](cs['indexOf'](color), -0x1)) {
                cs['push'](color);
            }
        }
        console['log'](cs['length']);
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));