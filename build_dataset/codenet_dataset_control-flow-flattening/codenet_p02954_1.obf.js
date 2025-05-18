function Main(input) {
    var yPSwxc = {
        'QQaSC': function (x, y) {
            return x + y;
        },
        'qcWue': function (x, y) {
            return x % y;
        },
        'LNCjk': function (x, y) {
            return x < y;
        },
        'xFpbY': function (x, y) {
            return x == y;
        }
    };
    var idata = input['split']('');
    var ninzuu = [];
    var nextninzuutemp = [];
    for (let i = 0x0; i < idata['length']; i++) {
        ninzuu['push'](0x1);
        nextninzuutemp['push'](0x0);
    }
    var nextninzuu = nextninzuutemp['slice']();
    for (let turn = 0x0; turn < yPSwxc['QQaSC'](ninzuu['length'], yPSwxc['qcWue'](ninzuu['length'], 0x2)); turn++) {
        for (let j = 0x0; yPSwxc['LNCjk'](j, ninzuu['length']); j++) {
            if (yPSwxc['xFpbY'](idata[j], 'R')) {
                nextninzuu[yPSwxc['QQaSC'](j, 0x1)] += ninzuu[j];
            } else if (yPSwxc['xFpbY'](idata[j], 'L')) {
                nextninzuu[j - 0x1] += ninzuu[j];
            }
        }
        ninzuu = nextninzuu['slice']();
        nextninzuu = nextninzuutemp['slice']();
    }
    console['log'](ninzuu['join']('\x20'));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));