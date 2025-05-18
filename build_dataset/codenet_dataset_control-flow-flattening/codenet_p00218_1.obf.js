process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
var input = '';
process['stdin']['on']('data', function (chunk) {
    input += chunk;
});
process['stdin']['on']('end', function () {
    var kBAWEi = {
        'MMYVj': function (callee, param1) {
            return callee(param1);
        },
        'BgJPV': function (x, y) {
            return x === y;
        },
        'elyPt': function (x, y) {
            return x >= y;
        },
        'yhcTd': function (x, y) {
            return x / y;
        },
        'nXPul': function (x, y) {
            return x + y;
        },
        'AdAqw': function (x, y) {
            return x + y;
        },
        'nJKdA': function (x, y) {
            return x + y;
        },
        'IFZbl': function (x, y) {
            return x >= y;
        }
    };
    var lines = input['split']('\x0a');
    var l = 0x0;
    while (!![]) {
        var n = kBAWEi['MMYVj'](Number, lines[l++]);
        if (kBAWEi['BgJPV'](n, 0x0)) {
            break;
        }
        for (var i = 0x0; i < n; i++) {
            var VJcbRO = '4|2|6|1|5|0|3'['split']('|');
            var nBJCtX = 0x0;
            while (!![]) {
                switch (VJcbRO[nBJCtX++]) {
                case '0':
                    if (kBAWEi['BgJPV'](pm, 0x64) || kBAWEi['BgJPV'](pe, 0x64) || kBAWEi['BgJPV'](pj, 0x64)) {
                        ans = 'A';
                    } else if (kBAWEi['elyPt'](kBAWEi['yhcTd'](kBAWEi['nXPul'](pm, pe), 0x2), 0x5a)) {
                        ans = 'A';
                    } else {
                        var average = kBAWEi['yhcTd'](kBAWEi['AdAqw'](kBAWEi['nJKdA'](pm, pe), pj), 0x3);
                        if (kBAWEi['IFZbl'](average, 0x50)) {
                            ans = 'A';
                        } else if (average >= 0x46) {
                            ans = 'B';
                        } else if (average >= 0x32 && (pm >= 0x50 || kBAWEi['IFZbl'](pe, 0x50))) {
                            ans = 'B';
                        }
                    }
                    continue;
                case '1':
                    var pj = values[0x2];
                    continue;
                case '2':
                    var pm = values[0x0];
                    continue;
                case '3':
                    console['log'](ans);
                    continue;
                case '4':
                    var values = lines[l++]['split']('\x20')['map'](Number);
                    continue;
                case '5':
                    var ans = 'C';
                    continue;
                case '6':
                    var pe = values[0x1];
                    continue;
                }
                break;
            }
        }
    }
});