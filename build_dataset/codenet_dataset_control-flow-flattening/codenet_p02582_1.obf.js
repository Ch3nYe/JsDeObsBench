function main(input) {
    const vpVufs = {
        'lxsQM': function (x, y) {
            return x < y;
        },
        'bvNHw': function (x, y) {
            return x === y;
        },
        'HNRow': function (x, y) {
            return x === y;
        },
        'KeQIK': function (x, y) {
            return x === y;
        },
        'rfjrE': function (x, y) {
            return x - y;
        }
    };
    input = input['trim']();
    let list = input['split']('');
    let answer = 0x0;
    for (let i = 0x0; vpVufs['lxsQM'](i, list['length']); i++) {
        if (vpVufs['bvNHw'](list[i], 'R')) {
            if (vpVufs['HNRow'](answer, 0x0)) {
                answer++;
            } else if (vpVufs['KeQIK'](list[vpVufs['rfjrE'](i, 0x1)], 'R')) {
                answer++;
            }
        }
    }
    console['log'](answer);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));