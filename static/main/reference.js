var foo = {
  bar: function () {
    console.log(this);
  }
};
 
foo.bar(); // Reference, OK => foo
(foo.bar)(); // Reference, OK => foo
 
(foo.bar = foo.bar)(); // global?
(false || foo.bar)(); // global?
(foo.bar, foo.bar)(); // global?