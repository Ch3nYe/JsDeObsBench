const rl = require('readline')['createInterface']({ 'input': process['stdin'] });
rl['on']('line', line => {
    const PWXcau = {
        'pPvnn': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'REKAN': function (callee, param1) {
            return callee(param1);
        },
        'GIDyP': function (callee, param1) {
            return callee(param1);
        }
    };
    const param = line['split']('\x20');
    PWXcau['pPvnn'](solve, PWXcau['REKAN'](Number, param[0x0]), PWXcau['GIDyP'](Number, param[0x1]));
    rl['close']();
});
function solve(x, y) {
    const ngFjHZ = {
        'jyhco': function (x, y) {
            return x + y;
        },
        'Cvbbh': function (x, y) {
            return x / y;
        }
    };
    console['log'](ngFjHZ['jyhco'](x, ngFjHZ['Cvbbh'](y, 0x2)));
}