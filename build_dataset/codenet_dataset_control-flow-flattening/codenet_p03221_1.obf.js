function fillZero(l, num) {
    var KfyJbg = {
        'QuiER': function (x, y) {
            return x < y;
        }
    };
    num = String(num);
    for (var i = num['length']; KfyJbg['QuiER'](i, l); i++) {
        num = '0' + num;
    }
    return num;
}
function main(arg) {
    var IvqPdH = {
        'LCfwz': function (callee, param1) {
            return callee(param1);
        },
        'jTLew': function (x, y) {
            return x < y;
        },
        'HgmpM': function (x, y) {
            return x === y;
        },
        'hvMTo': function (x, y) {
            return x + y;
        },
        'XuWAn': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'AEsMw': function (callee, param1, param2) {
            return callee(param1, param2);
        },
        'dbwCe': function (x, y) {
            return x + y;
        }
    };
    arg = arg['trim']()['split']('\x0a');
    arg[0x0] = arg[0x0]['split']('\x20');
    var N = Number(arg[0x0][0x0]);
    var M = IvqPdH['LCfwz'](Number, arg[0x0][0x1]);
    arg['shift']();
    var p_master = {};
    for (var i = 0x0; i < arg['length']; i++) {
        var tmp = arg[i]['split']('\x20')['map'](e => Number(e));
        arg[i] = tmp;
        if (!p_master[tmp[0x0]]) {
            p_master[tmp[0x0]] = [];
        }
        p_master[tmp[0x0]]['push'](tmp[0x1]);
    }
    for (key in p_master) {
        p_master[key]['sort']();
    }
    for (var i = 0x0; i < arg['length']; i++) {
        var _p = arg[i][0x0];
        var j = 0x0;
        for (var j = 0x0; IvqPdH['jTLew'](j, p_master[_p]['length']); j++) {
            if (IvqPdH['HgmpM'](p_master[_p][j], arg[i][0x1])) {
                break;
            }
        }
        console['log'](IvqPdH['hvMTo'](IvqPdH['XuWAn'](fillZero, 0x6, _p), IvqPdH['AEsMw'](fillZero, 0x6, IvqPdH['dbwCe'](j, 0x1))));
    }
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));