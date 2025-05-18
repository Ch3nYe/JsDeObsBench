function Main(input) {
    var yLWwbJ = {
        'bxYvq': function (callee, param1) {
            return callee(param1);
        },
        'VekVe': function (x, y) {
            return x === y;
        },
        'mneOv': function (x, y) {
            return x - y;
        },
        'QYKOj': function (x, y) {
            return x >= y;
        }
    };
    input = input['split']('\x0a');
    tmp = input[0x0]['split']('\x20');
    var N = yLWwbJ['bxYvq'](Number, tmp[0x0]);
    var K = yLWwbJ['bxYvq'](Number, tmp[0x1]);
    if (yLWwbJ['VekVe'](K, 0x1))
        return console['log'](0x0);
    var current = Math['abs'](yLWwbJ['mneOv'](N, K));
    N = current;
    while (yLWwbJ['QYKOj'](current, N)) {
        N = current;
        current = Math['abs'](yLWwbJ['mneOv'](N, K));
    }
    console['log'](current);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));