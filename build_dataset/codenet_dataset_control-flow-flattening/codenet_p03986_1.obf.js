const Main = input => {
    const LAUQiV = {
        'eCVbJ': function (x, y) {
            return x > y;
        }
    };
    while (LAUQiV['eCVbJ'](input['indexOf']('ST'), -0x1)) {
        input = input['replace'](/ST/g, '');
    }
    console['log'](input['length']);
};
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));