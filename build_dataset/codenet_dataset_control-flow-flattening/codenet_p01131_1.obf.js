var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var AL = Arr['shift']();
var abc = [
    '',
    '.,!?\x20',
    'abc',
    'def',
    'ghi',
    'jkl',
    'mno',
    'pqrs',
    'tuv',
    'wxyz'
];
abc = abc['map'](function (v) {
    return v['split']('');
});
for (var i = 0x0; i < AL; i++) {
    var tLENjw = '2|4|5|1|3|0'['split']('|');
    var qXqONN = 0x0;
    while (!![]) {
        switch (tLENjw[qXqONN++]) {
        case '0':
            console['log'](str);
            continue;
        case '1':
            var n = -0x1;
            continue;
        case '2':
            var arr = Arr[i]['split']('')['map'](Number);
            continue;
        case '3':
            arr['forEach'](function (v) {
                var xlEaWD = {
                    'urSZH': function (x, y) {
                        return x > y;
                    },
                    'pCEuV': function (x, y) {
                        return x % y;
                    }
                };
                if (xlEaWD['urSZH'](v, 0x0)) {
                    n++;
                    a = abc[v][xlEaWD['pCEuV'](n, abc[v]['length'])];
                } else {
                    str += a;
                    n = -0x1;
                    a = '';
                }
            });
            continue;
        case '4':
            var str = '';
            continue;
        case '5':
            var a = '';
            continue;
        }
        break;
    }
}