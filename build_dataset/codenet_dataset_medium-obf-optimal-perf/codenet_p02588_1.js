function Main(input) {
  let [l, ...valArr] = input.split('\n')
  valArr = valArr.map(e=>parseFloat(e))
  let result = []
  for(let ele of valArr){
    let temp = valArr.map(e=>{
    	if((e !== ele && (e*ele)%1===0)&&ele<e){
        	return [ele, e]
        }
    })
    temp =temp.filter(e=>e!==undefined)
    if(temp.length){result = [...result, ...temp]}
  }
  console.log(result.length)
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));