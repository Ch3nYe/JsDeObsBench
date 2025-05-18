const main = arg => {
    const zgAwAV = {
        'clLZQ': function (x, y) {
            return x <= y;
        },
        'xcMlA': function (x, y) {
            return x + y;
        }
    };
    arg = arg['trim']()['split']('\x0a');
    const k = arg[0x0];
    const s = arg[0x1];
    if (zgAwAV['clLZQ'](s['length'], k))
        console['log'](s);
    else
        console['log'](zgAwAV['xcMlA'](s['slice'](0x0, k), '...'));
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));