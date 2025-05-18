const main = input => {
    const jNgnYC = {
        'RpQyA': function (x, y) {
            return x <= y;
        },
        'mHyei': function (x, y) {
            return x + y;
        },
        'HVJvx': function (x, y) {
            return x ** y;
        },
        'SNiXQ': function (x, y) {
            return x ** y;
        }
    };
    input = input['trim']()['split']('\x0a');
    const [N, D] = input[0x0]['split']('\x20')['map'](Number);
    const [, ...points] = input;
    let ans = 0x0;
    for (let v of points) {
        const [x, y] = v['split']('\x20')['map'](Number);
        if (jNgnYC['RpQyA'](Math['sqrt'](jNgnYC['mHyei'](jNgnYC['HVJvx'](x, 0x2), jNgnYC['SNiXQ'](y, 0x2))), D))
            ans++;
    }
    return console['log'](ans);
};
process['env']['MYTEST'] ? test() : main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));