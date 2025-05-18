var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
Arr['forEach'](function (v) {
    var rltWjq = {
        'PVxWE': function (callee, param1) {
            return callee(param1);
        },
        'UnqAS': function (x, y) {
            return x + y;
        },
        'nUaUN': function (x, y) {
            return x - y;
        }
    };
    v = v['replace'](/@(\d)(.)/g, function (s, s1, s2) {
        return rltWjq['PVxWE'](Array, rltWjq['UnqAS'](rltWjq['nUaUN'](s1, 0x0), 0x1))['join'](s2);
    });
    console['log'](v);
});