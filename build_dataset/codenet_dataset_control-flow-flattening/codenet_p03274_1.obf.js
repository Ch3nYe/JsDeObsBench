function get_run_length(min, max) {
    var JIvZvi = {
        'GHcDz': function (x, y) {
            return x >= y;
        },
        'TmhWp': function (x, y) {
            return x <= y;
        },
        'jeJha': function (x, y) {
            return x > y;
        },
        'ipaWO': function (x, y) {
            return x + y;
        },
        'ummVQ': function (x, y) {
            return x + y;
        },
        'fbpSv': function (x, y) {
            return x * y;
        }
    };
    var zsLEit = '1|4|0|3|2'['split']('|');
    var oaXnNb = 0x0;
    while (!![]) {
        switch (zsLEit[oaXnNb++]) {
        case '0':
            if (JIvZvi['GHcDz'](min, 0x0)) {
                result = max;
            }
            continue;
        case '1':
            var result = 0x0;
            continue;
        case '2':
            return result;
        case '3':
            if (JIvZvi['TmhWp'](max, 0x0)) {
                result = Math['abs'](min);
            }
            continue;
        case '4':
            if (JIvZvi['jeJha'](max, Math['abs'](min))) {
                result = JIvZvi['ipaWO'](Math['abs'](min * 0x2), max);
            } else {
                result = JIvZvi['ummVQ'](Math['abs'](min), JIvZvi['fbpSv'](max, 0x2));
            }
            continue;
        }
        break;
    }
}
function main(input) {
    var FnUxvW = {
        'NMveX': function (callee, param1) {
            return callee(param1);
        },
        'VpthT': function (x, y) {
            return x < y;
        },
        'yxlZZ': function (x, y) {
            return x - y;
        },
        'XmAza': function (x, y) {
            return x + y;
        },
        'lSlJg': function (callee, param1, param2) {
            return callee(param1, param2);
        }
    };
    const lines = input['split']('\x0a');
    const N = FnUxvW['NMveX'](parseInt, lines[0x0]['split']('\x20')[0x0]);
    const K = parseInt(lines[0x0]['split']('\x20')[0x1]);
    const Xs = lines[0x1]['split']('\x20')['map'](x => parseInt(x));
    var result = 0x989680;
    for (var i = 0x0; FnUxvW['VpthT'](i, N - K + 0x1); i++) {
        var min = Xs[i];
        var max = Xs[FnUxvW['yxlZZ'](FnUxvW['XmAza'](i, K), 0x1)];
        var tmp = FnUxvW['lSlJg'](get_run_length, min, max);
        result = Math['min'](tmp, result);
    }
    console['log'](result);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));