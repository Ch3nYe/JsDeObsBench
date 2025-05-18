let input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
let Arr = input['trim']()['split']('\x0a');
let bmis = new Map();
while (0x1) {
    let n = Arr[0x0];
    if (n == 0x0)
        break;
    Arr['shift']();
    for (var i = 0x0; i < n; ++i) {
        var nums = Arr[0x0]['split']('\x20')['map'](Number);
        var m = nums[0x1] / 0x64;
        var bmi = nums[0x2] / (m * m);
        var dif = Math['abs'](0x16 - bmi);
        bmis['set'](nums[0x0]['toString'](), dif);
        Arr['shift']();
    }
    let sorted = new Map([...bmis['entries']()]['sort']((_0x374a86, _0x1cb985) => _0x374a86[0x1] - _0x1cb985[0x1]));
    console['log'](sorted['keys']()['next']()['value']);
}