function a0_0x434c() {
    var _0x48e302 = [
        '/dev/stdin',
        'utf8',
        'split',
        'shift',
        '0\x200',
        'filter',
        'length',
        'log'
    ];
    a0_0x434c = function () {
        return _0x48e302;
    };
    return a0_0x434c();
}
function a0_0x2e51(eeskoU, key) {
    var stringArray = a0_0x434c();
    a0_0x2e51 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2e51(eeskoU, key);
}
var a0_0x13fe48 = a0_0x2e51;
var input = require('fs')['readFileSync'](a0_0x13fe48(0x0), a0_0x13fe48(0x1))['trim']();
var lines = input[a0_0x13fe48(0x2)]('\x0a');
while (lines['length'] > 0x0) {
    var path = [];
    var line;
    while ((line = lines[a0_0x13fe48(0x3)]()) != a0_0x13fe48(0x4)) {
        var nums = line[a0_0x13fe48(0x2)]('\x20');
        var from = +nums[0x0];
        var to = +nums[0x1];
        path[from] = (path[from] || 0x0) + 0x1;
        path[to] = (path[to] || 0x0) + 0x1;
    }
    var odds = path[a0_0x13fe48(0x5)](function (n) {
        return n % 0x2 == 0x1;
    });
    if (path[0x1] % 0x2 == 0x1 && path[0x2] % 0x2 == 0x1 && odds[a0_0x13fe48(0x6)] > 0x2)
        console[a0_0x13fe48(0x7)]('NG');
    else
        console['log']('OK');
}