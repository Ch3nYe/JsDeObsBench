function Main(input) {
    const repPEa = {
        'LvoHo': function (x, y) {
            return x - y;
        }
    };
    input = input['split']('\x0a');
    input['shift']();
    let xy = input['map'](val => val['split']('\x20')['map'](Number));
    let arr0 = xy['map'](val => val[0x0] + val[0x1]);
    let arr1 = xy['map'](val => val[0x0] - val[0x1]);
    let arr0_calc = repPEa['LvoHo'](Math['max'](...arr0), Math['min'](...arr0));
    let arr1_calc = Math['max'](...arr1) - Math['min'](...arr1);
    console['log'](Math['max'](arr0_calc, arr1_calc));
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));