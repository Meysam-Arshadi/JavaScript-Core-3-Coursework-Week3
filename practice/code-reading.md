# Code reading

## Question 1

Take a look at the following code:

1 let x = 1;
2 function f1()
3 {
4 let x = 2;
5 console.log(x);
6 }
7 console.log(x);

Explain why line 4 and line 6 output different numbers.

Answer:
The outputs are different because the variable's scope are different. Variable x in line 4 is a "local" variable and is only accessible inside the scope of f1() function. So the line 5 will print out 2.
But x in line 1 is a global variable and therefore line 7 will print out 1 as it does not have access to the x variable inside the f1() function.

## Question 2

Take a look at the following code:

```
let x = 10

function f1()
{
    console.log(x)
    let y = 20
}

console.log(f1())
console.log(y)
```

What will be the output of this code. Explain your answer in 50 words or less.

Answer:
console.log(f1()) will output 10, but console.log(y) output is undefined because we do not have access to the local variable y outside of the f1() function.

## Question 3

Take a look at the following code:

```
const x = 9;

function f1(val) {
  val = val + 1;
  return val;
}

f1(x);
console.log(x);

const y = { x: 9 };

function f2(val) {
  val.x = val.x + 1;
  return val;
}

f2(y);
console.log(y);
```

What will be the output of this code. Explain your answer in 50 words or less.

Answer:

Output of console.log(x) is 9 because x is a global variable.
Output of console.log(y) is y = { x: 10 } because we pass an object to the f(2) function and the object has been modified.
