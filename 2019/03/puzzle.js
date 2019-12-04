const readline = require('readline');
const fs = require('fs');

let input = fs.readFileSync(`${__dirname}/input`,'utf8').split('\n');

module.exports = {
  solution1: () => {
    answer = 100000000;
    const grid = {};
    const inter = [];
    let x = 0;
    let y = 0;
    let len = 0;
    let direction = 'U';
    let lineNum = 1;
    input.forEach((line) => {
      x = 0,
      y = 0,
      line = line.split(',');
      //grid.push(line);
    
      // first find central port and intersections
      line.forEach((move) => {
        direction = move.split('')[0];
        len = parseInt(move.substr(1, move.length-1));
        switch (direction) {
          case 'D':
            for(let i = 0; i < len; i++){
              y--;
              if(!grid[`${x},${y}`]){
                grid[`${x},${y}`] = lineNum;
              }
              else if(grid[`${x},${y}`] != lineNum){
                inter.push({x, y});
              };
            }
            break;
          case 'U':
            for(let i = 0; i < len; i++){
              y++;
              if(!grid[`${x},${y}`]){
                grid[`${x},${y}`] = lineNum;
              }
              else if(grid[`${x},${y}`] != lineNum){
                inter.push({x, y});
              };
            }
            break;
          case 'L':
            for(let i = 0; i < len; i++){
              x--;
              if(!grid[`${x},${y}`]){
                grid[`${x},${y}`] = lineNum;
              }
              else if(grid[`${x},${y}`] != lineNum){
                inter.push({x, y});
              };
            }
            break;
          case 'R':
            for(let i = 0; i < len; i++){
              x++;
              if(!grid[`${x},${y}`]){
                grid[`${x},${y}`] = lineNum;
              }
              else if(grid[`${x},${y}`] != lineNum){
                inter.push({x, y});
              };
            }
            break;
        }
      });
      lineNum++;
    });
    console.log(inter)
      inter.forEach((point) => {
        let distance = Math.abs(point.x) + Math.abs(point.y);
        if (distance < answer){
          answer = distance;
        }
      })
    return answer;
  },
  
  solution2: async () => {
    answer = 100000000;
    let grid = {};
    let inter = [];
    let x = 0;
    let y = 0;
    let len = 0;
    let direction = 'U';
    let lineNum = 1;
    let firstInter = {x: 0, y: 0}
    input.forEach((line) => {
      x = 0,
      y = 0,
      line = line.split(',');
      //grid.push(line);
    
      // first find central port and intersections
      line.forEach((move) => {
        direction = move.split('')[0];
        len = parseInt(move.substr(1, move.length-1));
        switch (direction) {
          case 'D':
            for(let i = 0; i < len; i++){
              y--;
              if(!grid[`${x},${y}`]){
                grid[`${x},${y}`] = lineNum;
              }
              else if(grid[`${x},${y}`] != lineNum){
                inter.push({x, y});
              };
            }
            break;
          case 'U':
            for(let i = 0; i < len; i++){
              y++;
              if(!grid[`${x},${y}`]){
                grid[`${x},${y}`] = lineNum;
              }
              else if(grid[`${x},${y}`] != lineNum){
                inter.push({x, y});
              };
            }
            break;
          case 'L':
            for(let i = 0; i < len; i++){
              x--;
              if(!grid[`${x},${y}`]){
                grid[`${x},${y}`] = lineNum;
              }
              else if(grid[`${x},${y}`] != lineNum){
                inter.push({x, y});
              };
            }
            break;
          case 'R':
            for(let i = 0; i < len; i++){
              x++;
              if(!grid[`${x},${y}`]){
                grid[`${x},${y}`] = lineNum;
              }
              else if(grid[`${x},${y}`] != lineNum){
                inter.push({x, y});
              };
            }
            break;
        }
      });
      lineNum++;
    });
    
    let inter2 = inter;
    let inetReached = false;
    grid = {};
    answer = 0;
    let ans = {};
    let interCoutner = 0;
    input.forEach((line) => {
      interCounter = 0;
      interReached = false;
      x = 0,
      y = 0,
      line = line.split(',');
      answer = 0;
      //grid.push(line);
      
      // first find central port and intersections
      line.forEach((move) => {
        direction = move.split('')[0];
        len = parseInt(move.substr(1, move.length-1));
        switch (direction) {
          case 'D':
            for(let i = 0; i < len; i++){
              y--;
              answer++;
              inter2.forEach((point, i) =>{
                if(x === point.x && y === point.y){
                  if(!ans[i]){
                    ans[i] = 0;
                  }
                  ans[i] += answer;
                }
              })
              if(!grid[`${x},${y}`]){
                grid[`${x},${y}`] = lineNum;
              }
              else if(grid[`${x},${y}`] != lineNum){
                inter.push({x, y});
              };
            }
            break;
          case 'U':
            for(let i = 0; i < len; i++){
              y++;
              answer++;
              inter2.forEach((point, i) =>{
                if(x === point.x && y === point.y){
                  if(!ans[i]){
                    ans[i] = 0;
                  }
                  ans[i] += answer;
                }
              })
              if(x === inter[0].x && y === inter[0].y){
                interReached = true;
              }
              if(!grid[`${x},${y}`]){
                grid[`${x},${y}`] = lineNum;
              }
              else if(grid[`${x},${y}`] != lineNum){
                inter.push({x, y});
              };
            }
            break;
          case 'L':
            for(let i = 0; i < len; i++){
              x--;
              answer++;
              inter2.forEach((point, i) =>{
                if(x === point.x && y === point.y){
                  if(!ans[i]){
                    ans[i] = 0;
                  }
                  ans[i] += answer;
                }
              })
              if(x === inter[0].x && y === inter[0].y){
                interReached = true;
              }
              if(!grid[`${x},${y}`]){
                grid[`${x},${y}`] = lineNum;
              }
              else if(grid[`${x},${y}`] != lineNum){
                inter.push({x, y});
              };
            }
            break;
          case 'R':
            for(let i = 0; i < len; i++){
              x++;
              answer++;
              inter2.forEach((point, i) =>{
                if(x === point.x && y === point.y){
                  if(!ans[i]){
                    ans[i] = 0;
                  }
                  ans[i] += answer;
                }
              })
              if(x === inter[0].x && y === inter[0].y){
                interReached = true;
              }
              if(!grid[`${x},${y}`]){
                grid[`${x},${y}`] = lineNum;
              }
              else if(grid[`${x},${y}`] != lineNum){
                inter.push({x, y});
              };
            }
            break;
        }
      });
      lineNum++;
    });
    console.log(ans);
    return Object.values(ans).sort()[0];
  }
}