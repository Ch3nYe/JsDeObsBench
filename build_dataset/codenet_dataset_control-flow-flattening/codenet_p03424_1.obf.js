function main(s) {
    const bynjAD = {
        'wgCzP': function (x, y) {
            return x === y;
        },
        'iJpfC': 'Four',
        'uqMLc': 'Three'
    };
    const set = new Set(s['split']('\x0a')[0x1]['split']('\x20'));
    const ans = bynjAD['wgCzP']([...set]['length'], 0x4) ? bynjAD['iJpfC'] : bynjAD['uqMLc'];
    console['log'](ans);
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));