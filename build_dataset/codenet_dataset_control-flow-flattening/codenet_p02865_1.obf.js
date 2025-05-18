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
    var Vltyfk = {
        'ckjOQ': function (x, y) {
            return x / y;
        },
        'mktQJ': function (x, y) {
            return x - y;
        }
    };
    const N = +lines[0x0];
    console['log'](N % 0x2 ? Vltyfk['ckjOQ'](Vltyfk['mktQJ'](N, 0x1), 0x2) : Vltyfk['mktQJ'](Vltyfk['ckjOQ'](N, 0x2), 0x1));
});