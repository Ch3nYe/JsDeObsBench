function Main(input) {
    var SfBjDJ = {
        'ZMeWx': function (x, y) {
            return x < y;
        },
        'QzLuL': function (x, y) {
            return x - y;
        },
        'chDhg': function (x, y) {
            return x - y;
        },
        'yTuQE': function (x, y) {
            return x == y;
        },
        'BKKTO': function (x, y) {
            return x - y;
        },
        'sXsrX': function (callee, param1) {
            return callee(param1);
        },
        'ChWeT': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'JCGPy': function (x, y) {
            return x / y;
        },
        'ntOuj': function (x, y) {
            return x > y;
        }
    };
    var LGeevw = '9|7|5|6|14|1|12|11|3|4|10|13|2|0|8'['split']('|');
    var AuCnut = 0x0;
    while (!![]) {
        switch (LGeevw[AuCnut++]) {
        case '0':
            for (var i = 0x0; SfBjDJ['ZMeWx'](i, n); ++i) {
                var val = a[i];
                if (SfBjDJ['QzLuL'](val, min) > rieki) {
                    rieki = SfBjDJ['chDhg'](val, min);
                    rieki_place_count = 0x1;
                } else if (SfBjDJ['yTuQE'](SfBjDJ['BKKTO'](val, min), rieki)) {
                    rieki_place_count++;
                }
                min = val < min ? val : min;
            }
            continue;
        case '1':
            var l0 = SfBjDJ['sXsrX'](space_numinput, lines[0x0]);
            continue;
        case '2':
            var max = a[0x0];
            continue;
        case '3':
            var a = space_numinput(lines[0x1]);
            continue;
        case '4':
            var rieki = 0x0;
            continue;
        case '5':
            var space_numinput = function (line) {
                var arr = line['replace'](/(^\s+)|(\s+$)/g, '')['split']('\x20');
                for (var i = 0x0; sjvcMp['wjKjs'](i, arr['length']); ++i) {
                    arr[i] = +arr[i];
                }
                return arr;
            };
            continue;
        case '6':
            var getmin = function (a, b) {
                return sjvcMp['kjJCy'](a, b) ? b : a;
            };
            continue;
        case '7':
            var space_strinput = function (line) {
                var arr = line['replace'](/(^\s+)|(\s+$)/g, '')['split']('\x20');
                for (var i = 0x0; sjvcMp['HlvLJ'](i, arr['length']); ++i) {
                    arr[i] = arr[i];
                }
                return arr;
            };
            continue;
        case '8':
            console['log'](SfBjDJ['ChWeT'](getmin, rieki_place_count, Math['floor'](SfBjDJ['JCGPy'](t, 0x2))));
            continue;
        case '9':
            var sjvcMp = {
                'HlvLJ': function (x, y) {
                    return x < y;
                },
                'wjKjs': function (x, y) {
                    return SfBjDJ['ZMeWx'](x, y);
                },
                'kjJCy': function (x, y) {
                    return SfBjDJ['ntOuj'](x, y);
                }
            };
            continue;
        case '10':
            var rieki_place_count = 0x0;
            continue;
        case '11':
            var t = l0[0x1];
            continue;
        case '12':
            var n = l0[0x0];
            continue;
        case '13':
            var min = a[0x0];
            continue;
        case '14':
            lines = input['split']('\x0a');
            continue;
        }
        break;
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));