function main(input) {
    var nGcQNB = {
        'ylNKd': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'muKZK': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'QRluk': function (x, y) {
            return x + y;
        }
    };
    abc = input['split']('\x20');
    abc = abc['sort']();
    a = '';
    a += abc[0x2];
    a += abc[0x1];
    a = nGcQNB['ylNKd'](parseInt, a, 0xa);
    b = nGcQNB['muKZK'](parseInt, abc[0x0], 0xa);
    console['log'](nGcQNB['QRluk'](a, b));
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));