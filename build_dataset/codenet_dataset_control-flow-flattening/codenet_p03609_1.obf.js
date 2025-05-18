function main(input) {
    const sHfjaX = {
        'eNwTq': function (x, y) {
            return x - y;
        }
    };
    input = input['trim']();
    const a = input['split']('\x20')['map'](Number);
    if (a[0x0] <= a[0x1]) {
        console['log']('0');
    } else {
        console['log'](sHfjaX['eNwTq'](a[0x0], a[0x1]));
    }
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));