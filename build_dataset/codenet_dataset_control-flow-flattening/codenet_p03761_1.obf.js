function main(input) {
    var HjcgVi = {
        'uvnDN': '8|5|4|7|0|2|1|3|6',
        'TSOMo': function (x, y) {
            return x <= y;
        },
        'UWgGb': function (x, y) {
            return x < y;
        },
        'OQIRF': function (x, y) {
            return x + y;
        },
        'uRAzx': function (x, y) {
            return x - y;
        }
    };
    var sYRRqh = HjcgVi['uvnDN']['split']('|');
    var aYmxlS = 0x0;
    while (!![]) {
        switch (sYRRqh[aYmxlS++]) {
        case '0':
            var keys = Object['keys'](ansmap)['sort']((a, b) => a > b ? 0x1 : -0x1);
            continue;
        case '1':
            var ans = '';
            continue;
        case '2':
            for (var i = 0x0; i < n; i++) {
                var list = lists[i];
                for (var j = 0x0; j < keys['length']; j++) {
                    ansmap[keys[j]] = Math['min'](ansmap[keys[j]], list[keys[j]] || 0x0);
                }
            }
            continue;
        case '3':
            keys['forEach'](key => {
                for (var i = 0x0; i < ansmap[key]; i++)
                    ans += key;
            });
            continue;
        case '4':
            var ansmap = {};
            continue;
        case '5':
            var lists = [];
            continue;
        case '6':
            console['log'](ans);
            continue;
        case '7':
            for (var i = 0x1; HjcgVi['TSOMo'](i, n); i++) {
                var str = input[i];
                var map = {};
                for (var j = 0x0; HjcgVi['UWgGb'](j, str['length']); j++) {
                    map[str[j]] = map[str[j]] ? HjcgVi['OQIRF'](map[str[j]], 0x1) : 0x1;
                    ansmap[str[j]] = 0x3c;
                }
                lists['push'](map);
            }
            continue;
        case '8':
            var n = HjcgVi['uRAzx'](input[0x0], 0x0);
            continue;
        }
        break;
    }
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split']('\x0a'));