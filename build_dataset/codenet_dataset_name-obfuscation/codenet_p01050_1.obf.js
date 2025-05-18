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
    abc['forEach'](_0x18682b => {
        var _0xe4eb30 = new RegExp(_0x18682b);
        if (_0xe4eb30['test'](s)) {
            if (flag)
                cnt++;
            flag = !![];
            s = s['replace'](_0xe4eb30, '');
        } else {
            if (cnt >= 0x3)
                sum += cnt - 0x2;
            cnt = 0x0;
            flag = ![];
        }
    });
}
console['log'](len - sum);