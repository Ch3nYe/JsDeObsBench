const input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
let cin = input['split'](/ |\n/), cid = 0x0;
const next = () => cin[cid++];
const nexts = n => cin['slice'](cid, cid += n)['map'](i => parseInt(i));
const [H1, M1, H2, M2, K] = nexts(0x5);
const time = H2 * 0x3c + M2 - (H1 * 0x3c + M1) - K;
time > 0x0 ? console['log'](time) : console['log'](0x0);