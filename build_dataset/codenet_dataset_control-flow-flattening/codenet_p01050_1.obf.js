var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var s = input['trim']();
var len = s['length'];
var abc = '0123456789AabcdefghijklmnopqrstuvwxyzA'['split']('');
var sum = 0x0;
while (!![]) {
    if (s == '')
        break;
    var cnt = 0x0;
    var flag = ![];
    abc['forEach'](v => {
        var RMSkvU = {
            'WBTrA': function (x, y) {
                return x >= y;
            },
            'CvMlG': function (x, y) {
                return x - y;
            }
        };
        var re = new RegExp(v);
        if (re['test'](s)) {
            if (flag)
                cnt++;
            flag = !![];
            s = s['replace'](re, '');
        } else {
            if (RMSkvU['WBTrA'](cnt, 0x3))
                sum += RMSkvU['CvMlG'](cnt, 0x2);
            cnt = 0x0;
            flag = ![];
        }
    });
}
console['log'](len - sum);