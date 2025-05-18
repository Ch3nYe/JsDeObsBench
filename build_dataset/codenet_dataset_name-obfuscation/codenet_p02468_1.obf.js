var input = require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']();
var nums = input['split']('\x20')['map'](function (_0x175972) {
    return +_0x175972;
});
var n = nums[0x0];
var m = nums[0x1];
var mod = 0x1;
for (var i = 0x0; i < m; i++) {
    mod = mod * n % 0x3b9aca07;
}
console['log'](mod);