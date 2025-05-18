function Main(input) {
    var fOdAxQ = {
        'hsxZJ': function (callee, param1) {
            return callee(param1);
        },
        'xclrh': function (x, y) {
            return x != y;
        },
        'fSEop': function (x, y) {
            return x == y;
        },
        'jtchl': function (x, y) {
            return x * y;
        },
        'lwpPy': function (x, y) {
            return x >= y;
        },
        'SuGZS': function (x, y) {
            return x + y;
        }
    };
    input = input['split']('\x0a');
    var n = fOdAxQ['hsxZJ'](Number, input[0x0]);
    var ans = 0x0;
    for (var i = Math['min'](input[0x1]['length'], input[0x2]['length']); fOdAxQ['xclrh'](i, 0x0); i--) {
        if (fOdAxQ['fSEop'](input[0x1]['substr'](fOdAxQ['jtchl'](-0x1, i)), input[0x2]['substr'](0x0, i)) && fOdAxQ['lwpPy'](fOdAxQ['SuGZS'](input[0x1]['length'], input[0x2]['length']) - i, n)) {
            ans = i;
            break;
        }
    }
    console['log'](fOdAxQ['SuGZS'](input[0x1]['substr'](0x0, input[0x1]['length'] - ans), input[0x2])['length']);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']());