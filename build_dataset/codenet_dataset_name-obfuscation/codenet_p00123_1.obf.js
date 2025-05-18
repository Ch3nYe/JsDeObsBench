var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
Arr['forEach'](function (_0x134920) {
    var _0x64de16 = _0x134920['split']('\x20')['map'](Number);
    var _0x29bd49 = _0x64de16[0x0];
    var _0x4d5aea = _0x64de16[0x1];
    var _0x56def1;
    if (35.5 > _0x29bd49 && 0x47 > _0x4d5aea)
        _0x56def1 = 'AAA';
    else if (37.5 > _0x29bd49 && 0x4d > _0x4d5aea)
        _0x56def1 = 'AA';
    else if (0x28 > _0x29bd49 && 0x53 > _0x4d5aea)
        _0x56def1 = 'A';
    else if (0x2b > _0x29bd49 && 0x59 > _0x4d5aea)
        _0x56def1 = 'B';
    else if (0x32 > _0x29bd49 && 0x69 > _0x4d5aea)
        _0x56def1 = 'C';
    else if (0x37 > _0x29bd49 && 0x74 > _0x4d5aea)
        _0x56def1 = 'D';
    else if (0x46 > _0x29bd49 && 0x94 > _0x4d5aea)
        _0x56def1 = 'E';
    else
        _0x56def1 = 'NA';
    console['log'](_0x56def1);
});