const readline = require('readline');
const fs = require('fs');

let input = fs.readFileSync(`${__dirname}/input`,'utf8').split('\n');


const adj = (arr) => {
  let count = 1;
  let counts = [];
  for (let i = 1; i < arr.length; i++){
    if(parseInt(arr[i]) === parseInt(arr[i-1])){
      count++;
    }
    if(parseInt(arr[i]) !== parseInt(arr[i-1])){
      counts.push(count);
      count = 1;
    }
  }
  counts.push(count);
  if(counts.includes(2))
    return true;
  return false;
}

const inc = (arr) => {
  for (let i = 1; i < arr.length; i++){
    if(parseInt(arr[i]) < parseInt(arr[i-1])){
      return false
    }
  }
  return true;
}

module.exports = {
  solution1: async () => {
    answer = 0;
    range = [240298, 784956];
    for(let i = 240298; i <= 784956; i++){
      if(inc(i.toString().split('')) && adj(i.toString().split(''))){
        answer++;
      }
    }
    return answer;
  },
  
  solution2: async () => {
    let answer = 0;
    input.forEach((line) => {
    // solution
    });
    return answer;
  }
}
