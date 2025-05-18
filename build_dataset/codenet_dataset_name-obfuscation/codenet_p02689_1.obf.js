'use strict';
const inputs = require('fs')['readFileSync']('/dev/stdin', 'utf8')['split']('\x0a');
inputs['shift']();
const heights = inputs['shift']()['split']('\x20')['map'](_0x2d3df9 => parseInt(_0x2d3df9, 0xa));
const towers = new Array(heights['length'])['fill']()['map'](_0x20947a => new Array());
inputs['forEach'](_0x47d1b7 => {
    const _0x5a295c = _0x47d1b7['split']('\x20')['map'](_0x13f38e => parseInt(_0x13f38e, 0xa) - 0x1);
    towers[_0x5a295c[0x0]]['push'](_0x5a295c[0x1]);
    towers[_0x5a295c[0x1]]['push'](_0x5a295c[0x0]);
});
let result = 0x0;
towers['forEach']((_0x279285, _0x59c853) => {
    let _0x4f671b = !![];
    if (_0x279285['length']) {
        _0x279285['forEach'](_0x9ac5c0 => {
            if (heights[_0x59c853] <= heights[_0x9ac5c0]) {
                _0x4f671b = ![];
            }
        });
    }
    if (_0x4f671b) {
        ++result;
    }
});
console['log'](result);