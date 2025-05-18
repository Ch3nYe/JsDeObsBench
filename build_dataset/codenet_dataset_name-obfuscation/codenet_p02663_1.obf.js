const input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
let cin = input['split'](/ |\n/), cid = 0x0;
const next = () => cin[cid++];
const nexts = _0x30e321 => cin['slice'](cid, cid += _0x30e321)['map'](_0x2a8cbb => parseInt(_0x2a8cbb));
const [H1, M1, H2, M2, K] = nexts(0x5);
const time = H2 * 0x3c + M2 - (H1 * 0x3c + M1) - K;
time > 0x0 ? console['log'](time) : console['log'](0x0);