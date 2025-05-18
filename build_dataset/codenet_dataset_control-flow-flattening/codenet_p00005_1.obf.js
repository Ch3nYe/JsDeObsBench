config = {
    'stdin': '/dev/stdin',
    'newline': '\x0a'
};
require('fs')['readFileSync'](config['stdin'], 'ascii')['trim']()['split'](config['newline'])['forEach'](function (line) {
    var niTEcc = {
        'YPSGY': '%d\x20%d',
        'etXvU': function (callee, param1, param2) {
            return callee(param1, param2);
        }
    };
    var ary = line['split']('\x20');
    var a = ary[0x0], b = ary[0x1];
    console['log'](niTEcc['YPSGY'], niTEcc['etXvU'](gcd, a, b), niTEcc['etXvU'](lcm, a, b));
});
function gcd(a, b) {
    var nrGgiv = {
        'hXsoQ': function (x, y) {
            return x !== y;
        },
        'FqCas': function (x, y) {
            return x < y;
        },
        'AkBDU': function (x, y) {
            return x === y;
        }
    };
    while (nrGgiv['hXsoQ'](a, b)) {
        if (nrGgiv['FqCas'](a, b)) {
            var tmp = a;
            a = b;
            b = tmp;
        }
        if (nrGgiv['AkBDU'](a % b, 0x0))
            return b;
        a -= b;
    }
    return a;
}
function lcm(a, b) {
    var MBlCpG = {
        'owlPL': function (x, y) {
            return x * y;
        },
        'paDfs': function (x, y) {
            return x / y;
        }
    };
    var g = gcd(a, b);
    return MBlCpG['owlPL'](MBlCpG['owlPL'](g, a / g), MBlCpG['paDfs'](b, g));
}