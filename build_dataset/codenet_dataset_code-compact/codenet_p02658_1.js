function Main(input) {
  input = input.split("\n");
  const N = input[0].trim();
  const values = input[1].split(" ");

  for (let i=0;i<N;i++) {
    if (values[i] == 0) {
    	console.log("0")
	    return
    }
  }
  
  let result = BigInt(1);
  for (let i=0;i<N;i++) {
    const nextVal = BigInt(values[i]);
    
    if (nextVal > BigInt(1000000000000000000)) {
      console.log("-1");
      return
    }
    
    result = result * nextVal;
    
    if (result > BigInt(1000000000000000000)) {
    	console.log("-1");
        return
    }
  }

  console.log(Number(result).toString());
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));