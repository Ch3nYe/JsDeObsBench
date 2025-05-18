const main = arg => {
    const QOajMx = {
        'fXEXY': function (x, y) {
            return x === y;
        }
    };
    console['log'](QOajMx['fXEXY'](+arg, 0x0) ? 0x1 : 0x0);
};
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));