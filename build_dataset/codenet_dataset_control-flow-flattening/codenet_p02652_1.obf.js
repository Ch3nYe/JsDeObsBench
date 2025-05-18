function Main(str) {
    const kpNNFj = {
        'qsxln': function (x, y) {
            return x < y;
        },
        'ITVYv': function (x, y) {
            return x === y;
        },
        'LCIYx': function (x, y) {
            return x === y;
        }
    };
    let zero = 0x0;
    let one = 0x0;
    for (let i = 0x0; kpNNFj['qsxln'](i, str['length']); i++) {
        if (kpNNFj['ITVYv'](str[i], '1')) {
            one++;
        } else if (kpNNFj['LCIYx'](str[i], '0')) {
            zero++;
        }
    }
    console['log'](Math['abs'](one - zero));
}
let input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
Main(input);