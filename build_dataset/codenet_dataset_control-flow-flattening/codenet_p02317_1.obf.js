function main() {
    var DqDdGx = {
        'BhUiw': '4|5|2|3|0|1',
        'rQDzz': function (x, y) {
            return x + y;
        },
        'Ixhmj': function (callee, param1) {
            return callee(param1);
        },
        'GmUys': function (callee, param1) {
            return callee(param1);
        },
        'CFWWc': function (callee) {
            return callee();
        }
    };
    var swgqHo = DqDdGx['BhUiw']['split']('|');
    var wkFMxY = 0x0;
    while (!![]) {
        switch (swgqHo[wkFMxY++]) {
        case '0':
            var nums = ls['slice'](0x1, DqDdGx['rQDzz'](n, 0x1))['map'](function (s) {
                return xfMRUA['ootSk'](parseInt, s);
            });
            continue;
        case '1':
            console['log'](DqDdGx['Ixhmj'](lis, nums));
            continue;
        case '2':
            var ls = input['split']('\x0a');
            continue;
        case '3':
            var n = parseInt(ls[0x0]);
            continue;
        case '4':
            var xfMRUA = {
                'ootSk': function (callee, param1) {
                    return DqDdGx['GmUys'](callee, param1);
                }
            };
            continue;
        case '5':
            var input = DqDdGx['CFWWc'](getInput);
            continue;
        }
        break;
    }
}
function lis(xs) {
    var vaoiRn = {
        'oZcot': function (x, y) {
            return x < y;
        },
        'PXaxW': function (callee, param1, param2) {
            return callee(param1, param2);
        }
    };
    var table = [xs[0x0]];
    for (var i = 0x1; vaoiRn['oZcot'](i, xs['length']); i++) {
        var x = xs[i];
        table[vaoiRn['PXaxW'](search, table, x) + 0x1] = x;
    }
    return table['length'];
}
function search(table, x) {
    var LsJjKp = {
        'KiVeC': function (x, y) {
            return x == y;
        },
        'WaoMk': function (x, y) {
            return x <= y;
        },
        'uOVjM': function (x, y) {
            return x < y;
        },
        'RQTqF': function (x, y) {
            return x / y;
        },
        'iUrFz': function (x, y) {
            return x + y;
        },
        'dhwGV': function (x, y) {
            return x < y;
        }
    };
    var l = 0x0, h = table['length'];
    if (LsJjKp['KiVeC'](table['length'], 0x0) || LsJjKp['WaoMk'](x, table[0x0])) {
        return -0x1;
    }
    while (LsJjKp['uOVjM'](l + 0x1, h)) {
        var pivot = LsJjKp['RQTqF'](LsJjKp['iUrFz'](LsJjKp['iUrFz'](l, h), 0x1), 0x2);
        if (LsJjKp['dhwGV'](table[pivot], x)) {
            l = pivot;
        } else {
            h = pivot;
        }
    }
    return l;
}
nodeJS = typeof require != 'undefined';
function getInput() {
    var qSAhCm = {
        'bjLVt': 'input',
        'nAYuh': function (callee, param1) {
            return callee(param1);
        },
        'ncSam': '/dev/stdin'
    };
    if (!nodeJS) {
        return document['getElementById'](qSAhCm['bjLVt'])['value'];
    }
    return qSAhCm['nAYuh'](require, 'fs')['readFileSync'](qSAhCm['ncSam'])['toString']();
}
if (nodeJS) {
    main();
}