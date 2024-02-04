import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function diagonalDifference(arr: number[][], n: number): number{
  let lrD: number = 0, rlD: number = 0;
  for(let i: number=0; i<n; i++){
      for(let j: number=0; j<n; j++){
          if(i==j){
            lrD += arr[i][j]
          };
          if(i+j==n-1){
              rlD += arr[i][j]
          }
      }
  }
  return Math.abs(lrD - rlD)
}

function main() {
  const result = diagonalDifference([
    [11, 2, 4],
    [4, 5, 6],
    [10, 8, -12]], 3);
  console.log(result);
}

main();
