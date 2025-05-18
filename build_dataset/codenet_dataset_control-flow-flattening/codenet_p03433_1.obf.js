function main(input) {
    var pQgCOG = {
        'SQGHs': function (x, y) {
            return x > y;
        },
        'zqpna': function (x, y) {
            return x <= y;
        }
    };
    var line = input['split']('\x0a')['map'](n => parseInt(n, 0xa));
    while (pQgCOG['SQGHs'](line[0x0], 0x1f4)) {
        line[0x0] -= 0x1f4;
    }
    pQgCOG['zqpna'](line[0x0], line[0x1]) ? console['log']('Yes') : console['log']('No');
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));