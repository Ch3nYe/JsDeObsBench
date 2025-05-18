function search(h) {
    var is_start = false;
    for (var i = 0; i < h.length; i++) {
        if (is_start) {
            if (h[i] == 0) {
                break
            }
            h[i] -= 1

        } else {
            if (h[i] == 0) {
                continue;
            }

            is_start = true;
            h[i] -= 1
        }
    }
    return h
}

function main(arg) {
	var h = arg.split("\n")[1].split(" ").map(e => Number(e))
	var arr = []

    var i = 0;

    for (i = 1;;i++) {
        h = search(h)
        if (h[0] == 0) {
            var b = h.filter((x, i, self) => self.indexOf(x) === i);
            if (b.length == 1) {
                break
            }
        }
    }
	 console.log(i)
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
