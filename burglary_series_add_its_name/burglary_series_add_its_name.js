// Link : https://edabit.com/challenge/9KEKJG5PZTFmG3Zau
// obj.name = value doesn't work since the object will add name value as the key

function addName(obj, name, value) {
  obj[name] = value;
  return obj;
}
