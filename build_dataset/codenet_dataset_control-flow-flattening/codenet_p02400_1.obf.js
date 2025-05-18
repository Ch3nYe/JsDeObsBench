var lines = [];
var reader = require('readline')['createInterface']({
    'input': process['stdin'],
    'output': process['stdout']
});
reader['on']('line', function (line) {
    var HOijeS = {
        'oPgrH': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'XsDwJ': function (x, y) {
            return x * y;
        },
        'GQMVa': function (x, y) {
            return x * y;
        },
        'iebFZ': function (x, y) {
            return x + y;
        }
    };
    var a = line['split']('\x20');
    var b = HOijeS['oPgrH'](parseInt, a[0x0], 0xa);
    var c = HOijeS['XsDwJ'](b * b, Math['PI']);
    var d = HOijeS['GQMVa'](HOijeS['XsDwJ'](b, 0x2), Math['PI']);
    console['log'](HOijeS['iebFZ'](c['toFixed'](0x6) + '\x20', d['toFixed'](0x6)));
    process['exit']();
});
process['stdin']['on']('end', function () {
});