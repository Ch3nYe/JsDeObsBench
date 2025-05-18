'use strict';
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var cin = input['split'](/ |\n/), cid = 0x0;
var myOut = main();
if (myOut !== undefined)
    console['log'](myOut);
function main() {
    let _0x538f26 = +cin['shift']();
    let _0x3aeee0 = {};
    let _0x32f97b = {};
    cin['forEach']((_0x2a310b, _0x89fdf6) => {
        let _0x250ceb = +_0x2a310b;
        _0x3aeee0[String(_0x89fdf6 + _0x250ceb)] = _0x3aeee0[String(_0x89fdf6 + _0x250ceb)] + 0x1 || 0x1;
        _0x32f97b[String(_0x89fdf6 - _0x250ceb)] = _0x32f97b[String(_0x89fdf6 - _0x250ceb)] + 0x1 || 0x1;
    });
    let _0x531e8 = Object['keys'](_0x3aeee0);
    let _0x411ddb = 0x0;
    _0x531e8['forEach'](_0x46b60e => {
        _0x411ddb += _0x3aeee0[_0x46b60e] * _0x32f97b[_0x46b60e] || 0x0;
    });
    return _0x411ddb;
}