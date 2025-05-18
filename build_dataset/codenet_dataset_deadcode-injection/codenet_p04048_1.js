function Main (data) {
  data = data.split(" ");
  data[0] = Number(data[0]);
  data[1] = Number(data[1]);
  var a = data[1] + (data[0] - data[1])
  + ((data[0] - (data[0] - data[1])) * 2)
  + (data[0] - data[1] - (data[0] - (data[0] - data[1]))) * 3
  console.log(a);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
