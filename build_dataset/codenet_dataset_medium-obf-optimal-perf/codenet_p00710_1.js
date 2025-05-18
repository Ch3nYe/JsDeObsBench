(function (input) {
    var inputs = input.replace(/\r/g, '').split("\n");

    while(true) {
        var cards = [],
            line = inputs.shift().split(" "),
            n = parseInt(line[0]),
            r = parseInt(line[1]);

        if ( n === 0 && r === 0 ) break;

        for ( var i = n; i > 0; i-- ) {
            cards.push(i);
        }

        // シャッフルする回数分だけ
        while(r--) {
            var line = inputs.shift().split(" "),
                p = parseInt(line[0]) - 1,  // 添字なので
                c = parseInt(line[1]),
                tmp;

            tmp = cards.splice(p, c);
            cards = tmp.concat(cards);
        }

        console.log(cards.shift());
    }
})(require("fs").readFileSync("/dev/stdin", "utf8"));