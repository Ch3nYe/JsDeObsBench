function main(input) {
    const uflzlI = {
        'rtnvo': function (callee, param1) {
            return callee(param1);
        },
        'yMCJj': function (x, y) {
            return x < y;
        }
    };
    const S = input['split']('\x0a')[0x0]['split']('');
    const K = uflzlI['rtnvo'](parseInt, input['split']('\x0a')[0x0]['split']('\x20')[0x1]);
    for (var i = 0x0; uflzlI['yMCJj'](i, S['length']); i++) {
        if (S[i] != '1') {
            console['log'](S[i]);
            return;
        }
    }
    console['log'](0x1);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));