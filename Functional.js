//Their are basically two types of prgramming:
          //  --> Imperative - Our code tells the compiler and user how to do task.
            
           // --> Decleartive - Our code tells the compiler and user what to do


// Imperative

/* let name = 'Suhail';
let greeting = 'How are you';

console.log(`${name}, ${greeting}`);

name = 'Mark'
console.log(`${name}, ${greeting}`); 

// Functional
function greeting(name, greet){
return `${name}, ${greet}`
}
console.log(greeting('suahil', 'Whats Up')); 


// Iteration
function sum (numbers){
    let total = 0;
    for(let i = 0; i<numbers.length; i++){
        total += numbers[i]
    }
    return total;
}
console.log(sum([1,2,3,4,5])) 

// Recursion

function sum(numbers){
    if(numbers.length === 1){
        return numbers[0]
    }else{
        return numbers[0] + sum(numbers.slice(1))
    }
    }
console.log(sum([1,2,3,4,5]));  

function fibonacciSeries(n){
let fib = [0,1];
for(let i = 2; i < n ; i++){
    fib[i] = fib[i - 1] + fib[i - 2]
}
return fib;
}
console.log(fibonacciSeries(10)); */

function recursiveFactorial(n) {
    if (n === 0) return 1;
    return n * recursiveFactorial(n - 1);
  }
  console.log(recursiveFactorial(5));



