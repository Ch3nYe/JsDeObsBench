function Main(input) {
    var fsFQqd = {
        'wQniM': function (callee, param1) {
            return callee(param1);
        },
        'MYHho': 'IMPOSSIBLE',
        'dnyJO': function (x, y) {
            return x < y;
        },
        'GJbmd': function (x, y) {
            return x != y;
        },
        'lvCvV': 'POSSIBLE',
        'eLInZ': function (x, y) {
            return x == y;
        }
    };
    input = input['split']('\x0a');
    var n = fsFQqd['wQniM'](parseInt, input[0x0]['split']('\x20')[0x0]);
    var m = parseInt(input[0x0]['split']('\x20')[0x1]);
    x = new Array();
    var ans = fsFQqd['MYHho'];
    for (i = 0x0; fsFQqd['dnyJO'](i, m); i++) {
        tmp = input[i + 0x1]['split']('\x20');
        if (tmp[0x0] == 0x1) {
            if (fsFQqd['GJbmd'](x['indexOf'](tmp[0x1]), -0x1)) {
                ans = fsFQqd['lvCvV'];
                break;
            } else {
                x['push'](tmp[0x1]);
            }
        }
        if (fsFQqd['eLInZ'](tmp[0x1], n)) {
            if (x['indexOf'](tmp[0x0]) != -0x1) {
                ans = fsFQqd['lvCvV'];
                break;
            } else {
                x['push'](tmp[0x0]);
            }
        }
    }
    console['log']('%s', ans);
}
function debug() {
    var input = document['getElementById']('input')['value'];
    Main(input);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));