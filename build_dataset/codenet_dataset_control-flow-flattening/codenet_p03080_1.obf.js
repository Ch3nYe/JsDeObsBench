function Main(input) {
    const HusQpE = {
        'nmfKX': function (x, y) {
            return x < y;
        },
        'HeFMK': function (x, y) {
            return x === y;
        },
        'jyQjZ': 'Yes'
    };
    let Red = 0x0;
    let Blue = 0x0;
    const input_line = input['split']('\x0a');
    inputS = input_line[0x1]['split']('');
    for (i = 0x0; HusQpE['nmfKX'](i, inputS['length']); i++) {
        if (HusQpE['HeFMK'](inputS[i], 'R')) {
            Red++;
        } else {
            Blue++;
        }
    }
    console['log'](Red > Blue ? HusQpE['jyQjZ'] : 'No');
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));