function Main(input) {
    const uRaDjs = {
        'wttPR': function (callee, param1) {
            return callee(param1);
        },
        'xwbMD': function (callee, param1) {
            return callee(param1);
        },
        'NDQHN': function (x, y) {
            return x <= y;
        },
        'FNmXf': 'unsafe',
        'Pxtqw': 'safe'
    };
    input = input['split']('\x20');
    const S = uRaDjs['wttPR'](parseInt, input[0x0]);
    const W = uRaDjs['xwbMD'](parseInt, input[0x1]);
    const ret = uRaDjs['NDQHN'](S, W) ? uRaDjs['FNmXf'] : uRaDjs['Pxtqw'];
    console['log'](ret);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));