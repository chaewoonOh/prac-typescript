type CutType = (x: string) => string;

let cutZero: CutType = function (x) {
  let result = x.replace(/^0+/, "");
  return result;
};
function removeDash(x: string): number {
  let result = x.replace(/-/g, "");
  return parseFloat(result);
}
class User {
  protected x = 10;
}

class NewUser extends User {
  doThis() {
    this.x = 20;
  }
}
