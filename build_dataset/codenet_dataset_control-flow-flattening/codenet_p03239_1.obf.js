var lines = [];
var result = Infinity;
var readline = require('readline');
var rl = readline['createInterface']({
    'input': process['stdin'],
    'output': process['stdout']
});
rl['on']('line', function (x) {
    lines['push'](x);
});
rl['on']('close', function () {
    var GPnfTT = {
        'EmNaF': function (callee, param1) {
            return callee(param1);
        },
        'czqFC': function (x, y) {
            return x <= y;
        },
        'YuzhD': function (x, y) {
            return x !== y;
        },
        'UsxYN': 'TLE'
    };
    var N = Number(lines[0x0]['split']('\x20')[0x0]);
    var T = GPnfTT['EmNaF'](Number, lines[0x0]['split']('\x20')[0x1]);
    lines['shift']();
    var array = lines['map'](value => value['split']('\x20')['map'](value => Number(value)));
    for (var i of array) {
        if (GPnfTT['czqFC'](i[0x1], T)) {
            result = Math['min'](result, i[0x0]);
        }
    }
    GPnfTT['YuzhD'](result, Infinity) ? console['log'](result) : console['log'](GPnfTT['UsxYN']);
});