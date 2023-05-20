const outer = function() {
  const x = 10;

  const inner = function() {
    console.log("The value of x is: " + x);

    const inner2 = function() {
      console.log(x * 2);
    }
    return inner2;
  }
  return inner;
};

const foo = outer();
const inner2 = foo();
inner2();
