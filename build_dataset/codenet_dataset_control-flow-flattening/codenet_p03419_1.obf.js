console['log']((args => {
    const DNSAnr = {
        'HpfqP': function (x, y) {
            return x * y;
        }
    };
    const [N, M] = args['trim']()['split']('\x20')['map'](v => v - 0x2);
    return '' + Math['abs'](DNSAnr['HpfqP'](N, M));
})(require('fs')['readFileSync']('/dev/stdin', 'utf8')));