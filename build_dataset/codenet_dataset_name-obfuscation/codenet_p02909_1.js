
function Main(arg) {
 
    var N = arg.split("\n")[0];

    if (N === "Sunny") {
       console.log("Cloudy");
    }
    else if (N === "Cloudy") {
        console.log("Rainy");
    }
    else if (N === "Rainy") {
        console.log("Sunny");
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
