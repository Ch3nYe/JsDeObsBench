const Main = input => {
    const RbyqdV = {
        'FZvfe': function (x, y) {
            return x >= y;
        },
        'kFCOs': 'red'
    };
    input = input['split']('\x0a');
    const a = input[0x0];
    const s = input[0x1];
    if (RbyqdV['FZvfe'](a, 0xc80)) {
        console['log'](s);
    } else {
        console['log'](RbyqdV['kFCOs']);
    }
};
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));