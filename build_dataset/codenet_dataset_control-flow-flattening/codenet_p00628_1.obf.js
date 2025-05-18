var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['replace'](/\n$/, '')['split']('\x0a');
while (!![]) {
    var str = Arr['shift']();
    if (str == 'END\x20OF\x20INPUT')
        break;
    var arr = str['split']('\x20');
    arr['forEach'](function (v, i) {
        arr[i] = v['length'];
    });
    console['log'](arr['join'](''));
}