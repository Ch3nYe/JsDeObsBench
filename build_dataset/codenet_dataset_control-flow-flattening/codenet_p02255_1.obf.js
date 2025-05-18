function main(lines) {
    const rrFCvr = {
        'ImjJW': function (x, y) {
            return x >= y;
        },
        'YmWvf': function (x, y) {
            return x < y;
        },
        'uhFhX': function (x, y) {
            return x + y;
        }
    };
    const n = lines['split']('\x0a')[0x0];
    const An = lines['split']('\x0a')[0x1]['split']('\x20')['map'](Number);
    console['log'](An['join']('\x20'));
    for (let i = 0x1; i < n; i++) {
        value = An[i];
        let j = i - 0x1;
        while (rrFCvr['ImjJW'](j, 0x0) && rrFCvr['YmWvf'](value, An[j])) {
            An[j + 0x1] = An[j];
            j--;
        }
        An[rrFCvr['uhFhX'](j, 0x1)] = value;
        console['log'](An['join']('\x20'));
    }
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));