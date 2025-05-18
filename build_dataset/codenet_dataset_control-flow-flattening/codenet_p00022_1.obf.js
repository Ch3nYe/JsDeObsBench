function main() {
    var TFCfCt = {
        'aHvRp': function (callee) {
            return callee();
        },
        'ugRhT': function (x, y) {
            return x - y;
        },
        'fxPTX': function (x, y) {
            return x < y;
        },
        'qjOMo': function (x, y) {
            return x - y;
        },
        'WsDZw': function (x, y) {
            return x - y;
        },
        'PlfXJ': function (x, y) {
            return x == y;
        },
        'sQJyQ': function (callee, param1) {
            return callee(param1);
        },
        'CuqEY': function (callee, param1, param2) {
            return callee(param1, param2);
        }
    };
    while (0x1) {
        var n = scan();
        if (TFCfCt['PlfXJ'](n, 0x0)) {
            break;
        }
        var x = TFCfCt['sQJyQ'](Array, n);
        TFCfCt['CuqEY'](rep, n, function (i) {
            x[i] = TFCfCt['aHvRp'](scan);
        });
        x[-0x1] = 0x0;
        TFCfCt['CuqEY'](rep, n, function (i) {
            x[i] += x[TFCfCt['ugRhT'](i, 0x1)];
        });
        var a = -Infinity;
        rep(n, function (i) {
            for (var j = i; TFCfCt['fxPTX'](j, n); ++j) {
                a = Math['max'](TFCfCt['qjOMo'](x[j], x[TFCfCt['WsDZw'](i, 0x1)]), a);
            }
        });
        print(a);
    }
}
function rep(n, func) {
    var cuOfQZ = {
        'pawEI': function (x, y) {
            return x < y;
        },
        'CdrxJ': function (callee, param1) {
            return callee(param1);
        }
    };
    for (var i = 0x0; cuOfQZ['pawEI'](i, n); ++i) {
        cuOfQZ['CdrxJ'](func, i);
    }
}
process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
var input = '';
var input_index = 0x0;
function scan(type) {
    if (type === 'string') {
        return input[input_index++];
    } else {
        return +input[input_index++];
    }
}
function print(val) {
    console['log'](val);
}
process['stdin']['on']('data', function (chunk) {
    input += chunk;
});
process['stdin']['on']('end', function () {
    input = input['split'](/\s+/);
    main();
});