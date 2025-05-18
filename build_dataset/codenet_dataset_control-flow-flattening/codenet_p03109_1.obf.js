let lines = [];
let reader = require('readline')['createInterface']({
    'input': process['stdin'],
    'output': process['stdout']
});
reader['on']('line', function (line) {
    lines['push'](line);
});
reader['on']('close', function () {
    const frlMgN = {
        'xXlCw': function (x, y) {
            return x === y;
        },
        'lXLOh': 'Heisei',
        'tblnc': 'TBD'
    };
    if (frlMgN['xXlCw'](lines['length'], 0x1)) {
        let date_int = lines[0x0]['replace'](/\//g, '');
        if (date_int <= 0x13414de) {
            console['log'](frlMgN['lXLOh']);
            return;
        }
    }
    console['log'](frlMgN['tblnc']);
});