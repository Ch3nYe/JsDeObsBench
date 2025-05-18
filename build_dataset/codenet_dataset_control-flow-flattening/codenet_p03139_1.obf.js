function main(input) {
    var RVbqfj = {
        'PNKCK': function (x, y) {
            return x < y;
        },
        'uXXbd': function (x, y) {
            return x - y;
        },
        'tSgOw': function (x, y) {
            return x + y;
        }
    };
    input = input['split']('\x20');
    var max = RVbqfj['PNKCK'](input[0x1], input[0x2]) ? input[0x1] : input[0x2];
    var min = RVbqfj['uXXbd'](input[0x0], input[0x1]) > input[0x2] ? 0x0 : RVbqfj['uXXbd'](input[0x2], RVbqfj['uXXbd'](input[0x0], input[0x1]));
    console['log'](RVbqfj['tSgOw'](RVbqfj['tSgOw'](max, '\x20'), min));
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));