const texiInp = document.getElementById("text")
const binaryInp = document.getElementById("binary")
function textFunc(){
  let inp = texiInp.value
  let arr=[]
  for (var i = 0; i < inp.length; i++) {
    arr.push(inp.charCodeAt(i).toString(2))
  }
  binaryInp.value = arr.join(" ")
}
function binaryFunc(){
  let binaryToText = binaryInp.value.split(" ").map(b=>parseInt(b,2)).map(numberT=>String.fromCharCode(numberT)).join("")
  
  texiInp.value = binaryToText
}
