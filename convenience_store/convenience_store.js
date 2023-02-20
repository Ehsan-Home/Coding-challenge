// Link: https://edabit.com/challenge/erFxBbqzZPSegMwnc

function changeEnough(change, amountDue) {
  return (
    change[0] * 0.25 + change[1] * 0.1 + change[2] * 0.05 + change[3] * 0.01 >=
    amountDue
  );
}
