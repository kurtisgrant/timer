
const timer = function(timesArr) {
  for (let time of timesArr) {
    if (time < 0 || isNaN(time)) {
      continue;
    }
    setTimeout(() => {
      process.stdout.write('\x07');
    }, time * 1000);
  }
};

timer(process.argv.slice(2));