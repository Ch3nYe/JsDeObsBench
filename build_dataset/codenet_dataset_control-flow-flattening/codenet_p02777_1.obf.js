function Main(impu) {
    const ShigJW = {
        'GvRsC': function (x, y) {
            return x === y;
        },
        'ZbWBB': function (x, y) {
            return x + y;
        }
    };
    let imput = impu['split']('\x0a');
    let name = imput[0x0]['split']('\x20');
    let count = imput[0x1]['split']('\x20');
    if (ShigJW['GvRsC'](name[0x0], imput[0x2]))
        count[0x0]--;
    else
        count[0x1]--;
    console['log'](ShigJW['ZbWBB'](count[0x0] + '\x20', count[0x1]));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));