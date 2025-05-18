'use strict';
function main(input) {
    const Vxmsut = {
        'xwySk': function (callee, param1) {
            return callee(param1);
        },
        'WzlPy': function (callee, param1) {
            return callee(param1);
        },
        'PJbjN': function (x, y) {
            return x < y;
        },
        'hQskZ': function (x, y) {
            return x > y;
        }
    };
    let pass_friend_num = Vxmsut['xwySk'](parseInt, input['split']('\x0a')[0x0]['split']('\x20')[0x0]);
    const pass_height = Vxmsut['WzlPy'](parseInt, input['split']('\x0a')[0x0]['split']('\x20')[0x1]);
    const friend_height_data = input['split']('\x0a')[0x1]['split']('\x20');
    for (let i = 0x0; Vxmsut['PJbjN'](i, friend_height_data['length']); i++) {
        if (Vxmsut['hQskZ'](pass_height, Vxmsut['WzlPy'](parseInt, friend_height_data[i]))) {
            pass_friend_num--;
        }
    }
    console['log'](pass_friend_num);
}
main(require('fs')['readFileSync']('/dev/stdin', 'UTF-8'));