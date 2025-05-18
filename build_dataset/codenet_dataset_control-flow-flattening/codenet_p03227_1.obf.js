'use strict';
function Main(input) {
    const MrWkTw = {
        'JVQps': function (x, y) {
            return x <= y;
        }
    };
    const S = input['split']('\x0a')[0x0];
    if (MrWkTw['JVQps'](S['length'], 0x2)) {
        console['log'](S);
    } else {
        console['log'](S['split']('')['reverse']()['join'](''));
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));