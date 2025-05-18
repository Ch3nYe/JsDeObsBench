const main = input => {
    const TecDlL = {
        'OojcE': function (x, y) {
            return x - y;
        },
        'RGcye': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'qlYLo': function (x, y) {
            return x >= y;
        }
    };
    input = input['trim']()['split']('\x0a');
    let n = TecDlL['OojcE'](TecDlL['RGcye'](parseInt, input[0x0], 0xa), 0x2);
    const nums = input[0x1]['split']('\x20')['map'](Number)['sort']((a, b) => b - a);
    let r = [0x1];
    for (n; TecDlL['qlYLo'](n, 0x2); n -= 0x2)
        r['push'](0x2);
    r['push'](n);
    return console['log'](r['reduce']((a, b, i) => a + b * nums[i], 0x0));
};
process['env']['MYTEST'] ? test() : main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));