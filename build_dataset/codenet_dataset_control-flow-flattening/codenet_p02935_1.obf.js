process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
var lines = [];
var reader = require('readline')['createInterface']({
    'input': process['stdin'],
    'output': process['stdout']
});
reader['on']('line', line => {
    lines['push'](line);
});
reader['on']('close', () => {
    var UCIvGk = {
        'fCOqB': function (callee, param1) {
            return callee(param1);
        },
        'EXOEa': function (callee, param1) {
            return callee(param1);
        },
        'lgHBQ': function (x, y) {
            return x < y;
        },
        'kClBg': function (x, y) {
            return x - y;
        },
        'wROwh': function (x, y) {
            return x + y;
        }
    };
    var n = UCIvGk['EXOEa'](Number, lines[0x0]);
    var v = lines[0x1]['split']('\x20');
    v = v['map'](function (str) {
        return UCIvGk['fCOqB'](Number, str);
    });
    for (i = 0x0; UCIvGk['lgHBQ'](i, UCIvGk['kClBg'](n, 0x1)); i++) {
        var min1 = v['sort']((a, b) => a - b)[0x0];
        v['splice'](0x0, 0x1);
        var min2 = v[0x0];
        v['splice'](0x0, 0x1);
        var a = UCIvGk['wROwh'](min1, min2) / 0x2;
        if (v['length'] == 0x0) {
            break;
        }
        v['push'](a);
    }
    console['log'](a);
});