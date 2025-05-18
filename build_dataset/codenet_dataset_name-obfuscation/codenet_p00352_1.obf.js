'use strict';
function Main(_0x41da45) {
    const _0x4421ff = _0x41da45['split']('\x20');
    console['log']((parseFloat(_0x4421ff[0x0]) + parseFloat(_0x4421ff[0x1])) / 0x2);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));