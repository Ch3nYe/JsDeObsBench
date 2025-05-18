function main(input) {
    var fYIHig = {
        'FhUPt': '0|1|8|3|7|2|5|4|6',
        'sQxzs': function (callee, param1) {
            return callee(param1);
        },
        'mVbcO': function (x, y) {
            return x < y;
        },
        'ykeKb': function (x, y) {
            return x - y;
        },
        'Xlgqt': function (x, y) {
            return x * y;
        },
        'mjhzB': function (x, y) {
            return x - y;
        },
        'dcMMk': function (x, y) {
            return x + y;
        },
        'OQHrc': function (callee, param1) {
            return callee(param1);
        }
    };
    var MFktaE = fYIHig['FhUPt']['split']('|');
    var LnnxKF = 0x0;
    while (!![]) {
        switch (MFktaE[LnnxKF++]) {
        case '0':
            var lines = input['split']('\x0a');
            continue;
        case '1':
            var line0 = lines[0x0]['split']('\x20');
            continue;
        case '2':
            var x = lines[0x1]['split']('\x20')['map'](t => parseInt(t));
            continue;
        case '3':
            var a = fYIHig['sQxzs'](parseInt, line0[0x1]);
            continue;
        case '4':
            for (var i = 0x0; fYIHig['mVbcO'](i, fYIHig['ykeKb'](n, 0x1)); i++) {
                ans += Math['min'](fYIHig['Xlgqt'](a, fYIHig['mjhzB'](x[fYIHig['dcMMk'](i, 0x1)], x[i])), b);
            }
            continue;
        case '5':
            var ans = 0x0;
            continue;
        case '6':
            console['log'](ans);
            continue;
        case '7':
            var b = fYIHig['OQHrc'](parseInt, line0[0x2]);
            continue;
        case '8':
            var n = parseInt(line0[0x0]);
            continue;
        }
        break;
    }
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));