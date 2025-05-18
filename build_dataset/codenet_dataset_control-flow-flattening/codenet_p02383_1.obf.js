process['stdin']['resume']();
process['stdin']['setEncoding']('utf8');
const reader = require('readline')['createInterface']({
    'input': process['stdin'],
    'output': process['stdout']
});
const lines = [];
reader['on']('line', line => {
    lines['push'](line);
});
reader['on']('close', () => {
    const ScTakZ = {
        'gZbUo': function (x, y) {
            return x < y;
        }
    };
    let [top, back, right, left, front, bottom] = lines[0x0]['split']('\x20')['map'](Number);
    const rs = lines[0x1];
    for (let i = 0x0; ScTakZ['gZbUo'](i, rs['length']); i++) {
        switch (rs[i]) {
        case 'N':
            [top, front, bottom, back] = [
                back,
                top,
                front,
                bottom
            ];
            break;
        case 'S':
            [top, front, bottom, back] = [
                front,
                bottom,
                back,
                top
            ];
            break;
        case 'W':
            [top, left, bottom, right] = [
                right,
                top,
                left,
                bottom
            ];
            break;
        case 'E':
            [top, left, bottom, right] = [
                left,
                bottom,
                right,
                top
            ];
            break;
        }
    }
    console['log'](top);
});