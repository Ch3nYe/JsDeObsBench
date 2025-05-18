const main = stdin => {
    const ECGzSH = {
        'riCmB': function (x, y) {
            return x * y;
        }
    };
    const [A, B] = stdin['trim']()['split']('\x20')['map'](x => parseInt(x));
    console['log'](ECGzSH['riCmB'](A, B));
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));