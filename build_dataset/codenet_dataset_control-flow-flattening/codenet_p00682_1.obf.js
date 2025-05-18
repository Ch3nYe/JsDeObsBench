process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
process['stdin']['on']('data', function (chunk) {
    var dPCGdZ = {
        'lxMfY': function (x, y) {
            return x == y;
        },
        'nWeAs': function (x, y) {
            return x < y;
        },
        'Xskcs': function (x, y) {
            return x - y;
        },
        'NCAqN': function (x, y) {
            return x * y;
        },
        'hirwj': function (x, y) {
            return x + y;
        }
    };
    var input = chunk['trim']()['split']('\x0a');
    var order = 0x1;
    while (!![]) {
        var n = input['shift']();
        if (dPCGdZ['lxMfY'](n, 0x0))
            break;
        var coordinate = [];
        while (n--)
            coordinate['push'](input['shift']()['split']('\x20')['map'](Number));
        coordinate['push'](coordinate[0x0]);
        var area = 0x0;
        for (var i = 0x0; dPCGdZ['nWeAs'](i, dPCGdZ['Xskcs'](coordinate['length'], 0x1)); i++) {
            area += dPCGdZ['Xskcs'](dPCGdZ['NCAqN'](coordinate[i][0x0], coordinate[dPCGdZ['hirwj'](i, 0x1)][0x1]), dPCGdZ['NCAqN'](coordinate[i][0x1], coordinate[dPCGdZ['hirwj'](i, 0x1)][0x0]));
        }
        console['log'](dPCGdZ['hirwj'](order + '\x20', Math['abs'](area / 0x2)['toFixed'](0x1)));
        input['shift']();
        order++;
    }
});