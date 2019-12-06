const readline = require('readline');
const fs = require('fs');

let input = fs.readFileSync(`${__dirname}/input`,'utf8').split('\n');

module.exports = {
  solution1: () => {
    answer = 0;
    const objs = {};
    input.forEach((line) => {
      let obj = line.split(')');
      objs[obj[1]] = obj[0];
    });

    Object.entries(objs).forEach(([k, v]) => {
      let curr = v;
      while(curr != null){
        curr=objs[curr];
        answer++;
      }
    })
    return answer;
  },
  
  solution2: () => {
    answer = 0;
    const objs = {};
    input.forEach((line) => {
      let obj = line.split(')');
      objs[obj[1]] = obj[0];
    });
    const distances = {}
    Object.entries(objs).forEach(([k, v]) => {
      let curr = v;
      distance = 0;
      while(curr != null){
        distances[[k, curr]] = distance;
        curr=objs[curr];
        distance++;
      }
    })
    
    Object.entries(distances).filter(([k, v]) => k.includes('YOU')).forEach(([k1, v1]) => {
      let k = k1.split(',');
      let a = (k[0] == 'YOU') ? k[1] : k[0];
      let v2 = distances[`SAN,${a}`] || distances[`${a},SAN`];
      if(v2){
        if (v1 + v2 < answer || answer === 0)
          answer = v1 + v2;
      }
    });
    return answer;
  }
}
