const a = [1, 2, 3, 4, 5];

const b = a.map(number => {
  number = number * 10;
  return number;
});

console.log(a); // [1,2,3,4,5]
console.log(b); // [10,20,30,40,50]

const c = [
  {
    number: 1,
  },
  {
    number: 2,
  },
  {
    number: 3,
  },
  {
    number: 4,
  },
  { number: 5 },
];

// const d = c.map(obj => {
//   obj.number = obj.number * 10;
//   return obj;
// });

const d = c.map(obj => {
  return {
    ...obj,
    number: obj.number * 10,
  };
});

console.log(c);
console.log(d);
