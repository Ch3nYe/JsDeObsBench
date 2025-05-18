function myout(text) {
    console['log'](text);
}
function Main(input) {
    var OPJGtc = {
        'pCjyW': function (callee, param1) {
            return callee(param1);
        },
        'XOgMQ': function (x, y) {
            return x <= y;
        },
        'jTJBf': function (x, y) {
            return x * y;
        },
        'vVcfy': function (x, y) {
            return x < y;
        },
        'IWKHT': function (callee, param1) {
            return callee(param1);
        }
    };
    input = OPJGtc['pCjyW'](parseInt, input);
    var output = 0x3b9aca00;
    for (var i = 0x1; OPJGtc['XOgMQ'](i, 0xa); i++) {
        var tmp = OPJGtc['jTJBf'](input, i)['toString']()['split']('')['map'](a => Number(a));
        var check = 0x0;
        for (var j = 0x0; OPJGtc['vVcfy'](j, tmp['length']); j++) {
            check += tmp[j];
        }
        output = Math['min'](output, check);
    }
    OPJGtc['IWKHT'](myout, output);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']());