function main(tmp) {
    var NMWYDw = {
        'zOkqL': function (x, y) {
            return x != y;
        },
        'FmBNE': function (x, y) {
            return x + y;
        },
        'QYqPC': function (x, y) {
            return x + y;
        },
        'XkeUs': function (x, y) {
            return x + y;
        },
        'uzwfn': function (x, y) {
            return x + y;
        }
    };
    var i = 0x0;
    while (NMWYDw['zOkqL'](tmp[i], 0x0) && NMWYDw['zOkqL'](tmp[NMWYDw['FmBNE'](i, 0x1)], 0x0)) {
        if (tmp[i] < tmp[NMWYDw['FmBNE'](i, 0x1)])
            console['log'](NMWYDw['FmBNE'](NMWYDw['QYqPC'](tmp[i], '\x20'), tmp[NMWYDw['XkeUs'](i, 0x1)]));
        else
            console['log'](NMWYDw['XkeUs'](NMWYDw['uzwfn'](tmp[NMWYDw['QYqPC'](i, 0x1)], '\x20'), tmp[i]));
        i = NMWYDw['QYqPC'](i, 0x2);
    }
}
var lines = [];
var b = [];
var reader = require('readline')['createInterface']({
    'input': process['stdin'],
    'output': process['stdout']
});
reader['on']('line', function (line) {
    var OIIuwN = {
        'nhsat': '1|2|0|3|5|4',
        'yiGSH': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'ZuZVT': function (x, y) {
            return x == y;
        },
        'mLAge': function (x, y) {
            return x == y;
        },
        'WkwyC': function (callee, param1) {
            return callee(param1);
        }
    };
    var MjcmhV = OIIuwN['nhsat']['split']('|');
    var seUagE = 0x0;
    while (!![]) {
        switch (MjcmhV[seUagE++]) {
        case '0':
            var d = parseInt(a[0x1], 0xa);
            continue;
        case '1':
            var a = line['split']('\x20');
            continue;
        case '2':
            var c = OIIuwN['yiGSH'](parseInt, a[0x0], 0xa);
            continue;
        case '3':
            b['push'](c);
            continue;
        case '4':
            if (OIIuwN['ZuZVT'](c, 0x0) && OIIuwN['mLAge'](d, 0x0))
                OIIuwN['WkwyC'](main, b);
            continue;
        case '5':
            b['push'](d);
            continue;
        }
        break;
    }
});
process['stdin']['on']('end', function () {
});