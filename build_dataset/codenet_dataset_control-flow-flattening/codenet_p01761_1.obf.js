var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
var n = arr['shift']() - 0x0;
var book = [];
for (var i = 0x0; i < n; i++)
    book[i] = arr['shift']();
var q = arr['shift']() - 0x0;
for (var i = 0x0; i < q; i++) {
    var VjyNcy = '6|8|7|0|2|4|3|5|1'['split']('|');
    var JpmkWp = 0x0;
    while (!![]) {
        switch (VjyNcy[JpmkWp++]) {
        case '0':
            var a = v[0x0];
            continue;
        case '1':
            ans['forEach'](function (value) {
                console['log'](value);
            });
            continue;
        case '2':
            var b = v[0x1];
            continue;
        case '3':
            var d = v[0x3] != '*' ? new Date(v[0x3])['getTime']() : '*';
            continue;
        case '4':
            var c = v[0x2] != '*' ? new Date(v[0x2])['getTime']() : '*';
            continue;
        case '5':
            book['forEach'](function (V) {
                var JpKKLw = {
                    'YvjSa': function (x, y) {
                        return x != y;
                    },
                    'jcjgX': function (x, y) {
                        return x < y;
                    },
                    'ostnR': function (x, y) {
                        return x != y;
                    },
                    'xQPLa': function (x, y) {
                        return x == y;
                    },
                    'yHkIr': function (x, y) {
                        return x == y;
                    }
                };
                var HSzTfB = '5|2|8|7|6|4|9|1|3|0'['split']('|');
                var EYvTRM = 0x0;
                while (!![]) {
                    switch (HSzTfB[EYvTRM++]) {
                    case '0':
                        if (flag)
                            ans['push'](A);
                        continue;
                    case '1':
                        if (c != '*') {
                            if (c > C)
                                flag = ![];
                        }
                        continue;
                    case '2':
                        var A = V[0x0];
                        continue;
                    case '3':
                        if (JpKKLw['YvjSa'](d, '*')) {
                            if (JpKKLw['jcjgX'](d, C))
                                flag = ![];
                        }
                        continue;
                    case '4':
                        if (JpKKLw['ostnR'](a, '*')) {
                            var regex = new RegExp(a);
                            if (JpKKLw['xQPLa'](regex['test'](A), ![]))
                                flag = ![];
                        }
                        continue;
                    case '5':
                        V = V['split']('\x20');
                        continue;
                    case '6':
                        var flag = !![];
                        continue;
                    case '7':
                        var C = new Date(V[0x2])['getTime']();
                        continue;
                    case '8':
                        var B = V[0x1];
                        continue;
                    case '9':
                        if (JpKKLw['ostnR'](b, '*')) {
                            var regex = new RegExp(b);
                            if (JpKKLw['yHkIr'](regex['test'](B), ![]))
                                flag = ![];
                        }
                        continue;
                    }
                    break;
                }
            });
            continue;
        case '6':
            if (i != 0x0)
                console['log']('');
            continue;
        case '7':
            var v = arr['shift']()['split']('\x20');
            continue;
        case '8':
            var ans = [];
            continue;
        }
        break;
    }
}