function main(input) {
    var Ufkjjj = {
        'kiBNs': '3|5|2|4|0|6|8|1|7',
        'jqZMB': function (x, y) {
            return x == y;
        },
        'VNgDM': function (x, y) {
            return x - y;
        },
        'msLOj': function (x, y) {
            return x == y;
        }
    };
    var GWTQKG = Ufkjjj['kiBNs']['split']('|');
    var ENgzfF = 0x0;
    while (!![]) {
        switch (GWTQKG[ENgzfF++]) {
        case '0':
            var temp = 0x0;
            continue;
        case '1':
            if (Ufkjjj['jqZMB'](temp, 0x1)) {
                ans++;
            }
            continue;
        case '2':
            var ans = 0x0;
            continue;
        case '3':
            input = input['trim']();
            continue;
        case '4':
            if (arr[0x0] == 'A') {
                ans++;
            }
            continue;
        case '5':
            var arr = input['split']('')['map'](n => n);
            continue;
        case '6':
            var memo = 0x0;
            continue;
        case '7':
            if (ans == 0x2) {
                arr['splice'](0x0, 0x1);
                arr['splice'](Ufkjjj['VNgDM'](memo, 0x1), 0x1);
                if (/A-Z/['test'](arr) == ![]) {
                    ans++;
                }
                if (Ufkjjj['msLOj'](ans, 0x3)) {
                    console['log']('AC');
                } else {
                    console['log']('WA');
                }
            } else {
                console['log']('WA');
            }
            continue;
        case '8':
            for (var i = 0x2; i < Ufkjjj['VNgDM'](arr['length'], 0x1); i++) {
                if (Ufkjjj['jqZMB'](arr[i], 'C')) {
                    temp++;
                    memo = i;
                }
            }
            continue;
        }
        break;
    }
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));