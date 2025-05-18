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
    var sRIiqc = {
        'hveMt': function (callee, param1) {
            return callee(param1);
        },
        'uAguk': function (callee, param1) {
            return callee(param1);
        },
        'XWZJN': function (callee, param1) {
            return callee(param1);
        },
        'bLZrH': function (x, y) {
            return x + y;
        },
        'urivY': function (x, y) {
            return x - y;
        },
        'lenTL': function (x, y) {
            return x + y;
        }
    };
    var abcd = lines[0x0]['split']('\x20');
    var one = sRIiqc['hveMt'](Number, abcd[0x0]);
    var two = sRIiqc['uAguk'](Number, abcd[0x1]);
    var three = Number(abcd[0x2]);
    var four = sRIiqc['XWZJN'](Number, abcd[0x3]);
    var ans = [];
    ans['push'](sRIiqc['bLZrH'](three, sRIiqc['urivY'](two, four)));
    ans['push'](three + four - one);
    ans['push'](sRIiqc['urivY'](sRIiqc['lenTL'](one, two), four));
    ans['push'](three + two - one);
    console['log'](ans['join']('\x20'));
});