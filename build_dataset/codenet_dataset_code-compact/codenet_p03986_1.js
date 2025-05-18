const Main = (input) => {
    while(input.indexOf("ST") > -1) {
        input = input.replace(/ST/g, "");
    }
    console.log(input.length);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));