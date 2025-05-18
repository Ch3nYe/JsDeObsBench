const input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
const lines = input['split']('\x0a');
let K = lines[0x0]['trim']() - 0x0;
let ans = '';
for (let i = 0x0; i < K; i++) {
    ans += 'ACL';
}
console['log'](ans);