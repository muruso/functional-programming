// object-oriented
var array = [0, 1, 2, 3, 4, 5, 6];
for (let i = 0;i < array.length; i++) {
    array[i] = Math.pow(array[i], 2);
}
// functional
[0, 1, 2, 3, 4, 5, 6].map(
    function(num) {
        return Math.pow(num, 2);
    }
);
[0, 1, 2, 3, 4, 5, 6].map(num => Math.pow(num, 2));

// impure function
var counter = 0;
function increment() {
    return ++counter;
}
Date.now();
var name = 'ryo';
function beGod() {
  return name = 'RIO';
}

// functional
var input = [80, 90, 100, 10000, 3];
var sum = (total, current) => total + current;
var total = arr => arr.reduce(sum);
var size = arr => arr.length;
var divide = (a, b) => a/b;
var average = arr => divide(total(arr), size(arr));
console.log(average(input));
