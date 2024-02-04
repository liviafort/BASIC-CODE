import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function correctHour(hour: number, dayNight: string): string {
    if (dayNight === 'PM') {
      if(hour == 12){
        return (hour).toString();
      }
      return (hour + 12).toString();
    } else {
        if (hour === 12) {
            return '00';
        }else if(hour < 10){
          return `0${hour}`;
        }
        return (hour).toString();
    }
}

function timeConversion(s: string): string {
    const strSep: string[] = s.split(':');
    const dayNight: string = strSep[2].substring(2, 4);
    const hour: string = correctHour(parseInt(strSep[0]), dayNight);
    return `${hour}:${strSep[1]}:${strSep[2].substring(0, 2)}`
}

function main() {
    rl.question('Enter the time: ', (s) => {
        const result: string = timeConversion(s);
        console.log(result);
        rl.close();
    });
}

main();
