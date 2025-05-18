var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var n = Arr['shift']() - 0x0;
for (var I = 0x0; I < n; I++) {
    var lKXfnN = '2|4|1|3|0|5'['split']('|');
    var SJiIYy = 0x0;
    while (!![]) {
        switch (lKXfnN[SJiIYy++]) {
        case '0':
            for (var i = 0x0; i < arr['length']; i++) {
                var vzRNuK = '6|1|0|7|11|9|10|5|2|3|8|4'['split']('|');
                var aQBvJS = 0x0;
                while (!![]) {
                    switch (vzRNuK[aQBvJS++]) {
                    case '0':
                        var a = A['split']('')['reverse']()['join']('');
                        continue;
                    case '1':
                        var B = arr[i][0x1];
                        continue;
                    case '2':
                        obj[B + A] = !![];
                        continue;
                    case '3':
                        obj[B + a] = !![];
                        continue;
                    case '4':
                        obj[b + a] = !![];
                        continue;
                    case '5':
                        obj[a + b] = !![];
                        continue;
                    case '6':
                        var A = arr[i][0x0];
                        continue;
                    case '7':
                        var b = B['split']('')['reverse']()['join']('');
                        continue;
                    case '8':
                        obj[b + A] = !![];
                        continue;
                    case '9':
                        obj[A + b] = !![];
                        continue;
                    case '10':
                        obj[a + B] = !![];
                        continue;
                    case '11':
                        obj[A + B] = !![];
                        continue;
                    }
                    break;
                }
            }
            continue;
        case '1':
            for (var i = 0x1; i < str['length']; i++) {
                arr['push']([
                    str['slice'](0x0, i),
                    str['slice'](i, str['length'])
                ]);
            }
            continue;
        case '2':
            var str = Arr['shift']();
            continue;
        case '3':
            var obj = {};
            continue;
        case '4':
            var arr = [];
            continue;
        case '5':
            console['log'](Object['keys'](obj)['length']);
            continue;
        }
        break;
    }
}