function* main() {
    const unARJx = {
        'ejqUu': function (x, y) {
            return x <= y;
        },
        'hOkSJ': function (x, y) {
            return x / y;
        },
        'lWxuc': function (x, y) {
            return x + y;
        }
    };
    const N = +(yield);
    let sum = 0x0;
    for (let k = 0x1; unARJx['ejqUu'](k, N); k++)
        sum += Math['floor'](unARJx['hOkSJ'](k * Math['floor'](unARJx['lWxuc'](0x1, unARJx['hOkSJ'](N, k))) * Math['floor'](unARJx['hOkSJ'](N, k)), 0x2));
    console['log'](sum);
}
const iter = main();
iter['next']();
require('readline')['createInterface']({ 'input': process['stdin'] })['on']('line', line => iter['next'](line));