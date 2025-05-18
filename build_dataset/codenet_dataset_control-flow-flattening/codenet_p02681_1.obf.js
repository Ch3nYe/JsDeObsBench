'use strict';
const Main = input => {
    const wauguV = {
        'bBlFf': 'Yes',
        'VwbOd': function (x, y) {
            return x === y;
        },
        'YyIcW': function (x, y) {
            return x === y;
        }
    };
    const tmp = input['trim']()['split']('\x0a');
    const S = tmp[0x0];
    const T = tmp[0x1];
    let result = wauguV['bBlFf'];
    const tmpStr = T['replace'](S, '');
    if (wauguV['VwbOd'](T['slice'](-0x1), tmpStr) && wauguV['YyIcW'](tmpStr['length'], 0x1)) {
        result = wauguV['bBlFf'];
    } else {
        result = 'No';
    }
    console['log'](result);
    return result;
};
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));