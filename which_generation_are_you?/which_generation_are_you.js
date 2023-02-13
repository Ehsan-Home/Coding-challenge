// Link: https://edabit.com/challenge/48EJWLhF224na8po3

function generation(x, y) {
  let males = {
    "-3": "great grandfather",
    "-2": "grandfather",
    "-1": "father",
    0: "me!",
    1: "son",
    2: "grandson",
    3: "great grandson",
  };

  let females = {
    "-3": "great grandmother",
    "-2": "grandmother",
    "-1": "mother",
    0: "me!",
    1: "daughter",
    2: "granddaughter",
    3: "great granddaughter",
  };

  if (y === "f") {
    return females[x.toString()];
  } else {
    return males[x.toString()];
  }
}
