module.exports = function multiply(first, second) {
  let firstArr = first.split('').reverse();
  let secondArr = second.split('').reverse();
  

  let steck = [];

  for (let i = 0; i < firstArr.length; i++) {
    for (let j = 0; j < secondArr.length; j++) {
      let number = firstArr[i] * secondArr[j];
    
      if ((steck[i + j])){
        steck[i + j]=steck[i + j] + number
      }
      else{
        steck[i + j]=number
      }
      
    }
  }

  for (let i = 0; i < steck.length; i++) {
    let num = steck[i] % 10;
    let carry = Math.floor(steck[i] / 10);
    steck[i] = num;

    if (steck[i + 1])
      steck[i + 1] += carry;
    else if (carry != 0)
      steck[i + 1] = carry;
  }

  let rrr=steck.reverse().join('')
  console.log(rrr)
  return rrr;
  
}
