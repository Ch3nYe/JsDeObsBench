function BFS(x) {
    var cGsBMN = {
        'qMcHA': function (x, y) {
            return x == y;
        },
        'eidQY': function (x, y) {
            return x < y;
        },
        'jSKFV': function (x, y) {
            return x - y;
        },
        'uxHfp': function (x, y) {
            return x + y;
        },
        'fQnuK': function (x, y) {
            return x - y;
        },
        'IzkKG': function (x, y) {
            return x - y;
        },
        'zeMmv': function (x, y) {
            return x + y;
        }
    };
    var obj = {};
    var bfs = [[
            x,
            0x0
        ]];
    obj[x] = !![];
    while (!![]) {
        if (cGsBMN['qMcHA'](bfs['length'], 0x0)) {
            ans = 'NA';
            break;
        }
        var leaf = bfs['shift']();
        var str = leaf[0x0];
        var cnt = leaf[0x1];
        if (/^0+$|^1+$|^2+$/['test'](str)) {
            ans = cnt;
            break;
        }
        for (var i = 0x0; cGsBMN['eidQY'](i, cGsBMN['jSKFV'](str['length'], 0x1)); i++) {
            if (str[i] == str[cGsBMN['uxHfp'](i, 0x1)])
                continue;
            var arr = str['split']('');
            var color = cGsBMN['fQnuK'](cGsBMN['IzkKG'](0x3, +arr[i]), +arr[cGsBMN['zeMmv'](i, 0x1)]);
            arr[i] = color;
            arr[cGsBMN['uxHfp'](i, 0x1)] = color;
            var Str = arr['join']('');
            if (cGsBMN['qMcHA'](obj['hasOwnProperty'](Str), ![])) {
                bfs['push']([
                    Str,
                    cnt + 0x1
                ]);
                obj[Str] = !![];
            }
        }
    }
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var rgb = Arr['shift']();
    if (rgb == '0')
        break;
    rgb = rgb['replace'](/r/g, '0')['replace'](/g/g, '1')['replace'](/b/g, '2');
    var ans;
    BFS(rgb);
    console['log'](ans);
}