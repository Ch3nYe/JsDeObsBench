function Main(input) {
    var TwNqVz = {
        'UmHfU': function (callee, param1) {
            return callee(param1);
        },
        'avocG': function (x, y) {
            return x - y;
        }
    };
    input = input['split']('\x0a');
    var inputs = input[0x1]['split']('\x20');
    function avg(args) {
        var num = 0x0;
        for (var n of args) {
            num += TwNqVz['UmHfU'](Number, n);
        }
        return num / args['length'];
    }
    var average = Math['round'](TwNqVz['UmHfU'](avg, inputs));
    var useStamina = 0x0;
    for (var point of inputs) {
        useStamina += Math['pow'](TwNqVz['avocG'](average, point), 0x2);
    }
    console['log'](useStamina);
}
Main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));