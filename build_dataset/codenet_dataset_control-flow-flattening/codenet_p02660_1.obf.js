function Main(input) {
    var Gvdbmo = {
        'YVjih': function (callee, param1) {
            return callee(param1);
        },
        'yRSIZ': function (x, y) {
            return x < y;
        },
        'IflmN': function (x, y) {
            return x == y;
        },
        'MTveL': function (x, y) {
            return x / y;
        }
    };
    input = input['split']('\x0a');
    var N = Gvdbmo['YVjih'](parseInt, input[0x0]);
    var ans = 0x0;
    var set = new Set();
    var N2 = N;
    for (var i = 0x2; i < Math['sqrt'](N); i++) {
        var x = i;
        for (var j = 0x1; Gvdbmo['yRSIZ'](x, N); j++) {
            if (Gvdbmo['IflmN'](N2 % Math['pow'](i, j), 0x0)) {
                ans++;
                N2 = Gvdbmo['MTveL'](N2, Math['pow'](i, j));
            } else {
                break;
            }
            x = Math['pow'](i, j + 0x1);
        }
    }
    if (Gvdbmo['IflmN'](ans, 0x0) && N != 0x1) {
        ans = 0x1;
    }
    console['log']('%s', ans);
    return ans;
}
function debug(n) {
    var nFyRDY = {
        'ElTAf': function (x, y) {
            return x + y;
        },
        'uthHT': function (x, y) {
            return x + y;
        },
        'qcenO': 'output',
        'XLMcy': function (callee, param1) {
            return callee(param1);
        },
        'PHACk': function (x, y) {
            return x + y;
        }
    };
    var kdAUXp = '4|3|2|1|0'['split']('|');
    var GSCuiZ = 0x0;
    while (!![]) {
        switch (kdAUXp[GSCuiZ++]) {
        case '0':
            document['getElementById'](nFyRDY['ElTAf']('result', n))['innerHTML'] = result;
            continue;
        case '1':
            if (ans == document['getElementById'](nFyRDY['uthHT'](nFyRDY['qcenO'], n))['value']['split']('\x0a')[0x0]) {
                result = 'AC';
            }
            continue;
        case '2':
            var result = 'WA';
            continue;
        case '3':
            var ans = nFyRDY['XLMcy'](Main, input);
            continue;
        case '4':
            var input = document['getElementById'](nFyRDY['PHACk']('input', n))['value'];
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));