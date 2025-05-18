'use strict';
function main(input) {
    const xzfgWU = {
        'pNCMI': function (x, y) {
            return x - y;
        }
    };
    const args = input['split']('\x0a'), K = parseInt(args[0x0]['split']('\x20')[0x1]), H = args[0x1]['split']('\x20');
    var ans = H['sort']()['splice'](0x0, xzfgWU['pNCMI'](H['length'], K))['reduce']((a, x) => a + parseInt(x), 0x0);
    console['log'](ans);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));