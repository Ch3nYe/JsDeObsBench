
function Main(args){

  const firstRow = args.split("\n")[0];
  const row = args.split("\n")[1].split(" ");

  for(var i = row.length -1; i > 0; i-- ){
    if( row[i-1] > row[i] ){
      // console.log(row[i-1] + "を" + String(row[i-1] -1));
      row[i-1] -= 1;
    }
    if( row[i-1] > row[i] ){
      return console.log("No");
    }
  }

  console.log("Yes");
}


Main(require("fs").readFileSync("/dev/stdin", "utf8"));
