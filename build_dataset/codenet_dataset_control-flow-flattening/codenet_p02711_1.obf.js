const Main = input => {
    const lfeAmu = {
        'KUBaj': function (x, y) {
            return x === y;
        },
        'wOJIf': 'Yes'
    };
    const tmp = input['trim']()['split']('');
    let result = '';
    if (lfeAmu['KUBaj'](tmp['indexOf']('7'), -0x1)) {
        result = 'No';
    } else {
        result = lfeAmu['wOJIf'];
    }
    console['log'](result);
    return result;
};
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));