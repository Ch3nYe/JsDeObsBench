process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
var input = '';
process['stdin']['on']('data', function (chunk) {
    input += chunk;
});
process['stdin']['on']('end', function () {
    var AfmgrS = {
        'qsdVO': function (callee, param1) {
            return callee(param1);
        },
        'RuTkc': function (x, y) {
            return x === y;
        },
        'Ocqqr': function (x, y) {
            return x < y;
        },
        'WrObr': function (x, y) {
            return x < y;
        }
    };
    var lines = input['split']('\x0a');
    var l = 0x0;
    while (!![]) {
        var n = AfmgrS['qsdVO'](Number, lines[l++]);
        if (AfmgrS['RuTkc'](n, 0x0)) {
            break;
        }
        var sales = [
            0x0,
            0x0,
            0x0,
            0x0,
            0x0,
            0x0,
            0x0,
            0x0,
            0x0,
            0x0
        ];
        for (var i = 0x0; AfmgrS['Ocqqr'](i, n); i++) {
            sales[Number(lines[l++])]++;
        }
        for (var i = 0x0; AfmgrS['WrObr'](i, sales['length']); i++) {
            var bar = AfmgrS['RuTkc'](sales[i], 0x0) ? '-' : '';
            for (var j = 0x0; AfmgrS['WrObr'](j, sales[i]); j++) {
                bar += '*';
            }
            console['log'](bar);
        }
    }
});