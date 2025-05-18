function saiki(str, flag) {
    var TDOFWQ = {
        'OdFUP': function (x, y) {
            return x / y;
        },
        'jloHF': function (x, y) {
            return x + y;
        }
    };
    while (!![]) {
        if (/\[{2}\d.*?\]{2}/['test'](str)) {
            str = str['replace'](/\[{2}\d.*?\]{2}/, function (s) {
                var d = s['slice'](0x2, -0x2)['split']('][')['map'](Number);
                d['sort']((a, b) => a - b);
                var sum = 0x0;
                for (var i = 0x0; i < Math['ceil'](d['length'] / 0x2); i++) {
                    if (flag)
                        sum += Math['floor'](TDOFWQ['OdFUP'](d[i], 0x2)) + 0x1;
                    else
                        sum += Math['floor'](d[i]);
                }
                return TDOFWQ['jloHF']('(', sum) + ')';
            });
        } else
            break;
    }
    str = str['replace'](/\(/g, '[');
    str = str['replace'](/\)/g, ']');
    return str;
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
var n = arr['shift']() - 0x0;
arr['forEach'](str => {
    var GqbZYm = {
        'SZbDQ': function (callee, param1, param2) {
            return callee(param1, param2);
        }
    };
    str = GqbZYm['SZbDQ'](saiki, str, !![]);
    while (/\[\[/['test'](str))
        str = GqbZYm['SZbDQ'](saiki, str, ![]);
    console['log'](str['replace'](/\[|\]/g, ''));
});