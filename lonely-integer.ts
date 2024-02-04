import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function lonelyinteger(arr: number[]): number {
  return arr.filter((value) => arr.indexOf(value) === arr.lastIndexOf(value))[0];
}

function main() {
  rl.question('Enter numbers separated by spaces: ', (input: string) => {
    const numbers = input.split(' ').map(Number);
    const result = lonelyinteger(numbers);
    console.log(result);
    rl.close();
});
}

main();
