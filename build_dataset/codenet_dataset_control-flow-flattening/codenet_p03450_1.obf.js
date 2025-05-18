function Main(input) {
    var btALQH = {
        'sdFpK': function (callee, param1) {
            return callee(param1);
        },
        'zBKdi': function (x, y) {
            return x <= y;
        },
        'VSuog': function (callee, param1) {
            return callee(param1);
        },
        'sZOhL': function (callee, param1) {
            return callee(param1);
        },
        'JiuSq': function (x, y) {
            return x - y;
        },
        'cgosF': function (x, y) {
            return x + y;
        },
        'FCOGx': function (x, y) {
            return x - y;
        },
        'RRWGV': function (x, y) {
            return x !== y;
        },
        'ApeGV': 'Yes'
    };
    var line = input['split']('\x0a');
    var tmp = line[0x0]['split']('\x20');
    var N = Number(tmp[0x0]);
    var M = btALQH['sdFpK'](Number, tmp[0x1]);
    var L = [];
    var R = [];
    var D = [];
    for (var i = 0x1; btALQH['zBKdi'](i, M); i++) {
        var tmp = line[i]['split']('\x20');
        L['push'](btALQH['VSuog'](Number, tmp[0x0]));
        R['push'](btALQH['sZOhL'](Number, tmp[0x1]));
        D['push'](btALQH['sZOhL'](Number, tmp[0x2]));
    }
    var pos = [];
    var ans;
    loopj:
        for (var j = 0x0; j < M; j++) {
            if (j === 0x0)
                pos[btALQH['JiuSq'](L[j], 0x1)] = 0x1;
            var rightpos = btALQH['cgosF'](pos[btALQH['JiuSq'](L[j], 0x1)], D[j]);
            if (!pos[btALQH['FCOGx'](R[j], 0x1)]) {
                pos[btALQH['JiuSq'](R[j], 0x1)] = rightpos;
            } else {
                if (btALQH['RRWGV'](pos[btALQH['JiuSq'](R[j], 0x1)], rightpos)) {
                    ans = 'No';
                    break loopj;
                }
            }
        }
    if (!ans)
        ans = btALQH['ApeGV'];
    console['log'](ans);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));