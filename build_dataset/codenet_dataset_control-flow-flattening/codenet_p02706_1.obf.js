const main = inputs => {
    var MNDIwj = {
        'ZcXoj': function (x, y) {
            return x - y;
        },
        'jMrqM': function (x, y) {
            return x < y;
        },
        'toTae': function (x, y) {
            return x + y;
        },
        'HIhwk': function (callee, param1) {
            return callee(param1);
        },
        'kRzJG': function (x, y) {
            return x < y;
        }
    };
    var array = inputs[0x0]['split']('\x20');
    var array2 = inputs[0x1]['split']('\x20');
    var N = MNDIwj['ZcXoj'](array[0x0], 0x0);
    var M = array[0x1] - 0x0;
    var sum = 0x0;
    for (var i = 0x0; MNDIwj['jMrqM'](i, M); i++) {
        sum = MNDIwj['toTae'](sum, MNDIwj['HIhwk'](Number, array2[i]));
    }
    console['log'](MNDIwj['kRzJG'](MNDIwj['ZcXoj'](N, sum), 0x0) ? -0x1 : MNDIwj['ZcXoj'](N, sum));
};
main(require('fs')['readFileSync']('/dev/stdin', 'UTF-8')['trim']()['split']('\x0a'));