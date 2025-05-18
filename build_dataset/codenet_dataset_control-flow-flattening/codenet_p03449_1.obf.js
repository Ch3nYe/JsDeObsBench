function Main(input) {
    const gwHdtE = {
        'dtBsx': function (x, y) {
            return x - y;
        },
        'wsnZr': function (x, y) {
            return x < y;
        },
        'qRAJd': function (x, y) {
            return x - y;
        },
        'NgaaA': function (x, y) {
            return x <= y;
        },
        'ksEvV': function (callee, param1) {
            return callee(param1);
        },
        'oXPIt': function (x, y) {
            return x + y;
        },
        'YYQeq': function (x, y) {
            return x < y;
        }
    };
    const setting = input['trim']()['split']('\x0a');
    const process_sum = gwHdtE['dtBsx'](setting[0x0], 0x0);
    const up = setting[0x1]['split']('\x20');
    const down = setting[0x2]['split']('\x20');
    let answer = 0x0;
    for (let process_up = 0x0; gwHdtE['wsnZr'](process_up, process_sum); process_up++) {
        let process_down = gwHdtE['dtBsx'](gwHdtE['qRAJd'](process_sum, process_up), 0x1);
        let candies = 0x0;
        for (let i = 0x0; i <= process_up; i++) {
            candies += parseInt(up[i]);
        }
        for (let i = 0x0; gwHdtE['NgaaA'](i, process_down); i++) {
            candies += gwHdtE['ksEvV'](parseInt, down[gwHdtE['oXPIt'](process_up, i)]);
        }
        if (gwHdtE['YYQeq'](answer, candies)) {
            answer = candies;
        }
    }
    console['log'](answer);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));