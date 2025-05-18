function Main(input) {
    const ifYmVp = {
        'dXZxP': function (callee, param1) {
            return callee(param1);
        },
        'ptUAc': function (x, y) {
            return x * y;
        },
        'dpEhQ': function (x, y) {
            return x - y;
        },
        'JblNC': 'YES'
    };
    const arr = input['trim']()['split']('\x0a');
    const AV = arr[0x0]['split']('\x20')['map'](Number);
    const BW = arr[0x1]['split']('\x20')['map'](Number);
    const T = ifYmVp['dXZxP'](Number, arr[0x2]);
    if (Math['abs'](AV[0x0] - BW[0x0]) < ifYmVp['ptUAc'](T, ifYmVp['dpEhQ'](AV[0x1], BW[0x1]))) {
        console['log'](ifYmVp['JblNC']);
    } else {
        console['log']('NO');
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));