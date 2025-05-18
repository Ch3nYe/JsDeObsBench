'use strict';
function Main(_0x28450b) {
    const _0x53d05b = Number(_0x28450b['split']('\x20')['join'](''));
    if (_0x53d05b % 0x4 === 0x0) {
        console['log']('YES');
    } else {
        console['log']('NO');
    }
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));