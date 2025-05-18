(function(input) {
    console.log(input.replace(/\n$/, '').split('').map(function(e) {
        if (e.match(/[a-z]/)) {
            return e.toUpperCase();
        } else if (e.match(/[A-Z]/)) {
            return e.toLowerCase();
        }
        return e;
    }).join(''));
})(require('fs').readFileSync('/dev/stdin', 'utf8'));