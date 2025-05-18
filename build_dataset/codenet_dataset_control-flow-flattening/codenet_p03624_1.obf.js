function main(input) {
    var bVWlVC = {
        'qPgcQ': function (x, y) {
            return x === y;
        },
        'gnuLb': function (x, y) {
            return x < y;
        },
        'FbWUT': 'abcdefghijklmnopqrstuvwxyz',
        'JiaDB': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'DvSFc': 'None'
    };
    const S = input['split']('');
    alphabetList = bVWlVC['FbWUT']['split']('');
    arr = S['filter'](function (x, i, self) {
        return bVWlVC['qPgcQ'](self['indexOf'](x), i);
    })['sort']();
    tmp = bVWlVC['JiaDB'](arrDiff, arr, alphabetList);
    function arrDiff(arr, alphabetList) {
        var ZKcpAv = '5|2|3|4|1|0'['split']('|');
        var UlpGWY = 0x0;
        while (!![]) {
            switch (ZKcpAv[UlpGWY++]) {
            case '0':
                return diff;
            case '1':
                for (var k in a) {
                    diff['push'](k);
                }
                continue;
            case '2':
                var diff = [];
                continue;
            case '3':
                for (var i = 0x0; i < arr['length']; i++) {
                    a[arr[i]] = !![];
                }
                continue;
            case '4':
                for (var i = 0x0; bVWlVC['gnuLb'](i, alphabetList['length']); i++) {
                    if (a[alphabetList[i]]) {
                        delete a[alphabetList[i]];
                    } else {
                        a[alphabetList[i]] = !![];
                    }
                }
                continue;
            case '5':
                var a = [];
                continue;
            }
            break;
        }
    }
    if (tmp['length'] > 0x0) {
        ans = tmp[0x0];
    } else {
        ans = bVWlVC['DvSFc'];
    }
    console['log'](ans);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));