function Main(input) {
    var wvdTco = {
        'hdBDg': function (callee, param1) {
            return callee(param1);
        },
        'JNmaT': function (callee, param1) {
            return callee(param1);
        },
        'PhmlT': function (x, y) {
            return x - y;
        },
        'QhioD': function (callee, param1) {
            return callee(param1);
        },
        'pSUIR': function (x, y) {
            return x - y;
        },
        'APhwl': function (x, y) {
            return x * y;
        },
        'utUlE': function (x, y) {
            return x - y;
        },
        'xBVCQ': function (x, y) {
            return x - y;
        },
        'ZwfRP': function (x, y) {
            return x < y;
        },
        'CxEHr': function (x, y) {
            return x + y;
        },
        'bpWaN': function (callee, param1) {
            return callee(param1);
        },
        'dKuQN': function (x, y) {
            return x - y;
        },
        'AqfIn': function (x, y) {
            return x == y;
        },
        'ooYrV': function (x, y) {
            return x < y;
        }
    };
    input = input['split']('\x0a');
    tmp = input[0x0]['split']('\x20');
    var N = parseInt(tmp[0x0]);
    var Q = wvdTco['hdBDg'](parseInt, tmp[0x1]);
    var minRows = wvdTco['JNmaT'](Array, wvdTco['PhmlT'](N, 0x2));
    var minCols = wvdTco['QhioD'](Array, wvdTco['pSUIR'](N, 0x2));
    minRows['fill'](wvdTco['PhmlT'](N, 0x2));
    minCols['fill'](wvdTco['pSUIR'](N, 0x2));
    var result = wvdTco['QhioD'](BigInt, wvdTco['APhwl'](wvdTco['utUlE'](N, 0x2), wvdTco['xBVCQ'](N, 0x2)));
    for (var i = 0x0; wvdTco['ZwfRP'](i, Q); i++) {
        var query = input[wvdTco['CxEHr'](i, 0x1)]['split']('\x20');
        var q_1 = wvdTco['hdBDg'](parseInt, query[0x0]);
        var q_2 = wvdTco['bpWaN'](parseInt, query[0x1]);
        var myArray = minRows;
        var myArray2 = minCols;
        var index = wvdTco['dKuQN'](q_2, 0x2);
        var closest = minCols[index];
        if (wvdTco['AqfIn'](q_1, 0x1)) {
            myArray = minCols;
            myArray2 = minRows;
            closest = minRows[index];
        }
        result -= wvdTco['QhioD'](BigInt, closest);
        for (var j = 0x0; wvdTco['ooYrV'](j, closest); j++) {
            if (myArray[j] > index)
                myArray[j] = index;
        }
        myArray2[index] = 0x0;
    }
    console['log']('%d', wvdTco['hdBDg'](Number, result));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));