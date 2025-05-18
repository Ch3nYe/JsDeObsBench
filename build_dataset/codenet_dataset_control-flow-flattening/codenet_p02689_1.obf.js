'use strict';
const inputs = require('fs')['readFileSync']('/dev/stdin', 'utf8')['split']('\x0a');
inputs['shift']();
const heights = inputs['shift']()['split']('\x20')['map'](v => parseInt(v, 0xa));
const towers = new Array(heights['length'])['fill']()['map'](_ => new Array());
inputs['forEach'](v => {
    const splited = v['split']('\x20')['map'](w => parseInt(w, 0xa) - 0x1);
    towers[splited[0x0]]['push'](splited[0x1]);
    towers[splited[0x1]]['push'](splited[0x0]);
});
let result = 0x0;
towers['forEach']((t, i) => {
    const JNZCSc = {
        'yveLa': function (x, y) {
            return x <= y;
        }
    };
    let good = !![];
    if (t['length']) {
        t['forEach'](t2 => {
            if (JNZCSc['yveLa'](heights[i], heights[t2])) {
                good = ![];
            }
        });
    }
    if (good) {
        ++result;
    }
});
console['log'](result);