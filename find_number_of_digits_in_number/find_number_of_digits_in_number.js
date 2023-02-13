// Link: https://edabit.com/challenge/yFJzLfYghz7ZtsyAN

function num_of_digits(num) {
  if (num === 0) {
    return 1;
  }

  let counter = 0;

  num = Math.abs(num);

  while (num !== 0) {
    num = Math.floor(num / 10);
    counter++;
  }

  return counter;
}
