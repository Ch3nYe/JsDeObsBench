let lines = [];
let reader = require('readline')['createInterface']({
    'input': process['stdin'],
    'output': process['stdout']
});
reader['on']('line', function (_0x462a67) {
    lines['push'](_0x462a67);
});
reader['on']('close', function () {
    if (lines['length'] === 0x1) {
        let _0x55ae9d = lines[0x0]['replace'](/\//g, '');
        if (_0x55ae9d <= 0x13414de) {
            console['log']('Heisei');
            return;
        }
    }
    console['log']('TBD');
});