'use strict';
function main(input) {
    const gJDnSs = {
        'jgFgi': function (x, y) {
            return x < y;
        },
        'oghKb': function (x, y) {
            return x < y;
        },
        'dmRnS': function (x, y) {
            return x > y;
        }
    };
    const lines = input['split']('\x0a');
    const N = parseInt(lines['shift']());
    const tasks = [];
    for (let i = 0x0; gJDnSs['jgFgi'](i, N); i++) {
        tasks['push'](lines[i]['split']('\x20')['map'](x => parseInt(x)));
    }
    tasks['sort']((a, b) => a[0x1] - b[0x1]);
    let result = 'Yes';
    let sum = 0x0;
    for (let i = 0x0; gJDnSs['oghKb'](i, N); i++) {
        sum += tasks[i][0x0];
        if (gJDnSs['dmRnS'](sum, tasks[i][0x1])) {
            result = 'No';
            break;
        }
    }
    console['log'](result);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));