var reader = require('readline')['createInterface']({
    'input': process['stdin'],
    'output': process['stdout']
});
reader['on']('line', function (line) {
    var WSiqqv = {
        'bQPyK': '3|2|4|6|7|5|0|1',
        'ddATy': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'uCCQl': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'NchKO': function (x, y) {
            return x + y;
        },
        'rMFfF': function (x, y) {
            return x * y;
        },
        'SxroB': function (x, y) {
            return x - y;
        },
        'YlnQk': function (x, y) {
            return x - y;
        },
        'LcScD': function (callee, param1, param2) {
            return callee(param1, param2);
        }
    };
    var LsyVZH = WSiqqv['bQPyK']['split']('|');
    var tIahoK = 0x0;
    while (!![]) {
        switch (LsyVZH[tIahoK++]) {
        case '0':
            console['log'](b['toFixed'](0x8));
            continue;
        case '1':
            process['exit']();
            continue;
        case '2':
            var b = WSiqqv['ddATy'](parseInt, a[0x0], 0xa);
            continue;
        case '3':
            var a = line['split']('\x20');
            continue;
        case '4':
            var c = WSiqqv['uCCQl'](parseInt, a[0x1], 0xa);
            continue;
        case '5':
            b = Math['sqrt'](WSiqqv['NchKO'](WSiqqv['rMFfF'](WSiqqv['SxroB'](b, d), WSiqqv['SxroB'](b, d)), WSiqqv['rMFfF'](WSiqqv['YlnQk'](c, e), c - e)));
            continue;
        case '6':
            var d = WSiqqv['LcScD'](parseInt, a[0x2], 0xa);
            continue;
        case '7':
            var e = parseInt(a[0x3], 0xa);
            continue;
        }
        break;
    }
});
process['stdin']['on']('end', function () {
});